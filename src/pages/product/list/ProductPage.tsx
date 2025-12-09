// src/pages/ProductPage.tsx
import { useMemo, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PRODUCTS } from "@/data/products";
import ProductBreadcrumbs from "./ProductBreadcrumbs";
import ProductFilterBar from "./ProductFilterBar";
import ProductGridSection from "./ProductGridSection";
import ProductPagination from "./ProductPagination";
import type { Category } from "@/data/productFilterConstants";

gsap.registerPlugin(ScrollTrigger);

export default function ProductPage() {
  // 현재 선택된 카테고리
  const [selectedCategory, setSelectedCategory] = useState<Category>("전체");
  // 페이지당 보여줄 상품 개수
  const [perPage, setPerPage] = useState<number>(12);
  // 현재 페이지 번호
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 카드 애니메이션 (카테고리/페이지 변경 시 다시 적용)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".js-product-card");

      cards.forEach((card, index) => {
        const delay = (index % 3) * 0.12;

        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            delay,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => {
      ctx.revert(); // GSAP 애니메이션 context 제거
    };
  }, [selectedCategory, perPage, currentPage]);

  // 1. 카테고리 필터링
  const filteredProducts = useMemo(() => {
    if (!selectedCategory || selectedCategory === "전체") {
      return PRODUCTS;
    }
    return PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // 2. 페이지네이션 계산
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / perPage));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * perPage;
  const pagedProducts = filteredProducts.slice(start, start + perPage);

  // 상단 메인 3개 + 하단 그리드 나머지
  const topProducts = pagedProducts.slice(0, 3);
  const gridProducts = pagedProducts.slice(3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-10">
        {/* 브레드크럼 */}
        <ProductBreadcrumbs />

        {/* 상단 헤더 */}
        <header className="flex items-center justify-between pb-4 border-b border-b-[#ECEBF0]">
          <div className="space-y-1">
            <h1 className="text-[3.125rem] font-semibold tracking-tight pt-[1.375rem]">
              제품
            </h1>
          </div>
        </header>

        {/* 필터 */}
        <ProductFilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={(label) => {
            setSelectedCategory(label);
            setCurrentPage(1);
          }}
        />

        {/* 상품영역 */}
        <ProductGridSection
          topProducts={topProducts}
          gridProducts={gridProducts}
        />

        {/* 페이지네이션 */}
        <ProductPagination
          page={safePage}
          perPage={perPage}
          onPerPageChange={(value) => {
            setPerPage(value);
            setCurrentPage(1);
          }}
        />
      </div>
    </div>
  );
}
