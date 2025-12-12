import {cn} from "@lib/utils.ts";
import {Card, CardContent} from "@components/ui/card.tsx";
import type {TypeProduct} from "@/types";
import {typography} from "@styles/tailwind-variations";

interface PreviewItemProps extends TypeProduct{
    className?: string;

}

export const PreviewItem = (
    {
        name,
        imgUrl,
        className
    }:PreviewItemProps
) => {

    // slice 6 of items


    return(
        <Card
            className={cn(className,
                "relative" +
                " w-full aspect-square flex justify-center items-center transition-all bg-gray-200 " +
                "hover:scale-105"
            )}
        >
                <img alt={name} src={imgUrl} className={cn("w-3/5 aspect-square")} />
            <CardContent
                className={cn(
                    "pb-4 pl-4 absolute left-0 bottom-0 flex flex-col gap-1", typography.pTypo
                )}
            >
                <p className="truncate">
                    {name}
                </p>
                {/*<div className={cn("flex gap-2")}>
                    {tags?.map((tag) => (
                        <Badge className={cn(" truncate bg-neutral-400 rounded-full py-0 text-primary" +
                            " font-light" +
                            " ring-1 ring-neutral-400" +
                            " hover:bg-neutral-600 " +
                            " hover:text-white")}>
                            {tag}
                        </Badge>
                    ))}
                </div>*/}
            </CardContent>
        </Card>
    )
}
