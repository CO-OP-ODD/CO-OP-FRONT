import React from "react";
import {cn} from "@lib/utils.ts";
import {
    Carousel,
    type CarouselApi, CarouselContent, CarouselItem
} from "@components/ui/carousel.tsx";
import {NewsCard} from "@components/features/hero/card/news-card/news-card.tsx";
import {hero_section_1_dummy} from "@data/hero/news";
import {Headline} from "@components/common/headline/headline.tsx";

export const Section1 = () => {
    // state
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState<number>(0);
    const [count, setCount] = React.useState<number>(0);



    // when component mounted check api status
    React.useEffect(() => {
        if (!api) { // null case
            return; // escape
        }

        // when api exists
        setCount(api.scrollSnapList().length); // get item length
        setCurrent(api.selectedScrollSnap() + 1); // set current count number

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1); // when selected
        });
    }, [api])

    return (
        <section className={cn("page-container")}>
            <Headline
                title="News"
                className={cn("pt-16")}
            />

            <div className={cn("carousel relative")}>
                <Carousel setApi={setApi} className={cn("w-full max-w-full")}>
                    <CarouselContent className={cn("")}>
                        {/* need modify by dummy data */}
                        {(hero_section_1_dummy).map((newItem, index) => (
                            <CarouselItem key={index}>
                                <NewsCard
                                    imgUrl={newItem.img}
                                    title={newItem.title}
                                    description={newItem.description}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                {/* pager area */}
                <div className={cn("absolute bottom-3 left-1/2 -translate-x-1/2 mt-4 flex items-center justify-center" +
                    " gap-2")}>
                    {Array.from({length: count}).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={cn(
                                "transition-all h-2 w-2 rounded-full bg-gray-400",
                                {
                                    "w-6" : current === index + 1,
                                    "bg-white" : current === index + 1,
                                })
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
