import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/login";
import Times from "./pages/times";
import Products from "./pages/products";
import DetailsProduct from "./pages/details-product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/times",
    element: <Times />,
  },
  {
    path: "/products/:id",
    element: <Products />,
  },
  {
    path: "/details/:id",
    element: <DetailsProduct />,
  },
  {
    path: "*",
    element: <h2>Caminho não encontrado</h2>,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
