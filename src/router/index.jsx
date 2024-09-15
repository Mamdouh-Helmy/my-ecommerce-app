import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage  from "../pages/Homepage/Homepage";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  },
 
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;