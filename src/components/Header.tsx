import { useAuth } from "../context/AuthContext";
import PrimaryButton from "./PrimaryButton";

export default function Header() {
  const { signOut, currentUser } = useAuth();

  return (
    <div className="header mb-4 flex items-center">
      <h2>Hi, {`${currentUser?.email}`}</h2>
      <PrimaryButton onClick={signOut}>Log out</PrimaryButton>
    </div>
  );
}
