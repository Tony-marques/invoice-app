import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { InvoiceContextProvider } from "./contexts/InvoiceContext.tsx";
import { ThemeContextProvider } from "./contexts/ThemeContext.tsx";
import "./index.css";
import { router } from "./router/router.tsx";
import { ModalContextProvider } from "./contexts/ModalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <InvoiceContextProvider>
        <ModalContextProvider>
          <RouterProvider router={router} />
        </ModalContextProvider>
      </InvoiceContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
