// Mock Principal Limit Factor (PLF) table
// Format: { age: PLF_value }
// This is a simplified mock table - in production, this would come from HUD/FHA data
const PLF_TABLE: Record<number, number> = {
  62: 0.514,
  63: 0.520,
  64: 0.526,
  65: 0.532,
  66: 0.538,
  67: 0.544,
  68: 0.550,
  69: 0.556,
  70: 0.562,
  71: 0.568,
  72: 0.574,
  73: 0.580,
  74: 0.586,
  75: 0.592,
  76: 0.598,
  77: 0.604,
  78: 0.610,
  79: 0.616,
  80: 0.622,
  81: 0.628,
  82: 0.634,
  83: 0.640,
  84: 0.646,
  85: 0.652,
  86: 0.658,
  87: 0.664,
  88: 0.670,
  89: 0.676,
  90: 0.682,
  91: 0.688,
  92: 0.694,
  93: 0.700,
  94: 0.706,
  95: 0.712,
  96: 0.718,
  97: 0.724,
  98: 0.730,
  99: 0.736,
  100: 0.742,
};

export interface CalculationInputs {
  age: number;
  homeValue: number;
  mortgageBalance: number;
  margin: number; // in percentage (e.g., 2.5 for 2.5%)
  expectedIndex: number; // in percentage (e.g., 3.0 for 3.0%)
  appreciationRate: number; // annual home appreciation rate in percentage
}

export interface MonthlyData {
  month: number;
  year: number;
  loanBalance: number;
  lineOfCredit: number;
  homeValue: number;
  remainingEquity: number;
}

export interface CalculationResults {
  initialPrincipalLimit: number;
  initialCashAvailable: number;
  totalLineOfCreditYear10: number;
  projectedEquityYear25: number;
  monthlyData: MonthlyData[];
}

/**
 * Get PLF value for a given age (interpolates if age is not in table)
 */
function getPLF(age: number): number {
  if (age < 62) return PLF_TABLE[62];
  if (age >= 100) return PLF_TABLE[100];
  
  const lowerAge = Math.floor(age);
  const upperAge = Math.ceil(age);
  
  if (PLF_TABLE[lowerAge] && PLF_TABLE[upperAge]) {
    // Linear interpolation
    const lowerPLF = PLF_TABLE[lowerAge];
    const upperPLF = PLF_TABLE[upperAge];
    return lowerPLF + (upperPLF - lowerPLF) * (age - lowerAge);
  }
  
  // Fallback to nearest age
  const nearestAge = Math.round(age);
  return PLF_TABLE[nearestAge] || PLF_TABLE[62];
}

/**
 * Calculate Initial Principal Limit
 */
export function calculateInitialPrincipalLimit(
  age: number,
  homeValue: number
): number {
  const plf = getPLF(age);
  return homeValue * plf;
}

/**
 * Calculate Note Rate (Expected Index + Margin)
 */
function calculateNoteRate(expectedIndex: number, margin: number): number {
  return (expectedIndex + margin) / 100;
}

/**
 * Calculate MIP rate (Note Rate + 0.5%)
 */
function calculateMIPRate(noteRate: number): number {
  return noteRate + 0.005; // 0.5% = 0.005
}

/**
 * Calculate monthly compound interest (for 1 month)
 */
function compoundMonthly(
  principal: number,
  annualRate: number
): number {
  const monthlyRate = annualRate / 12;
  return principal * (1 + monthlyRate);
}

/**
 * Calculate all monthly amortization data over 30 years (360 months)
 */
export function calculateMonthlyAmortization(
  inputs: CalculationInputs
): CalculationResults {
  const { age, homeValue, mortgageBalance, margin, expectedIndex, appreciationRate } = inputs;
  
  // Calculate initial values
  const initialPrincipalLimit = calculateInitialPrincipalLimit(age, homeValue);
  const initialCashAvailable = Math.max(0, initialPrincipalLimit - mortgageBalance);
  
  // Calculate rates
  const noteRate = calculateNoteRate(expectedIndex, margin);
  const mipRate = calculateMIPRate(noteRate);
  
  // Convert appreciation rate to decimal
  const annualAppreciation = appreciationRate / 100;
  
  // Initialize monthly data array
  const monthlyData: MonthlyData[] = [];
  
  // Starting values
  let loanBalance = mortgageBalance;
  let lineOfCredit = initialCashAvailable;
  let currentHomeValue = homeValue;
  
  // Calculate for 360 months (30 years)
  for (let month = 1; month <= 360; month++) {
    const year = Math.floor((month - 1) / 12) + 1;
    
    // Loan balance grows with Note Rate + MIP (compounding monthly)
    loanBalance = compoundMonthly(loanBalance, noteRate + 0.005);
    
    // Line of Credit grows with Note Rate + 0.5% MIP (compounding monthly)
    lineOfCredit = compoundMonthly(lineOfCredit, mipRate);
    
    // Home value appreciates annually (apply at start of each year)
    if (month % 12 === 1 && month > 1) {
      currentHomeValue = currentHomeValue * (1 + annualAppreciation);
    }
    
    // Remaining equity = Home Value - Loan Balance
    const remainingEquity = currentHomeValue - loanBalance;
    
    monthlyData.push({
      month,
      year,
      loanBalance,
      lineOfCredit,
      homeValue: currentHomeValue,
      remainingEquity: Math.max(0, remainingEquity),
    });
  }
  
  // Extract key metrics
  const totalLineOfCreditYear10 = monthlyData.find(d => d.month === 120)?.lineOfCredit || 0;
  const projectedEquityYear25 = monthlyData.find(d => d.month === 300)?.remainingEquity || 0;
  
  return {
    initialPrincipalLimit,
    initialCashAvailable,
    totalLineOfCreditYear10,
    projectedEquityYear25,
    monthlyData,
  };
}

