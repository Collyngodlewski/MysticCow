import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";
import styles from "../app/page.module.css";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mystic Cow",
  description: "Graphic Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Fascinate&family=Playfair+Display&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <div className={styles.page}>{children}</div>
      </body>
    </html>
  );
}
