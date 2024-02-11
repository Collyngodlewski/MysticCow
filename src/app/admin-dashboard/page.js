"use client";
import React from "react";
import styles from "../../app/page.module.css";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";
import UploadArtwork from "../../components/uploadArtwork";
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
