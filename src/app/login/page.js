"use client";
import React, { useState } from "react";
import styles from "../../app/page.module.css";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const router = useRouter();

  const login = async () => {
    try {
      let { data: dataUser, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (dataUser) {
        router.push("/admin-dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.login}>
      <div className={styles.input}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={data?.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.input}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data?.password}
          onChange={handleChange}
        />
      </div>
      {/* <Link href="/admin-dashboard">Admin</Link> */}
      <button onClick={login}>Login</button>
    </div>
  );
}
