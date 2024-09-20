import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { ContactPage } from "./components/ContactPage";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/contact",
        element: <ContactPage />,
      },

      {
        path: '/:country',
        element: <CountryDetail />,
      }
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
