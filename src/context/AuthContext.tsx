import { createContext, type SetStateAction } from "react";

type TokenContextType = {
  token: string | null;
  setToken: React.Dispatch<SetStateAction<string | null>>
  onLogout :()=>void

};

export const AuthContext = createContext<TokenContextType>({
  token: null,
  setToken: () => {},
  onLogout:()=>{}
});
