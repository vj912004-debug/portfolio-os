import "./globals.css";
import Navbar from "@/components/Navbar";
import VantaBackground from "@/components/VantaBackground";
import Script from "next/script";

export const metadata = {
  title: "Vraj Patel | Portfolio OS",
  description: "MERN Specialist | Architecting digital experiences from Vadodara to New Zealand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        {/* Loads the Three.js engine before the page becomes interactive */}
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" 
          strategy="beforeInteractive"
        />
      </head>
      
      {/* suppressHydrationWarning stops browser extensions from crashing your site */}
      <body suppressHydrationWarning className="bg-[#03050a] text-white antialiased">
        
        {/* The subtle, readable 3D Network Background */}
        <VantaBackground />
        
        {/* Global Navigation Menu */}
        <Navbar />

        {/* Main Content Wrapper - zIndex 10 ensures all your text sits ABOVE the 3D background */}
        <main style={{ position: 'relative', zIndex: 10 }}>
          {children}
        </main>
        
      </body>
    </html>
  );
}