import {cn} from "@lib/utils.ts";
import {type Product, PRODUCTS} from "@data/products.ts";
import {MultiCarousel} from "@components/common/carousel/multi-carousel/multi-carousel.tsx";
import {Headline} from "@components/common/headline/headline.tsx";
import ProductCardShell from "@/features/product/list/product-card-shell/product-card-shell.tsx";
import ProductImageOverlayCard from "@/features/product/list/product-image-overlay-card/product-image-overlay-card.tsx";

export const Section2 = () => {


    // render preset items
    const items = PRODUCTS.slice(0,7);


    const renderItem = (item:Product) => {
        return(
            <ProductCardShell key={item.id} to={`/product/${item.id}`}>
                <ProductImageOverlayCard product={item} />
            </ProductCardShell>
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
