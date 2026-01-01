import { Outfit, Cairo } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ClientProviders from "@/components/ClientProviders";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});



const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata = {
  title: "English Portal | Blackgold High Institute",
  description: "Weekly reports and resources for the English Department at Blackgold High Institute.",
};

export default function RootLayout({ children }) {
  // Static export cannot use server-side cookies.
  // Default to 'ar' and 'rtl'. ClientProviders will handle client-side preference.
  const lang = 'ar';
  const dir = 'rtl';

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning={true}>
      <body className={`${outfit.variable} ${cairo.variable}`}>
        <ClientProviders initialLanguage={lang}>
          <div className="app-container">
            <Sidebar />
            <main className="main-content">
              {children}
            </main>
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
