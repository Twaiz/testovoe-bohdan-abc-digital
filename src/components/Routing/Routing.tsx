import { lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const AppLayout = lazy(() => import("@/ui/AppLayout"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));

const Products = lazy(() => import(""));
const EditProduct = lazy(() => import(""));
const CreateProduct = lazy(() => import(""));

import { EditProductAction as editProductAction } from "";
import { CreateProductAction as createProductAction } from "";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Navigate replace to="products" />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <EditProduct />,
        action: editProductAction,
      },
      {
        path: "createProduct",
        element: <CreateProduct />,
        action: createProductAction,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
