import {Card, CardContent, CardHeader, CardTitle} from "@components/ui/card.tsx";
import {cn} from "@lib/utils.ts";
import {typography} from "@styles/tailwind-variations";

interface NewsCardProps {
    imgUrl: string;
    title: string;
    description: string;
}

export const NewsCard = (
    {
        imgUrl,
        title,
        description,
    }:NewsCardProps
) => {


    return (
        <Card className={cn("p-0 relative h-96")}>
            <CardContent className={cn("absolute left-0 top-0 w-full h-full")}
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                }}
            >

            </CardContent>
            <div className={cn("absolute left-0 right-0 bottom-0 pb-2 w-full h-fit")}>
                <CardHeader className={cn("pb-2")}>
                    <CardTitle className={cn(typography.h3Typo, "text-white")}>{title}</CardTitle>
                </CardHeader>
                <CardContent
                className={cn(typography.pTypo, "text-white")}>
                    {description}
                </CardContent>
            </div>
        </Card>
    )
}
