import type {NavRoute} from "@/types";

export const navigation: NavRoute[] = [
    {
        href: "/product",
        title: "Product",
        items: [
            {
                href: "/product/",
                title: "Headset",
            },
            {
                href: "/product/",
                title: "Wireless",
            },
            {
                href: "/product/",
                title: "Software",
            }
        ]
    },
    {
        href: "/app",
        title: "Application",
        items: [
            {
                href: "/app/live",
                title: "Live",
            },
            {
                href: "/app/studio-recording",
                title: "StudioRecording",
            },
            {
                href: "/app/meeting",
                title: "Meeting",
            }
        ]
    },
    {
        href: "/story",
        title: "Story",
        items: [
            {
                href: "/story/customers",
                title: "Customers",
            },
            {
                href: "/story/pro-talks",
                title: "Pro Talks"
            }
        ]
    },
    {
        href: "/support",
        title: "Support",
        items: [
            {
                href: "/support/qna",
                title: "Qna",
            }
        ]
    },
    {
        href: "/company",
        title: "Company"
    }
]
