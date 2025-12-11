import type { Product } from "@/data/products";
import ProductCardShell from "../product-card-shell/product-card-shell";
import ProductImageOverlayCard from "../product-image-overlay-card/product-image-overlay-card";

// 컴포넌트가 받을 props 타입 정의
// 부모 컴포넌트에서 topProducts와 gridProducts 두 배열을 받아옴
// topProducts : 상단 메인 3개(첫 번째 카드는 2*2 큰 레이아웃)
// gridProducts : 나머지 일반 상품들
type ProductGridSectionProps = {
  topProducts: Product[];
  gridProducts: Product[];
};

// 위에서 선언한 타입들 함수 실행
export default function ProductGridSection({
  topProducts,
  gridProducts,
}: ProductGridSectionProps) {
  // 상단 + 하단 상품을 하나의 배열로 합치기
  const allProducts = [...topProducts, ...gridProducts];
  return (
    <>
      {/* 상단 메인 */}
      <section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {allProducts.map((p, index) => (
            <ProductCardShell
              key={p.id}
              // 첫 번째 카드만 highlight (보통 lg에서만 2x2 크게 처리해두었을 거야)
              highlight={index === 0}
              to={`/product/${p.id}`}
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
            <ProductCardShell key={p.id} to={`/product/${p.id}`}>
              <ProductImageOverlayCard product={p} />
            </ProductCardShell>
          ))}
        </div>
      </section>
    </>
  );
}
