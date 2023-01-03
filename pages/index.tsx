import Header from "../src/components/Header";
import { useAuth } from "../src/context/AuthContext";
import { useRouter } from "next/router";
import FormStepIndicator from "../src/components/FormStepIndicator";
import Questionnaire from "../src/components/Questionnaire";
import { useEffect } from "react";

export default function Home() {
  const { currentUser } = useAuth();

  const router = useRouter();

  if (!currentUser) {
    router.push("/login");
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#b8c5d3";
  }, []);

  return (
    <div className="dashboard">
      <Header />
      <div className="px-4 py-2 bg-white text-black	rounded min-h-80">
        <Questionnaire />
        <FormStepIndicator />
      </div>
    </div>
  );
}
