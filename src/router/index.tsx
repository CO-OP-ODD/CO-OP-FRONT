import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "@/layout/default-layout.tsx";
import {Hero} from "@/pages/hero/hero.tsx";
import {About} from "@components/features/about/about.tsx";
import {ProductDetail} from "@/pages/product/product-detail";
import ProductPage from "@/features/product/list/product-page/product-page.tsx";

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
                element: <About />,
            },
            {
                path: "/product",
                element: <ProductPage />,
            },
            {
                path: "/product/:id",
                element: <ProductDetail />,
            },

        ]
    }
])

export default router;
