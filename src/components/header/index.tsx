import "./header-style.css";
import imgLogo from "../../assets/soccer-player.png";
import imgBola from "../../assets/football.png";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

export default function Header() {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }
  return (
    <div className="container-header">
      <div className="logo">
        <h1>
          Loja
          <span>
            <img src={imgLogo} alt="logo" />
          </span>
          Esp
          <span>
            <img src={imgBola} alt="o" className="bola" />
          </span>
          rtiva
        </h1>
      </div>
      <div className="container-usuario">
        <p>Olá, {username}</p>
        <button onClick={handleLogout}>Sair</button>
      </div>
    </div>
  );
}
