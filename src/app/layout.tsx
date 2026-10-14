import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HairBooking - SaaS Platform for Hair Salons",
  description: "Grow your salon with our complete platform for bookings, client management and flexible plans.",
  keywords: "hair salon, booking, haircuts, barbershop, SaaS",
  openGraph: {
    title: "HairBooking - SaaS Platform for Hair Salons",
    description: "Grow your salon with our complete platform for bookings, client management and flexible plans.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
