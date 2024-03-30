import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import Invoices from "../pages/Invoices/Invoices.tsx";
import InvoiceDetails
    from "../pages/InvoiceDetails/InvoiceDetails.tsx";
import Layout from "../components/Layout/Layout.tsx";

export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                element: <Layout/>,
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

        ]
    }
]);