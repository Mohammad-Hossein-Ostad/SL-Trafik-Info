import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SL Trafik Info",
  description: "Obtain information about SL transport deviations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
