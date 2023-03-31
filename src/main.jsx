import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterationForm from "./components/forms/RegisterationForm";
import SahakariSanstha from "./components/Links/SahakariSanstha";
import Suchana from "./components/Links/Suchana";
import UpayogiSamagri from "./components/Links/UpayogiSamagri";
import AppLayout from "./layouts/AppLayout";
import { Home } from "./pages";
import Laws from "./pages/Laws";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "registeration",
        element: <RegisterationForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
