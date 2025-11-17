import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const onLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ token, setToken, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
