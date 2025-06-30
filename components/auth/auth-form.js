"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { auth } from "@/lib/actions/auth-actions";
import styles from "./auth-form.module.css";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";

export default function AuthForm({ mode }) {
  const searchParams = useSearchParams();
  const callback = searchParams.get("callback") ?? "";

  const [formState, formAction] = useActionState(auth.bind(null, mode), {});

  const togglePasswordVisibility = () => {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      passwordField.type = "password";
      eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <h2>{mode === "login" ? "Welcome Back" : "Create Account"}</h2>
          <p>
            {mode === "login"
              ? "Sign in to access NextBite recipes"
              : "Join our community of food lovers"}
          </p>
        </div>

        <form id="auth-form" action={formAction} className={styles.authForm}>
          <input type="hidden" name="callback" value={callback} />
          {mode === "signup" && (
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <div className={styles.inputContainer}>
                <FaUser className={styles.inputIcon} />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </div>
            </div>
          )}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <div className={styles.inputContainer}>
              <FaEnvelope className={styles.inputIcon} />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputContainer}>
              <FaLock className={styles.inputIcon} />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
              <span
                className={styles.passwordToggle}
                onClick={togglePasswordVisibility}
              >
                <FaEye id="eye-icon" className={styles.eyeIcon} />
              </span>
            </div>
          </div>
          {formState.errors && (
            <ul className={styles.formErrors}>
              {Object.keys(formState.errors).map((error) => (
                <li key={error}>{formState.errors[error]}</li>
              ))}
            </ul>
          )}

          <button type="submit" className={styles.submitButton}>
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>

          <div className={styles.switchMode}>
            {mode === "login" ? (
              <p>
                Dont have an account?{" "}
                <Link
                  href={{
                    pathname: "/auth",
                    query: { mode: "signup", callback },
                  }}
                >
                  Sign up
                </Link>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <Link
                  href={{
                    pathname: "/auth",
                    query: { mode: "login", callback },
                  }}
                >
                  Sign in
                </Link>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
