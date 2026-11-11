import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: "NANAWAX — Mode africaine, wax d'aujourd'hui",
  description:
    "NANAWAX, créée par Maureen Ayité, valorise le patrimoine textile africain : vêtements et accessoires pour femmes et hommes, prix en FCFA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
