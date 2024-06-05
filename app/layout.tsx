import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Breadcrumb from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/navbar2/Navbar";
import { ColorsProvider } from "@/theme/useColor";
import { TooltipProvider } from "@/components/ui/tooltip";


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({subsets:['latin'],  variable:'--font-poppins', weight:['400','500','600','700','900'] });

export const metadata: Metadata = {
  title: "Saulo Auto Peças",
  description: "Milhares de peças automotivas, encontre já a sua",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body  className={` dark ${inter.className}  ${poppins.variable}`}>
      <NavigationMenuDemo/>
      <Breadcrumb />
        {children}
        <Footer/>
        </body>
    </html>

  );
}
