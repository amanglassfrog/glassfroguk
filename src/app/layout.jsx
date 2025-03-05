import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ToastProvider } from "@/components/ui/ToastContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Best SEO Agency London | Premium SEO Services & Strategy",
  description:
    "Get a hold of premium SEO services from the best SEO company in London. Market your business with local SEO services, website SEO audit, and much more.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
