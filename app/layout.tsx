import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Providers from "./context/providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-gray-900`}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
