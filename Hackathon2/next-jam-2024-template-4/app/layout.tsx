
import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hekto - Online Furniture Store",
  description: "Shop the latest furniture trends at Hekto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
