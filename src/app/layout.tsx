import Navbar from "./components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "inito",
  description: "Track your fertility hormone at home, in 5 minutes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={montserrat.variable} lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
