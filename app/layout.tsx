import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
export const metadata: Metadata = {
  title: "Mkoia - Logistic Company",
  description: "Mkoia is a logistics company based in Tbilisi, Georgia, providing detailed information about our services, products, and logistics solutions to help businesses move forward."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} `}
      >

        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
