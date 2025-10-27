import type { Metadata, Viewport } from "next"; // 1. Import Viewport here
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Your metadata object (WITHOUT viewport)
export const metadata: Metadata = {
  title: "Fit Ai",
  description: "Creates a workout and diet plan tailored to the user's needs.",
};

// 3. Your new, separate viewport export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
