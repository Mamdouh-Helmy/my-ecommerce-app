import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Prodects from "../pages/Prodects/Prodects";
import Login from "../pages/Login/Login";
import Cart from "../pages/Cart/Cart";
import ErrorPage from "../pages/ErrorPage/ErrorPage"; // استيراد صفحة الخطأ

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
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "*", 
    element: <ErrorPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
