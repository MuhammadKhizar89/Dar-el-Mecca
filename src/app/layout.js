import { Cinzel, Cinzel_Decorative, Outfit } from "next/font/google";
import initializeDatabase from "./pages/utils/dbInit";
import "./globals.css";
import { TopBar } from "./_components/TopBar";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import WAme from "./_components/WAme";
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: "700",
});

export const metadata = {
  title: {
    default: "Dar-el-Mecca",
    template: "%s - Dar-el-Mecca"
  },
  description: "Offering Hajj, Umrah, and world tour packages for a memorable travel experience."
};

export default function RootLayout({ children }) {
  // Only initialize DB when environment variables are provided
  if (process.env.DB_HOST && process.env.DB_NAME && process.env.DB_USER) {
    initializeDatabase();
  } else {
    console.log('DB env missing — skipping database initialization.');
  }
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <TopBar />
        <Header />
        {children}
        <Footer />
        <WAme />
      </body>
    </html>
  );
}
