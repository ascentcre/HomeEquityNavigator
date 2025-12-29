import { Anthropic } from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

// Test route to verify API is working
export async function GET() {
  return NextResponse.json({ message: 'Chat API is working' });
}

export async function POST(request) {
  try {
    // Check if API key is configured
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey || apiKey === 'your_anthropic_api_key') {
      console.error('ANTHROPIC_API_KEY is not configured or still has placeholder value');
      return NextResponse.json(
        { error: 'Chatbot API key is not configured. Please add ANTHROPIC_API_KEY to your .env.local file.' },
        { status: 500 }
      );
    }

    // Initialize Anthropic client with the API key
    const anthropic = new Anthropic({
      apiKey: apiKey,
    });

    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // System message to provide context about the reverse mortgage business
    const systemMessage = `You are a helpful assistant for Horizon Equity Navigator, a reverse mortgage specialist service. 
    You help users understand reverse mortgages, answer questions about the service, and provide general information about reverse mortgages.
    Be friendly, professional, and informative. If users have specific questions about their eligibility or need personalized advice, 
    encourage them to use the "Get Your Report" feature or schedule a consultation with an expert.
    
    Key points to mention when relevant:
    - Reverse mortgages allow homeowners 62+ to access home equity without monthly mortgage payments
    - The loan is repaid when the homeowner moves out, sells, or passes away
    - Homeowners retain ownership and can stay in their home
    - Funds can be used for retirement expenses, home care, or other needs
    - FDIC insured through Texana Bank`;

    // Format messages for Claude API
    // Claude expects messages in a specific format - we need to convert from our format
    const claudeMessages = messages.map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content,
    }));

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 1024,
      system: systemMessage,
      messages: claudeMessages,
    });

    // Extract the text content from Claude's response
    const content = response.content[0].text;

    return NextResponse.json({ message: content });
  } catch (error) {
    console.error('Error calling Claude API:', error);
    
    // Provide more specific error messages
    if (error.status === 401) {
      return NextResponse.json(
        { error: 'Invalid API key. Please check your ANTHROPIC_API_KEY in .env.local and ensure it is correct.' },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { error: error.message || 'Failed to get response from chatbot. Please try again.' },
      { status: error.status || 500 }
    );
  }
}

