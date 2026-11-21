import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LUDA | Deputy Secretary, NDC Upper Denkyira West",
    template: "%s | LUDA",
  },
  description:
    "Kingsley Ofori Aidoo (LUDA), Deputy Secretary of the NDC in Upper Denkyira West Constituency. Stronger branches, clean records and faster communication.",
  openGraph: {
    title: "LUDA | Deputy Secretary, NDC Upper Denkyira West",
    description: "Stronger branches, clean records and faster communication for every member.",
    images: ["/images/luda.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className="font-sans">
        <div id="top" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
