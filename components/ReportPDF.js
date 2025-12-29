import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#008080',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#013220',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingBottom: 8,
    borderBottom: '1px solid #e0e0e0',
  },
  label: {
    width: '50%',
    fontWeight: 'bold',
  },
  value: {
    width: '50%',
  },
  table: {
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#008080',
    color: 'white',
    padding: 8,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 8,
    borderBottom: '1px solid #e0e0e0',
  },
  tableCell: {
    flex: 1,
  },
  disclaimer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#f5f5f5',
    fontSize: 10,
    lineHeight: 1.5,
  },
  metricCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  metricLabel: {
    fontSize: 11,
    color: '#666',
    marginBottom: 5,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#008080',
  },
});

export function ReportPDFDocument({ inputs, results }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value || 0);
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Reverse Mortgage Analysis Report</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Information</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Age:</Text>
            <Text style={styles.value}>{inputs.age || 'N/A'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Home Value:</Text>
            <Text style={styles.value}>{formatCurrency(inputs.homeValue)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Current Mortgage Balance:</Text>
            <Text style={styles.value}>{formatCurrency(inputs.mortgageBalance)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Margin:</Text>
            <Text style={styles.value}>{inputs.margin || 0}%</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Expected Index:</Text>
            <Text style={styles.value}>{inputs.expectedIndex || 0}%</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Expected Annual Appreciation:</Text>
            <Text style={styles.value}>{inputs.appreciationRate || 0}%</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Metrics</Text>
          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Initial Cash Available</Text>
            <Text style={styles.metricValue}>
              {formatCurrency(results?.initialCashAvailable)}
            </Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Total Line of Credit at Year 10</Text>
            <Text style={styles.metricValue}>
              {formatCurrency(results?.totalLineOfCreditYear10)}
            </Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Projected Equity at Year 25</Text>
            <Text style={styles.metricValue}>
              {formatCurrency(results?.projectedEquityYear25)}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary Table</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableCell}>Year</Text>
              <Text style={styles.tableCell}>Loan Balance</Text>
              <Text style={styles.tableCell}>Line of Credit</Text>
              <Text style={styles.tableCell}>Home Value</Text>
              <Text style={styles.tableCell}>Remaining Equity</Text>
            </View>
            {results?.monthlyData
              ?.filter((_, index) => index % 12 === 0 || index === results.monthlyData.length - 1)
              .slice(0, 10)
              .map((data, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text style={styles.tableCell}>{data.year}</Text>
                  <Text style={styles.tableCell}>{formatCurrency(data.loanBalance)}</Text>
                  <Text style={styles.tableCell}>{formatCurrency(data.lineOfCredit)}</Text>
                  <Text style={styles.tableCell}>{formatCurrency(data.homeValue)}</Text>
                  <Text style={styles.tableCell}>{formatCurrency(data.remainingEquity)}</Text>
                </View>
              ))}
          </View>
        </View>

        <View style={styles.disclaimer}>
          <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
            FHA Insurance Disclaimer:
          </Text>
          <Text>
            This analysis is for informational purposes only and does not constitute a loan
            commitment. All reverse mortgages are insured by the Federal Housing Administration
            (FHA) and are subject to FHA guidelines and regulations. Actual loan terms may vary
            based on property appraisal, credit history, and other factors. This calculator
            provides estimates only and should not be considered as financial advice. Please
            consult with a licensed reverse mortgage specialist for personalized guidance.
          </Text>
        </View>
      </Page>
    </Document>
  );
}


