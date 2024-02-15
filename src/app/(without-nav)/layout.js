import styles from "../../app/page.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function NavLayout({ children }) {
  return <div className={styles.page}>{children}</div>;
}
