import {cn} from "@lib/utils.ts";
import {Card} from "@components/ui/card.tsx";
import {Separator} from "@components/ui/separator.tsx";
import {typography} from "@styles/tailwind-variations";
import {ApplicationCard} from "@components/features/hero/card/application-card/application-card.tsx";
import {ApplicationData} from "@data/hero/application";
import {Link} from "react-router-dom";
import {MdArrowRight} from "react-icons/md";
import {Headline} from "@components/common/headline/headline.tsx";

export const Section3 = () => {
    return(
        <section className={cn("page-container")}>
            <Headline title="Applications" className={cn("mb-20")} />
            <div className={cn("flex flex-col gap-20")}>
                {ApplicationData.map((item,index)=>{
                    return(
                        <ApplicationCard
                            key={index}
                            img={item.img}
                            title={item.title}
                            description={item.description}
                        />
                    )
                })}
            </div>
        </section>
    )
}
