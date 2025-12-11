import { useMemo, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PRODUCTS } from "@/data/products";
import ProductBreadcrumbs from "../product-breadcrumbs/product-breadcrumbs";
import ProductFilterBar from "../product-filter-bar/product-filter-bar";
import ProductGridSection from "../product-grid-section/product-grid-section";
import ProductPagination from "../product-pagination/product-pagination";
import type { Category } from "@/data/productFilterConstants";

gsap.registerPlugin(ScrollTrigger);

export default function ProductPage() {
  // 현재 선택된 카테고리 ("전체", "적용유형", "착용방식" ...)
  const [selectedCategory, setSelectedCategory] = useState<Category>("전체");
  // 페이지당 보여줄 상품 개수 (기본 12개)
  const [perPage, setPerPage] = useState<number>(12);
  // 현재 페이지 번호
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 카드 등장 애니메이션 (카테고리/페이지 변경 시 다시 적용)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 쿼리 셀렉터 문자열로 여러 DOM 요소를 배열 형태로 가져오는 GSAP 유틸
      const cards = gsap.utils.toArray<HTMLElement>(".js-product-card"); // js-product-card 클래스를 가진 모든 상품 카드 div 가져옴

      cards.forEach((card, index) => {
        const delay = (index % 3) * 0.12; // index % 3 을 기준으로 일정한 딜레이 걸어서 순차적으로 등장

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
      ctx.revert(); // revert => GSAP 애니메이션 context 제거 (GSAP 애니메이션 삭제/ScrollTrigger 인스턴스 삭제/DOM 변형 복구/리렌더링 시 중복 실행 방지)
    };
  }, [selectedCategory, perPage, currentPage]); // 카테고리, perPage, 페이지 변경마다 카드 애니메이션 다시 적용, 실행하도록 설정

  // 1. 카테고리 필터링
  const filteredProducts = useMemo(() => {
    // "전체" 면 필터링 없이 모든 상품 반환하도록 실행
    if (!selectedCategory || selectedCategory === "전체") {
      return PRODUCTS;
    }
    // 특정 카테고리와 일치하는 상품만 필터링하도록 실행
    return PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // 2. 페이지네이션 계산
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / perPage)); // 총 페이지 수 계산 (filteredProducts.length: 상품 수 /  perPage: 페이지당 상품 수)
  const safePage = Math.min(currentPage, totalPages); // 현재 페이지가 총 페이지보다 크지 않도록 보정
  const start = (safePage - 1) * perPage; // 현재 페이지에서 가져올 상품 시작 index (페이지 번호는 1부터 시작하고 배열 index는 0부터 시작하니까 1을 빼야함)
  const pagedProducts = filteredProducts.slice(start, start + perPage); // 현재 페이지에 표시할 상품 목록 slice (=배열을 잘라서 복사본을 만들어 반환하는 메소드)

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

        {/* 필터 (카테고리 버튼 + 정렬) */}
        <ProductFilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={(label) => {
            setSelectedCategory(label); // 카테고리 변경
            setCurrentPage(1); // 필터 변경 시 페이지를 1로 초기화 (UX적 정답)
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
            setPerPage(value); // 페이지당 상품 수 변경
            setCurrentPage(1); // 마찬가지로 1페이지로 이동
          }}
        />
      </div>
    </div>
  );
}
