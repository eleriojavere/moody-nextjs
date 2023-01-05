import Header from "../src/components/Header";
import { useAuth } from "../src/context/AuthContext";
import { useRouter } from "next/router";
import FormStepIndicator from "../src/components/FormStepIndicator";
import Questionnaire from "../src/components/Questionnaire";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const { currentUser } = useAuth();

  const router = useRouter();

  if (!currentUser) {
    router.push("/login");
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#F5F6FA";
  }, []);

  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const codeChallenge = process.env.NEXT_PUBLIC_SPOTIFY_CODE_CHALLENGE;
  const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
  const state = process.env.NEXT_PUBLIC_SPOTIFY_STATE;

  return (
    <div className="dashboard">
      <Header />
      <Link
        href={`https://accounts.spotify.com/authorize?client_id=${clientId}&code_challenge=${codeChallenge}&response_type=token&redirect_uri=${redirectUri}&code_challenge_method=S256&scope=user-read-private user-read-email&state=${state}`}
      >
        Click here to get song suggestions
      </Link>
    </div>
  );
}
