import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Josh Fynly | Backend Engineer & AI Developer",
  description: "Professional portfolio showcasing backend engineering, AI tools, and simulation projects.",
  keywords: ["Backend Engineer", "AI Developer", "Python", "Full Stack"],
  authors: [{ name: "Josh Fynly", url: "https://github.com/Josh-Fynly" }],
  creator: "Josh Fynly",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio.vercel.app",
    title: "Josh Fynly | Backend Engineer & AI Developer",
    description: "Professional portfolio showcasing backend engineering, AI tools, and simulation projects.",
    siteName: "Josh Fynly Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Fynly | Backend Engineer & AI Developer",
    description: "Professional portfolio showcasing backend engineering, AI tools, and simulation projects.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%233b82f6'>J</text></svg>" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
