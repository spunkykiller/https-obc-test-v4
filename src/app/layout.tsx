import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OurClients from "@/components/ui/OurClients";
import FloatingActions from "@/components/ui/FloatingActions";
import { ModalProvider } from "@/context/ModalContext";
import ContactModal from "@/components/ui/ContactModal";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orange Business Centre | Premium Luxury Co-Working",
  description: "Experience state-of-the-art flexible workspaces, private cubes, and conference rooms in Visakhapatnam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${inter.variable} font-sans antialiased bg-background-white text-text-charcoal flex flex-col min-h-screen relative`}>
        <ModalProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <OurClients />
          <FloatingActions />
          <Footer />
          <ContactModal />
        </ModalProvider>
      </body>
    </html>
  );
}
