import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthProvider } from "../src/context/AuthContext";
import { FormProvider } from "../src/context/FormContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </AuthProvider>
  );
}
