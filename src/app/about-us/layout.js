import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "About Us - Glassfrog Technologies",
  description: "Glassfrog offers specialised solutions in Website Development, Mobile Application, Digital Marketing, SEO, SMM, and more. Learn everything about us here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
