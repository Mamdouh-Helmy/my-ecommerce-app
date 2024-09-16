import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage  from "../pages/Homepage/Homepage";
import Prodects from "../pages/Prodects/Prodects";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/prodets",
    element: <Prodects />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;