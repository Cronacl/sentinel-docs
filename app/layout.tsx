import type { Metadata } from "next";
import localFont from "next/font/local";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

const millionaire = localFont({
  src: [
    {
      path: "./fonts/Millionaire-Roman.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-millionaire",
});

export const metadata: Metadata = {
  title: {
    default: "Sentinel Docs",
    template: "%s | Sentinel Docs",
  },
  description: "Product documentation for Sentinel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${millionaire.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
