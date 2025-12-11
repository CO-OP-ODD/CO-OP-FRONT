import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "@/layout/default-layout.tsx";
import {Hero} from "@/pages/hero/hero.tsx";
import {ProductDetail} from "@/pages/product/product-detail";
import ProductPage from "@/features/product/list/product-page/product-page.tsx";
import Company from "@/pages/company/company.tsx";

const router = createBrowserRouter([
    {
        // parent router
        path: "/",
        element: <DefaultLayout/>, // (capital c)
        children: [
            {
                // children router
                index: true,
                element: <Hero />
            },
            {
                path: "/about",
                element: <Company />,
            },
            {
                path: "/product/:id",
                element: <ProductDetail />,
            },
            {
                path: "/product",
                element: <ProductPage />,
            },
            {
            }

        ]
    }
])

export default router;
