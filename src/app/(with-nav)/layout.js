import styles from "../../app/page.module.css";
import { Inter } from "next/font/google";
import Nav from "../../components/nav";

const inter = Inter({ subsets: ["latin"] });

export default function NoNavLayout({ children }) {
  return (
    <div className={styles.page}>
      <Nav /> {children}
    </div>
  );
}
