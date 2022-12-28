import "../styles/entry.scss";
import type { AppProps } from "next/app";
import { AuthProvider } from "../src/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
