import Link from "next/link";
import { useEffect, useState } from "react";
import FormStepIndicator from "../src/components/FormStepIndicator";
import Questionnaire from "../src/components/Questionnaire";

export default function SongSuggester() {
  const [token, setToken] = useState<string | null | undefined>("");

  useEffect(() => {
    const hash: null | string | undefined = window.location.hash;
    let token: null | string | undefined =
      window.localStorage.getItem("spotify_token");

    if (token == null && hash != null) {
      token = hash.substring(1);

      token = token.split("&").find((elem) => elem.startsWith("access_token"));

      if (token) {
        token = token.split("=")[1];
        window.location.hash = "";
        window.localStorage.setItem("spotify_token", token);
      }
    }

    setToken(token);
  }, []);

  console.log("jou", token);

  return (
    <div className="px-6 py-6 bg-white text-black	rounded min-h-80">
      <Questionnaire />
      <FormStepIndicator />
    </div>
  );
}
