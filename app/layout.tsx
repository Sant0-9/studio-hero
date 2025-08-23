import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { site } from "@/lib/content";
import { NoFlashTheme } from "./NoFlashTheme";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/Toaster";
// Scroll progress is attached via a tiny client component in `components/ScrollProgress.tsx`.

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://studio-hero.example.com"),
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    url: "/",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <NoFlashTheme />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <div className="fixed left-0 right-0 top-0 h-0.5 bg-black/10 [content-visibility:auto]" aria-hidden>
            <div id="scroll-progress" className="h-full w-0 bg-black" />
          </div>
          {/* Progress bar root; JS attaches in client components if used on pages */}
          <Nav />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
