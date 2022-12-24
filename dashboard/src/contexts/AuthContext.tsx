import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { api } from "../services/api";

type User = {
  id: number;
  name: string;
  email: string;
  token: string;
}

type SignInCredencials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn(credencials: SignInCredencials): Promise<void>;
  signOut(): Promise<void>;
  user: User | undefined;
  isAuthenticated: boolean;
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;
  const isLoginPage = useMatch('/login');
  const isRegisterPage = useMatch('/registro');
  const shouldRedirect = isLoginPage || isRegisterPage;

  useEffect(() => {

    const { "auth.token": token } = parseCookies();

    if (token) {

      api.get('/me')
        .then(response => {
          const { id, name, email, token } = response.data;

          setUser({ id, name, email, token });

          if (shouldRedirect)
            navigate("/");
        })
        .catch(() => {
          signOut();
        });
    } else {
      if (!shouldRedirect)
        signOut();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function signIn({ email, password }: SignInCredencials) {

    const response = await api.post("/login", {
      email, password
    });

    setCookie(undefined, 'auth.token', response.data.data.token, {
      maxAge: 60 * 60 * 24 * 30,
      path: "/"
    });

    setUser({
      id: response.data.data.id,
      name: response.data.data.name,
      email: response.data.data.email,
      token: response.data.data.token,
    });

    api.defaults.headers['Authorization'] = `Bearer ${response.data.data.token}`;

    navigate('/');
  }

  async function signOut() {
    destroyCookie(undefined, 'auth.token');
    navigate('/login');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}