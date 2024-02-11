import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <Link href="/commissions-artwork">Contact</Link> */}
        {/* <div>Mystic Cow</div> */}
        <div>Home!</div>
        {/* <Link href="/login">Login</Link> */}
        {/* <Link href="/commissions-artwork">Artwork</Link> */}
      </div>
    </main>
  );
}
