import type {NavRoute} from "@/types";

export const navigation: NavRoute[] = [
    {
        href: "/",
        title: "Home"
    },
    {
        href: "/about",
        title: "About"
    },
    {
        href: "/shop",
        title: "Shop",
        items:[
            {
                href: "/shop/product-1",
                title: "product-1",
            }
        ]
    },
    {
        href: "/privacy-policy",
        title: "Privacy",
        items:[
            {
                href: "/privacy-policy/history",
                title: "History",
            },
            {
                href: "/privacy-policy/contact",
                title: "Contact"
            }
        ]
    },
]
