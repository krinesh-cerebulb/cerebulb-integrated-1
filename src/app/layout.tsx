import { SiteHeader } from "@/components/site-header";
import Footer from '@/components/ui/Footer';
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { MainHero } from "@/components/ui/main-hero";
import { fontMono, fontSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Cerebulb integrated",
  description: "Cerebulb integrated",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background flex flex-col min-h-svh overscroll-none font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <SiteHeader />
        {children}
        <Footer />
        {/* <MainHero/> */}
      </body>
    </html>
  );
}
