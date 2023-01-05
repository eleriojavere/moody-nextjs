import { useRouter } from "next/router.js";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase.js";

export type User = {
  email?: string | null;
} | null;
export interface AuthContextInterface {
  currentUser: User;
  signup: (email: string, password: string) => void;
  logIn: (email: string, password: string) => void;
  signOut: () => void;
  error: null | { code: string; message: string };
}

export const AuthContext = React.createContext<AuthContextInterface>({
  currentUser: null,
  signup: () => {},
  logIn: () => {},
  signOut: () => {},
  error: null,
});

export function AuthProvider({ children }: { children: ReactElement }) {
  const [currentUser, setCurrentUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | AuthContextInterface["error"]>(
    null
  );
  const router = useRouter();

  function signup(email: string, password: string) {
    router.push("/login");
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function logIn(email: string, password: string) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential?.user?.email != null) {
          const user = { email: userCredential.user?.email };
          setCurrentUser(user);
          router.push("/");
        }
      })
      .catch((error) => {
        setError({ code: error.code, message: error.message });
      });
  }

  function signOut() {
    auth
      .signOut()
      .then(() => {
        setCurrentUser(null);
        window.location.reload();
      })
      .catch((error) => {
        setError({ code: error.code, message: error.message });
      });
    window.localStorage.removeItem("spotify_token");
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    logIn,
    signOut,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
