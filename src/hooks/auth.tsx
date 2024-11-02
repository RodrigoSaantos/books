import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  isAdm: boolean;
};

interface AuthContextData {
  user: User | undefined;
  setUserState: (state: User | undefined) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  function setUserState(state: User | undefined) {
    setUser(state);
  }

  useEffect(() => {
    const token = localStorage.getItem('auth')
    if (token) {
      setUser(JSON.parse(token))
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUserState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);