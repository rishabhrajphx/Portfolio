import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Rishabh Raj",
  description:
    "Software engineer building tools for humans, teams, and machines. Working across AI agents, mobile apps, automation, and infrastructure.",
  openGraph: {
    title: "Rishabh Raj",
    description:
      "Software engineer building tools for humans, teams, and machines.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <div className="mist" aria-hidden="true" />
        <div className="mist-spectral" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />
        <Nav />
        <main className="relative z-10 flex-1">{children}</main>
      </body>
    </html>
  );
}
