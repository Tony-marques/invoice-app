import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import {
    InvoiceContextProvider
} from "./contexts/InvoiceContext.tsx";
import {
    ModalContextProvider
} from "./contexts/ModalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <InvoiceContextProvider>
            <ModalContextProvider>
                <RouterProvider router={router}/>
            </ModalContextProvider>
        </InvoiceContextProvider>
    </React.StrictMode>
);
