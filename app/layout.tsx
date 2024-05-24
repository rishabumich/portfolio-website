import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishab Gupta",
  description: "Rishab Gupta's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="favicon" href="/favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
