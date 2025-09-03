
"use client";
import { FormEvent } from "react";
import styles from "./styles/login.module.css";
import { login as setLogin } from "@/lib/auth";

export default function Login() {
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    if (email === "test@example.com" && password === "123") {
      setLogin();
      window.location.href = "/dashboard";
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="email" name="email" placeholder="Email" required className={styles.input} />
          <input type="password" name="password" placeholder="Password" required className={styles.input} />
          <button type="submit" className={styles.button}>Login</button>
        </form>

        <button
          type="button"
          onClick={() => (window.location.href = "/remote2")}
          className={styles.button}
        >
          Remote 2
        </button>
      </div>
    </div>
  );
}
