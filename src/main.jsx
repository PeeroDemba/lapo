import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./pages/Dashboard.jsx";
import CardProfile from "./pages/CardProfile.jsx";
import CreateProfile from "./pages/CreateProfile.jsx";
import CardRequest from "./pages/CardRequest.jsx";
import RequestDetails from "./pages/RequestDetails.jsx";
import Blank from "./pages/Blank.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/cardprofile",
        element: <CardProfile />,
      },
      {
        path: "/cardprofile/createprofile",
        element: <CreateProfile />,
      },
      {
        path: "/cardrequest",
        element: <CardRequest />,
      },
      {
        path: "/cardrequest/requestdetails",
        element: <RequestDetails />,
      },
      {
        path: "/blank",
        element: <Blank />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider value={{ unstyled: true }}>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
