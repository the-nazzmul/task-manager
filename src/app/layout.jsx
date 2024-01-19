import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/contexts/AuthContextsrc";
import Navbar from "@/components/Navbarsrc";
import Footer from "@/components/Footersrc";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clerk",
  description: "Simple task manager app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <div className="fixed w-full top-0 z-10">
            <Navbar />
          </div>
          <main>{children}</main>
          <div>
            <Footer />
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
