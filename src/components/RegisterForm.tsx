import React, { useState } from "react";
import { Formik } from "formik";
import PrimaryButton from "./PrimaryButton";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function RegisterForm() {
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const router = useRouter();

  if (currentUser != null) {
    router.push("/");
  }

  const validateUser = async (values: { email: string; password: string }) => {
    try {
      setError("");
      signup(values.email, values.password);
    } catch (e) {
      console.error("Something went wrong", e);
      setError("Failed to register, please try again");
    }
  };

  return (
    <div className="register-form">
      <h1>Moody</h1>
      <h2>Take control of your waves of emotions</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: { email?: string; password?: string } = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values) => {
          validateUser(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <div className="error">
              {errors.email && touched.email && errors.email}
            </div>

            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div className="error">
              {errors.password && touched.password && errors.password}
            </div>
            <div className="error">{error}</div>

            <PrimaryButton type="submit" isDisabled={isSubmitting}>
              Register
            </PrimaryButton>
            <div className="login-link">
              Already have an account? <Link href="/login"> Log in</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
