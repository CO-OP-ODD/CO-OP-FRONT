import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "@/layout/default-layout.tsx";
import {Hero} from "@/pages/hero/hero.tsx";
import {About} from "@components/features/about/about.tsx";
import {Product} from "@/pages/product/product";
import {ProductDetail} from "@/pages/product/product-detail";

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
                element: <Product />,
            },
            {
                path: "/product/:id",
                element: <ProductDetail />,
            },
        ]
    }
])

export default router;