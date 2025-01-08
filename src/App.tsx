import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/login";
import Times from "./pages/times";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/times",
    element: <Times />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
