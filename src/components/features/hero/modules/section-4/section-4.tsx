import {cn} from "@lib/utils.ts";
import {Headline} from "@components/common/headline/headline.tsx";
import {Card} from "@components/ui/card.tsx";
import ProductImageOverlayCard from "@/features/product/list/product-image-overlay-card/product-image-overlay-card.tsx";
import ProductCardShell from "@/features/product/list/product-card-shell/product-card-shell.tsx";
import {PRODUCTS} from "@data/products.ts";
import "./styles/index.scss";

export const Section4 =() => {
    return(
        <section>
            <Headline
                title="Products"
                className={cn("pt-16 page-container")}
            />
            <article className={cn(" page-container grid grid-cols-4 gap-4")}>
                <Card className={cn("card col-span-2 p-0 border-none bg-none shadow-none aspect-square")}>
                    <ProductCardShell key={PRODUCTS[0].id} to={`/product/${PRODUCTS[0].id}`}>
                        <ProductImageOverlayCard product={PRODUCTS[0]} />
                    </ProductCardShell>
                </Card>
                <Card className={cn(" card col-span-2 p-0 border-none bg-none shadow-none aspect-square")}>
                    <ProductCardShell key={PRODUCTS[1].id} to={`/product/${PRODUCTS[1].id}`}>
                        <ProductImageOverlayCard product={PRODUCTS[1]} />
                    </ProductCardShell>
                </Card>

                <Card className={cn(" card col-span-2 p-0 border-none bg-none shadow-none aspect-square")}>
                    <ProductCardShell key={PRODUCTS[2].id} to={`/product/${PRODUCTS[2].id}`}>
                        <ProductImageOverlayCard product={PRODUCTS[2]} />
                    </ProductCardShell>
                </Card>
                <Card className={cn(" card col-span-2 p-0 border-none bg-none shadow-none aspect-square")}>
                    <ProductCardShell key={PRODUCTS[3].id} to={`/product/${PRODUCTS[3].id}`}>
                        <ProductImageOverlayCard product={PRODUCTS[3]} />
                    </ProductCardShell>
                </Card>
                <Card className={cn(" card col-span-2 p-0 border-none bg-none shadow-none aspect-square")}>
                    <ProductCardShell key={PRODUCTS[4].id} to={`/product/${PRODUCTS[4].id}`}>
                        <ProductImageOverlayCard product={PRODUCTS[4]} />
                    </ProductCardShell>
                </Card>
                <Card className={cn(" card col-span-2 p-0 border-none bg-none shadow-none")}>
                    <ProductCardShell key={PRODUCTS[5].id} to={`/product/${PRODUCTS[5].id}`}>
                        <ProductImageOverlayCard product={PRODUCTS[5]} />
                    </ProductCardShell>
                </Card>
            </article>

        </section>
    )
}
