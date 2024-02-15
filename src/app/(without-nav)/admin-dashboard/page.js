"use client";
import React, { useEffect } from "react";
import styles from "../../../app/page.module.css";
import supabase from "../../../lib/supabase";
import { useRouter } from "next/navigation";
import UploadArtwork from "../../../components/uploadArtwork";
import Link from "next/link";
import Image from "next/image";

function AdminDashboard() {
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
        </div>
        <div className={styles.adminSideBar}>
          Admin Dashboard
          <Link href="/admin-dashboard/upload">Upload Artwork</Link>
          <div>All Artwork</div>
          <div>Inquiries</div>
          <div>All Artwork</div>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
