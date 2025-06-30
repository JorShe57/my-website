import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elevate Digital | Transforming Ideas Into Digital Excellence",
  description:
    "Elevate Digital crafts web, mobile, marketing and cloud solutions to help businesses thrive.",
  openGraph: {
    title: 'Elevate Digital',
    description:
      'Elevate Digital crafts web, mobile, marketing and cloud solutions to help businesses thrive.',
    url: 'https://example.com',
    siteName: 'Elevate Digital',
    images: [{ url: '/favicon.ico', width: 48, height: 48 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Elevate Digital',
    description:
      'Elevate Digital crafts web, mobile, marketing and cloud solutions to help businesses thrive.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}

