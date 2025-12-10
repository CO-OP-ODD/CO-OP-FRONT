import React from "react";
import {Carousel, CarouselContent, CarouselItem} from "@components/ui/carousel.tsx";
import {cn} from "@lib/utils.ts";
// use generic function

// the render result defend by callback function
interface MultiCarouselProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

// generic arrow function need the syntax... = <T, >({}:...)<T> =>{}
export const MultiCarousel = <T, >(
    {
        items,
        renderItem
    }: MultiCarouselProps<T>

) => {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className={cn("mx-auto overflow-x-visible")}
        >
            <div className={cn("")}>
                <CarouselContent className={cn("page-container pt-12 pb-12 gap-4 justify-start ml-0" +
                    " pl-0")}>
                    {items.map((item, i) => {
                        return (
                            // TODO: modify flex items arrange
                            <CarouselItem key={i} className={cn("basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4" +
                                " xl:basis-1/4" +
                                " aspect-square" +
                                " pl-0")}>
                                {renderItem(item)}
                            </CarouselItem>
                        );
                    })}
                    {/* empty box */}
                    <CarouselItem className={cn("basis-1/4 aspect-square")}>
                    </CarouselItem>
                </CarouselContent>
            </div>
        </Carousel>
    )
}