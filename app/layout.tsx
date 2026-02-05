import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orcas Ji | Software Engineer",
  description:
    "Personal portfolio website showcasing projects, background, and contact information. Focused on full-stack development and applied AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen bg-zinc-50 text-zinc-900 antialiased`}
      >
        {/* Subtle global background gradient */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-zinc-100/60 via-white to-white"
        />

        {/* Soft top glow */}
        <div
          aria-hidden
          className="pointer-events-none fixed left-1/2 top-[-12rem] -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-zinc-200/40 blur-3xl"
        />

        {children}
      </body>
    </html>
  );
}
