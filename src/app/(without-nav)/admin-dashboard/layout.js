"use client";
import React, { useEffect } from "react";
import styles from "../../../app/page.module.css";
import supabase from "../../../lib/supabase";
import { useRouter } from "next/navigation";
import UploadArtwork from "../../../components/uploadArtwork";
import Link from "next/link";
import Image from "next/image";

function AdminDashboardLayout({ children }) {
  const router = useRouter();
  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (!error) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function grabSession() {
    try {
      const { data, error } = await supabase.auth.getSession();

      if (data.session == null) {
        router.push("/login");
      } else {
        console.log("Welcome");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    grabSession();
  });

  const Tab1 = () => (
    <Link href="/admin-dashboard" className={styles.tab}>
      Dashboard
    </Link>
  );

  const Tab2 = () => (
    <Link href="/admin-dashboard/all-artwork" className={styles.tab}>
      All Artwork
    </Link>
  );

  return (
    <div className={styles.container}>
      <div className={styles.adminPage}>
        <div className={styles.adminHeader}>
          <Image
            className={styles.adminImage}
            src="/Logo.jpg"
            width="200"
            height="200"
            alt="Mystic Cow Logo"
          ></Image>

          <button onClick={logout}>Logout</button>
        </div>
        <div className={styles.adminContainer}>
          <div className={styles.adminSideBar}>
            <Tab1 />
            <Tab2 />
          </div>
          <div className={styles.adminMain}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
