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

export const metadata = {
  metadataBase: "https://wrapped.raulcarini.dev",
  title: {
    default: "Developer Wrapped - Raul Carini",
    template: "%s Developer Wrapped - Raul Carini",
  },
  description:
    "A comprehensive overview of my journey, skills, and achievements as a software engineer in the last year.",
  openGraph: {
    url: "https://wrapped.raulcarini.dev",
    siteName: "Developer Wrapped - Raul Carini",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950`}
      >
        {children}
      </body>
    </html>
  );
}
