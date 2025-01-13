import { useNavigate, useParams } from "react-router";
import Header from "../../components/header";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import "./detail-style.css";

interface Data {
  available: boolean;
  name: string;
  price: number;
  _id: string;
  categoryId: string;
  description: string;
  urlImage: string;
  maker: string;
}

export default function DetailsProduct() {
  const { id } = useParams();
  const { token } = useAuth();

  const navigate = useNavigate();

  const [product, setProduct] = useState({} as Data);
  const [isLoading, setIsLoading] = useState(true);

  async function getProducts() {
    try {
      const response = await api.get<Data>(`/product/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      if (token) {
        console.log("Erro ao buscar produtos", error);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
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
      <h1>Detalhes do produto</h1>

      {isLoading && <h3>Carregando...</h3>}
      <div key={product._id} className="produto-container">
        <img src={product.urlImage} alt={product.name} />
        <div className="produto-info">
          <h2>{product.name}</h2>
          <p>{product.maker}</p>
          <p>R$: {product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
