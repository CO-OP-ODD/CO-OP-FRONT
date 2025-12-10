import {cn} from "@lib/utils.ts";
import {typography} from "@styles/tailwind-variations";
import {Link} from "react-router-dom";
import {MdArrowRight} from "react-icons/md";
import {Separator} from "@components/ui/separator.tsx";

interface HeadlineProps{
    className?: string;
    title: string;
}

export const Headline = (
    {
        className,
        title
    }:HeadlineProps
) => {
    return(
        <div className={cn("h-fit pb-4 pt-16", className)}>
            <div className={cn("pb-1 my-2 w-full flex justify-between items-end")}>
                <h2 className={cn(" ", typography.h3Typo)}>
                    {title}
                </h2>
                <Link
                    to="/"
                    className={cn("h-fit w-fit flex justify-center items-center")}
                >
                    <span className={cn("h-full")}>more</span>
                    <span className={cn("relative pr-4")}>
                            <MdArrowRight className={cn("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2")}/>
                        </span>
                </Link>
            </div>
            <div className="">
                <Separator className={cn("mt-2")} />
            </div>
        </div>
    )
}
