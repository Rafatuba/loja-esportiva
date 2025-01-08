import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./login-style.css";
import { api } from "../../services/api";
import { useNavigate } from "react-router";

interface ResponseData {
  email: string;
  name: string;
  token: string;
}

export default function Login() {
  const navigate = useNavigate();
  const { setUsername, setUserEmail, setToken } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function logar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await api.post<ResponseData>("/auth", {
        email: email,
        password: password,
      });

      setUsername(response.data.name);
      setUserEmail(response.data.email);
      setToken(response.data.token);

      navigate("/times");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-login">
      <div className="container-form">
        <h1>Login</h1>
        <form onSubmit={logar} className="formulario-login">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
