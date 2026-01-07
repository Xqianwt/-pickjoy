import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PickJoy | Pets & Smart Tools",
  description: "Curated essentials to bring joy to your pets and efficiency to your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-stone-50 text-stone-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
