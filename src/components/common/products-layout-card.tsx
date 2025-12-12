// src/pages/ProductImageOverlayCard.tsx

import { cn } from "@/lib/utils";
import type { Product } from "@/data/temp/products";

type ImageCardProps = {
    product: Product;
    aspectClass?: string;
};

export default function ProductsLayoutCard({
                                                    product,
                                                    aspectClass = "aspect-square",
                                                }: ImageCardProps) {
    return (
        <div
            className={cn(
                "group relative w-full bg-[#ECEBF0] rounded-2xl overflow-hidden flex items-center justify-center",
                aspectClass
            )}
        >
            {/* 이미지 */}
            <img
                src={product.thumbnail}
                alt={product.name}
                className="
          w-2/3 h-2/3 object-contain
          transition-transform duration-300
          group-hover:scale-110
        "
            />

            {/* 뱃지 */}
            {product.badges && product.badges.length > 0 && (
                <div
                    className="
            pointer-events-none
            absolute inset-x-3 top-3
            flex flex-wrap gap-2
            text-[0.6875rem]
            font-semibold
          "
                >
                    {product.badges.map((badge) => (
                        <span
                            key={badge}
                            className="
                px-3 py-1
                bg-[#F4F4F6]
                rounded-full bg-background/90 text-foreground
                shadow-sm
                opacity-0 translate-y-1
                transition-all duration-300
                group-hover:opacity-100 group-hover:translate-y-0
              "
                        >
              {badge}
            </span>
                    ))}
                </div>
            )}

            {/* 상품명 */}
            <div
                className="
          pointer-events-none
          absolute bottom-3 left-3
          px-3 py-1
          text-sm font-semibold text-foreground
          opacity-1 translate-y-2
          transition-all duration-300
          group-hover:text-[#B70A09]
        "
            >
                {product.name}
            </div>
        </div>
    );
}