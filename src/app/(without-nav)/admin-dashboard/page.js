"use client";
import React, { useEffect } from "react";
import styles from "../../../app/page.module.css";
import supabase from "../../../lib/supabase";
import { useRouter } from "next/navigation";
import UploadArtwork from "../../../components/uploadArtwork";
import Link from "next/link";

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
      <div className={styles.admin}>
        Admin Dashboard
        <Link href="/admin-dashboard/upload">Upload Artwork</Link>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;
