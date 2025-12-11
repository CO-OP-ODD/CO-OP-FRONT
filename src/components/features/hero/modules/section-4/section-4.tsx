import {cn} from "@lib/utils.ts";
import {Headline} from "@components/common/headline/headline.tsx";
import {Card} from "@components/ui/card.tsx";

export const Section4 =() => {
    return(
        <section>
            <Headline
                title="Products"
                className={cn("pt-16 page-container")}
            />
            <article className={cn("page-container grid grid-cols-4 gap-4")}>
                <Card className={cn("col-span-3")}>
                    hello
                </Card>
                <Card className={cn("col-span-1")}>
                    hello
                </Card>
                <Card className={cn("col-span-2")}>
                    hello
                </Card>
                <Card className={cn("col-span-1")}>
                    hello
                </Card>
                <Card className={cn("col-span-1")}>
                    hello
                </Card>
            </article>

        </section>
    )
}
