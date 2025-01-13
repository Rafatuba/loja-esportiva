import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/login";
import Times from "./pages/times";
import Products from "./pages/products";

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
]);
export default function App() {
  return <RouterProvider router={router} />;
}
