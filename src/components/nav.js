import React from "react";
import styles from "../app/page.module.css";
import Link from "next/link";
import Image from "next/image";
function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/contact">Contact</Link>
        <Link href="/">
          <Image
            src="/Logo.jpg"
            width="200"
            height="200"
            alt="Mystic Cow Logo"
          ></Image>
        </Link>
        {/* <Link href="/login">Login</Link> */}
        <Link href="/commissions-artwork">Artwork</Link>
      </div>
    </div>
  );
}

export default Nav;
