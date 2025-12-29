import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
  title: 'Horizon Equity Navigator | Reverse Mortgage Specialist',
  description: 'Discover how a reverse mortgage can help you stay in the home you love while securing the retirement you deserve. Eliminate monthly payments, fund home care, and optimize your retirement cash flow.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main role="main">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}

