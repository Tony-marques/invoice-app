import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import Invoices from "../pages/Invoices/Invoices.tsx";
import InvoiceDetails
    from "../pages/InvoiceDetails/InvoiceDetails.tsx";

export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Invoices/>
            },
            {
                path: "/:id",
                element: <InvoiceDetails/>
            }
        ]
    }
])