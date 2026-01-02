'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hello! I'm here to help answer your questions about reverse mortgages. 

**Important:** This chat provides educational information only and does not constitute financial, legal, or tax advice. Before proceeding with a reverse mortgage, we recommend you:
- Complete HUD-approved counseling with an independent third-party counselor
- Speak with one of our licensed reverse mortgage specialists
- Consult with your financial and legal advisors

What would you like to know about reverse mortgages? You can ask me anything!`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.message,
        },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I apologize, but I had trouble processing your question. Please try asking again, or feel free to contact us directly for assistance.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-green text-white px-5 py-4 sm:px-6 sm:py-4 rounded-full shadow-lg hover:bg-green-light hover:shadow-xl transition-colors duration-200 z-50 focus:outline-none focus:ring-4 focus:ring-green focus:ring-opacity-50 flex items-center justify-center gap-3 border-0 will-change-auto"
          aria-label="Open chat - We're here to help answer your questions about reverse mortgages"
          style={{ 
            background: 'var(--green-secondary)',
            opacity: 1,
            visibility: 'visible',
            transform: 'none'
          }}
        >
          <MessageCircle className="h-7 w-7 flex-shrink-0 stroke-current fill-none" strokeWidth={2} style={{ stroke: 'currentColor' }} />
          <span className="text-base sm:text-lg font-semibold whitespace-nowrap hidden sm:inline">
            Questions? We&apos;re here to help!
          </span>
          <span className="text-base sm:text-lg font-semibold whitespace-nowrap sm:hidden">
            Chat with us!
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 left-4 md:left-auto md:w-[500px] h-[650px] max-h-[calc(100vh-2rem)] bg-white rounded-lg shadow-2xl flex flex-col z-50 border-2 border-soft-gray-dark">
          {/* Chat Header */}
          <div className="bg-teal text-white p-5 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-2xl mb-1">Chat with Us</h3>
              <p className="text-base text-white">Ask us anything about reverse mortgages</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-teal-light rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close chat"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Disclaimer Banner */}
          <div className="bg-yellow-50 border-b-2 border-yellow-200 px-5 py-4 text-sm text-gray-700 leading-relaxed">
            <p className="font-semibold mb-2 text-base">Important Notice:</p>
            <p>
              Texana Bank - NMLS # 407536, is an Equal Housing Lender. Texana Bank is not an agency of the federal government or acting at the direction of HUD/FHA. Programs, rates, terms, and restrictions are subject to change without notice. Underwriting terms and conditions apply.
            </p>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-5 py-3 ${
                    message.role === 'user'
                      ? 'bg-teal text-white'
                      : 'bg-soft-gray text-gray-900'
                  }`}
                >
                  {message.role === 'user' ? (
                    <p className="text-base leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  ) : (
                    <div className="text-base leading-relaxed text-gray-900 [&_*]:text-gray-900">
                      <ReactMarkdown
                        components={{
                          p: ({ children, ...props }) => (
                            <p className="mb-3 last:mb-0 text-gray-900 text-base" {...props}>
                              {children}
                            </p>
                          ),
                          strong: ({ children, ...props }) => (
                            <strong className="font-bold text-gray-900 text-base" {...props}>
                              {children}
                            </strong>
                          ),
                          ul: ({ children, ...props }) => (
                            <ul
                              className="list-disc list-inside mb-3 space-y-2 ml-0 text-gray-900 text-base"
                              {...props}
                            >
                              {children}
                            </ul>
                          ),
                          li: ({ children, ...props }) => (
                            <li className="ml-4 text-gray-900 text-base" {...props}>
                              {children}
                            </li>
                          ),
                          em: ({ children, ...props }) => (
                            <em className="italic text-gray-900 text-base" {...props}>
                              {children}
                            </em>
                          ),
                          h1: ({ children, ...props }) => (
                            <h1 className="text-xl font-bold mb-3 text-gray-900" {...props}>
                              {children}
                            </h1>
                          ),
                          h2: ({ children, ...props }) => (
                            <h2 className="text-lg font-bold mb-3 text-gray-900" {...props}>
                              {children}
                            </h2>
                          ),
                          h3: ({ children, ...props }) => (
                            <h3 className="text-base font-bold mb-3 text-gray-900" {...props}>
                              {children}
                            </h3>
                          ),
                        }}
                      >
                        {message.content || ''}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-soft-gray rounded-lg px-5 py-3">
                  <Loader2 className="h-6 w-6 animate-spin text-teal" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="border-t-2 border-soft-gray-dark p-5">
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question here..."
                className="flex-1 px-5 py-3 border-2 border-soft-gray-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-lg"
                disabled={isLoading}
                aria-label="Type your question about reverse mortgages"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-teal text-white px-5 py-3 rounded-lg hover:bg-teal-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 min-w-[60px] min-h-[48px] flex items-center justify-center"
                aria-label="Send your message"
              >
                {isLoading ? (
                  <Loader2 className="h-6 w-6 animate-spin" />
                ) : (
                  <Send className="h-6 w-6" />
                )}
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">Press Enter or click Send to ask your question</p>
          </form>
        </div>
      )}
    </>
  );
}

