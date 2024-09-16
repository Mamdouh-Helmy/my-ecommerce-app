import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage  from "../pages/Homepage/Homepage";
import Prodects from "../pages/Prodects/Prodects";
import Login from "../pages/Login/Login";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/prodets",
    element: <Prodects />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;