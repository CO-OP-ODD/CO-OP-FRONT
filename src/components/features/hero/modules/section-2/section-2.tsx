import {cn} from "@lib/utils.ts";
import {Card} from "@components/ui/card.tsx";
import {typography} from "@styles/tailwind-variations";
import {PreviewItem} from "@components/features/hero/card/products/preview/preview.tsx";
import {Link} from "react-router-dom";
import {MdArrowRight} from "react-icons/md";
import {type Product, PRODUCTS} from "@data/hero/products";
import {MultiCarousel} from "@components/common/carousel/multi-carousel/multi-carousel.tsx";
import {Separator} from "@components/ui/separator.tsx";
import {Headline} from "@components/common/headline/headline.tsx";
import React from "react";

export const Section2 = () => {


    // render preset items
    const items = PRODUCTS.slice(0,7);

    const renderItem = (item:Product) => {
        return(
            <PreviewItem
                className={"p-0"}
                imgUrl={item.thumbnail}
                name={item.name}
                tags={item.badges}
            />
        )
    }

    return(
        <section className={cn("")}>
            <Headline
                title="Shop Now"
                className={cn("pt-16 page-container")}
            />


            <div className={cn("w-full")}>
                <MultiCarousel
                    items={items}
                    renderItem={renderItem}
                />
            </div>
        </section>
    )
}
