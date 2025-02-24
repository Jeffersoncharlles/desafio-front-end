import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../pages/_layouts/app";
import Employees from "../pages/employees";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Employees />,
      },
    ],
  },
]);
