"use client";
import React from "react";
import styles from "../../app/page.module.css";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

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

  async function sessionReload() {
    const { data, error } = await supabase.auth.getSession();
    console.log(data.session);
    if (data.session === null) {
      router.push("/");
      console.log("No session");
      // find a better way to reroute, can see it.
    }
  }

  sessionReload();
  return (
    <div className={styles.main}>
      <div className={styles.description}>Admin Dashboard</div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;
