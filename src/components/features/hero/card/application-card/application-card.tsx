import {cn} from "@lib/utils.ts";
import {Card, CardFooter} from "@components/ui/card.tsx";
import type {TypeApplication} from "@/types";
import {Button} from "@components/ui/button.tsx";
import {typography} from "@styles/tailwind-variations";

interface ApplicationCardProps extends TypeApplication{
    className?: string;
}
export const ApplicationCard = (
    {
        className,
        img,
        title,
        description,
    }:ApplicationCardProps
) => {
    return(
        <div className={cn(className, "h-[30vh] flex justify-stretch gap-6")}>
            <div className={cn("w-full")}>
                <article className={cn("h-full flex flex-col justify-center gap-12")}>
                    <h3 className={cn(typography.h3Typo,  "break-words line-clamp-2")}>
                        {title}
                    </h3>
                    <p className={cn(typography.leadTypo, "line-clamp-2")}>{description}</p>
                </article>
            </div>
            <Card
                className={cn("w-3/5 relative overflow-hidden transition-all  " +
                    " hover:shadow-xl")}
            >
                <CardFooter
                    className={cn(" w-full h-full flex flex-col p-0 justify-end items-end")}
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className={cn("w-full flex justify-end pt-12 pb-4 pr-2")}>
                        <Button className={cn("transition-all hover:bg-red-700")}>
                            Learn More
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
