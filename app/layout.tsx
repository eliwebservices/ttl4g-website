import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/chat/ChatWidget";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TTL4G — Training The Leaders For Greatness",
  description:
    "Nigeria's premier leadership development and cross-cultural consultancy. Serving Nigeria, Africa, and global partners.",
  keywords:
    "leadership development Nigeria, cross-cultural training, Sino-Africa, coaching, performance management",
  openGraph: {
    title: "TTL4G — Training The Leaders For Greatness",
    description:
      "Building leaders who transform organizations across Africa and beyond.",
    url: "https://ttl4g.com",
    siteName: "TTL4G",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          <main className="pt-16">
            {children}
          </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
