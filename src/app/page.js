import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Nav from "../components/nav";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>Home!</div>
      </div>
    </main>
  );
}
