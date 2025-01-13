import { useParams } from "react-router";
import Header from "../../components/header";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

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
  }, []);

  return (
    <div>
      <Header />
      <h1>Itens do time</h1>

      {isLoading && <h3>Carregando...</h3>}

      {products.length < 1 && !isLoading && <h3>Nenhum produto encontrado!</h3>}

      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <img src={product.urlImage} alt="" />
        </div>
      ))}
    </div>
  );
}
