import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import {QueryClient ,QueryClientProvider} from '@tanstack/react-query'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);
const client = new QueryClient({
  defaultOptions:{
    queries:{
      enabled:false,
      refetchOnWindowFocus:false
      
    }
  }
})
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
