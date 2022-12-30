import Header from "../src/components/Header";
import { useAuth } from "../src/context/AuthContext";
import { useRouter } from "next/router";
import MultiStepForm from "../src/components/MultiStepForm";

export default function Home() {
  const { currentUser } = useAuth();
  const router = useRouter();

  if (!currentUser) {
    router.push("/login");
  }
  return (
    <div className="dashboard">
      <Header />
      <MultiStepForm />
    </div>
  );
}
