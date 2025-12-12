import {cn} from "@lib/utils.ts";
import "./styles/index.scss";
import {typography} from "@styles/tailwind-variations";
import {Button} from "@components/ui/button.tsx";

export const Section0 = () => {
    return(
        <section>
            <div className={cn("w-full aspect-auto py-32", "section-0 bg-primary-foreground relative")}>
                <img src="/images/about/hero.png" alt="" className={cn("absolute w-full left-0 top-0")} />
                    <div className={cn("w-1/2 flex flex-col justify-center gap-4 backdrop-blur-sm p-8")}>
                        <strong className={cn(typography.h3Typo, "text-white")}>
                            Create Bla Bla Bla
                        </strong>
                        <p className={cn(typography.pTypo, "text-white ")}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquid animi asperiores consectetur esse.
                        </p>
                        <Button className={cn("w-fit")}>
                            Claim
                        </Button>
                    </div>
                </article>
            </div>
        </section>
    )
}
