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
- Speak with one of our licensed reverse mortgage specialist
- Consult with your financial and legal advisors

How can I assist you today?`,
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
          content: 'Sorry, I encountered an error. Please try again or contact us directly.',
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
          className="fixed bottom-6 right-6 bg-teal text-white p-4 rounded-full shadow-lg hover:bg-teal-light transition-colors duration-200 z-50 focus:outline-none focus:ring-4 focus:ring-teal focus:ring-opacity-50"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 left-4 md:left-auto md:w-96 h-[600px] max-h-[calc(100vh-2rem)] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-soft-gray-dark">
          {/* Chat Header */}
          <div className="bg-teal text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Chat with us</h3>
              <p className="text-sm text-white">Ask us anything about reverse mortgages</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-teal-light rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Disclaimer Banner */}
          <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-3 text-xs text-gray-700 leading-relaxed">
            <p className="font-semibold mb-1">Important Notice:</p>
            <p>
              Texana Bank - NMLS # 407536, is an Equal Housing Lender. Texana Bank is not an agency of the federal government or acting at the direction of HUD/FHA. Programs, rates, terms, and restrictions are subject to change without notice. Underwriting terms and conditions apply.
            </p>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-teal text-white'
                      : 'bg-soft-gray text-gray-900'
                  }`}
                >
                  {message.role === 'user' ? (
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  ) : (
                    <div className="text-sm leading-relaxed text-gray-900 [&_*]:text-gray-900">
                      <ReactMarkdown
                        components={{
                          p: ({ children, ...props }) => (
                            <p className="mb-2 last:mb-0 text-gray-900" {...props}>
                              {children}
                            </p>
                          ),
                          strong: ({ children, ...props }) => (
                            <strong className="font-bold text-gray-900" {...props}>
                              {children}
                            </strong>
                          ),
                          ul: ({ children, ...props }) => (
                            <ul
                              className="list-disc list-inside mb-2 space-y-1 ml-0 text-gray-900"
                              {...props}
                            >
                              {children}
                            </ul>
                          ),
                          li: ({ children, ...props }) => (
                            <li className="ml-4 text-gray-900" {...props}>
                              {children}
                            </li>
                          ),
                          em: ({ children, ...props }) => (
                            <em className="italic text-gray-900" {...props}>
                              {children}
                            </em>
                          ),
                          h1: ({ children, ...props }) => (
                            <h1 className="text-lg font-bold mb-2 text-gray-900" {...props}>
                              {children}
                            </h1>
                          ),
                          h2: ({ children, ...props }) => (
                            <h2 className="text-base font-bold mb-2 text-gray-900" {...props}>
                              {children}
                            </h2>
                          ),
                          h3: ({ children, ...props }) => (
                            <h3 className="text-sm font-bold mb-2 text-gray-900" {...props}>
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
                <div className="bg-soft-gray rounded-lg px-4 py-2">
                  <Loader2 className="h-4 w-4 animate-spin text-teal" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="border-t border-soft-gray-dark p-4">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-soft-gray-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-base"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-teal text-white p-2 rounded-lg hover:bg-teal-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

