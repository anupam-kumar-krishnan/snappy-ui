import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";

import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/providers/theme-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Snappy UI",
  description: "A UI Libraray consisting of rady available Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          suppressHydrationWarning
          className={`${lexend.variable} ${lexend.variable} antialiased`}
        >
          <RootProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </RootProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
