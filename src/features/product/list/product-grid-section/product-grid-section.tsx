// src/pages/ProductGridSection.tsx

import type { Product } from "@/data/products";
import ProductCardShell from "../product-card-shell/product-card-shell";
import ProductImageOverlayCard from "../product-image-overlay-card/product-image-overlay-card";

type ProductGridSectionProps = {
  topProducts: Product[];
  gridProducts: Product[];
};

export default function ProductGridSection({
  topProducts,
  gridProducts,
}: ProductGridSectionProps) {
  return (
    <>
      {/* 상단 메인 */}
      <section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topProducts.map((p, index) => (
            <ProductCardShell
              key={p.id}
              highlight={index === 0} // 첫 번째 카드만 2x2 큰 레이아웃
              to={`/products/${p.id}`} // 상세페이지로 이동
            >
              <ProductImageOverlayCard product={p} />
            </ProductCardShell>
          ))}
        </div>
      </section>

      {/* 하단 상품영역 */}
      <section className="space-y-3">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridProducts.map((p) => (
            <ProductCardShell key={p.id} to={`/products/${p.id}`}>
              <ProductImageOverlayCard product={p} />
            </ProductCardShell>
          ))}
        </div>
      </section>
    </>
  );
}
