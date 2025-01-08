import { useEffect, useState } from "react";
import Header from "../../components/header";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import "./times-style.css";
import { useNavigate } from "react-router";

interface Data {
  name: string;
  image: string;
  _id: string;
}

export default function Times() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [times, setTimes] = useState<Data[]>([]);

  async function getTimes() {
    try {
      const response = await api.get<Data[]>("/teams", {
        headers: {
          Authorization: token,
        },
      });
      setTimes(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTimes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h1 className="titulo-pagina">Times</h1>
        <div className="times-container">
          {times.length === 0 ? (
            <h3>Carregando...</h3>
          ) : (
            times.map((time) => (
              <div className="times-card" key={time._id}>
                <img src={time.image} alt={time.name} />
                <h2>{time.name}</h2>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
//07:25
