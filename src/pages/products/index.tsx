import { Link, useNavigate, useParams } from "react-router";
import Header from "../../components/header";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./products-style.css";

interface Data {
  available: boolean;
  name: string;
  price: number;
  _id: string;
  categoryId: string;
  decsription: string;
  urlImage: string;
}

export default function Products() {
  const { id } = useParams();
  const { token } = useAuth();

  const [products, setProducts] = useState<Data[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  async function getProducts() {
    try {
      const response = await api.get<Data[]>(`/products/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      setProducts(response.data);
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
      <h1>Itens do time</h1>

      {isLoading && <h3>Carregando...</h3>}

      {products.length < 1 && !isLoading && <h3>Nenhum produto encontrado!</h3>}
      <div className="products-container">
        {products.map((product) => (
          <Link to={`/details/${product._id}`}>
            <div key={product._id} className="products-card">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <img src={product.urlImage} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
