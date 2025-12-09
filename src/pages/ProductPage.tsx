import React, { useMemo, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PRODUCTS, type Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { IoMdSearch, IoMdHome } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const categoryFilters = [
  "전체",
  "적용유형",
  "착용방식",
  "Connectors",
  "오디오소스",
] as const;

// categoryFilters 배열에서 요소 타입만 뽑아서 union 타입으로 만들음 (number:배열의 값 타입을 뽑는 문법)
type Category = (typeof categoryFilters)[number];

// ProductImageOverlayCard 컴포넌트가 받을 프롭스 정의해두기
type ImageCardProps = {
  product: Product;
  aspectClass?: string;
};

// 🔹 ProductImageOverlayCard — 상품 이미지 + hover 효과 + 뱃지 표시 전용 컴포넌트
// => 각 상품의 정보 product 으로 받고 aspectClass에 기본값 "aspect-square"으로 지정해둠
function ProductImageOverlayCard({
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
      {/* 이미지 => product 프롭스로 넘어온 데이터 사용 */}
      <img
        src={product.thumbnail}
        alt={product.name}
        className="
          w-2/3 h-2/3 object-contain
          transition-transform duration-300
          group-hover:scale-110
        "
      />

      {/* 뱃지 => product.badges 프롭스가 있을 때 사용 */}
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

      {/* 상품명 => product.name */}
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

// 프롭스 타입을 인라인으로 바로 적어서 시작
type ProductCardShellProps = {
  children: React.ReactNode;
  highlight?: boolean;
  to?: string; // 링크로 이동할 경로 (값이 있으면 카드 전체를 Link로 렌더링)
};

// 🔹 ProductCardShell — '상품 영역' 전체 카드 레이아웃 컴포넌트
// => 카드의 외곽 레이아웃(테두리, 둥근 모서리, highlight 옵션)을 담당하는 상위 래퍼 컴포넌트
function ProductCardShell({ children, highlight, to }: ProductCardShellProps) {
  // 공통으로 사용할 클래스 정의 (Link든 div든 동일하게 적용)
  const className = cn(
    "js-product-card",
    "overflow-hidden rounded-2xl border bg-card/70",
    highlight && "lg:col-span-2 lg:row-span-2" // highlight가 true이면 상단의 큰 카드 레이아웃 적용하기
  );

  // to 값이 있으면 카드 전체를 <Link>로 렌더링 (클릭 시 상세페이지 이동)
  if (to) {
    return (
      <Link to={to} className={className}>
        {/* children을 그대로 렌더링해서 재사용 가능한 카드 컴포넌트로 사용 */}
        {children}
      </Link>
    );
  }

  // to 값이 없으면 기존처럼 그냥 div로 렌더링
  return <div className={className}>{children}</div>;
}

export default function ProductPage() {
  // selectedCategory =>  현재 선택된 카테고리 (Category 타입을 사용해서 잘못된 문자열을 막음)
  const [selectedCategory, setSelectedCategory] = useState<Category>("전체");
  // perPage => 페이지당 보여줄 상품 개수
  const [perPage, setPerPage] = useState<number>(12);
  // currentPage => 현재 페이지 번호
  const [currentPage, setCurrentPage] = useState<number>(1);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".js-product-card");

      cards.forEach((card, index) => {
        // 한 줄에 3개라고 가정하고, 왼쪽→오른쪽 순차 딜레이
        const delay = (index % 3) * 0.12; // 3은 컬럼 개수, 0.12는 시간 간격

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

    return () => ctx.revert();
  }, [selectedCategory, perPage, currentPage]);

  // 1. 카테고리 필터링
  const filteredProducts = useMemo(() => {
    // "전체" 또는 아무 값도 없으면 전체 상품 반환
    if (!selectedCategory || selectedCategory === "전체") {
      return PRODUCTS;
    }
    // 그렇지 않으면 카테고리 일치하는 상품만 필터링
    return PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // 2. 페이지네이션
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / perPage)); // 전체 페이지 수 = (필터링된 상품 개수 / perPage)를 올림
  const safePage = Math.min(currentPage, totalPages); // 현재 페이지가 totalPages 보다 커질 수 있으니 안전하게 보정
  const start = (safePage - 1) * perPage; // 현재 페이지에서 잘라낼 시작 인덱스
  const pagedProducts = filteredProducts.slice(start, start + perPage); // 실제로 화면에 보여줄 상품 슬라이스

  // 상단 메인 영역용 3개 + 하단 그리드용 나머지
  const topProducts = pagedProducts.slice(0, 3);
  const gridProducts = pagedProducts.slice(3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <IoMdHome />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">제품</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Headphone</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* 상단 헤더 */}
        <header className="flex items-center justify-between pb-4 border-b border-b-[#ECEBF0]">
          <div className="space-y-1">
            <h1 className="text-[3.125rem] font-semibold tracking-tight pt-[1.375rem]">
              제품
            </h1>
          </div>
        </header>

        {/* 카테고리 필터 */}
        <section className="flex flex-wrap items-center gap-2">
          <span className="text-[0.8125rem] text-[#222] font-medium text-muted-foreground">
            필터 :
          </span>

          {/* 검색 아이콘 */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f3f3] hover:bg-[#e2e2e2] cursor-pointer"
          >
            <IoMdSearch className="text-[#666]" size="1.1em" />
          </button>

          {/* 카테고리 필터 버튼들 */}
          {categoryFilters.map((label) => {
            const isActive = label === selectedCategory;

            return (
              <button
                key={label}
                type="button"
                onClick={() => {
                  setSelectedCategory(label);
                  setCurrentPage(1);
                }}
                className={cn(
                  "rounded-full border px-[0.7rem] py-[0.5rem] text-[0.8125rem]",
                  isActive
                    ? "bg-[#B70A09] text-primary-foreground"
                    : "bg-[#ECEBF0] text-[#222] hover:bg-[#B70A09] hover:text-white transition-colors"
                )}
              >
                {label}
              </button>
            );
          })}

          {/* 정렬 기준 (오른쪽 끝) */}
          <div className="ml-auto">
            <Select>
              <SelectTrigger className="w-[100px] rounded-full">
                <SelectValue placeholder="정렬 기준" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">이름순</SelectItem>
                <SelectItem value="date">날짜순</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

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

        {/* 페이지네이션 */}
        <div className="product-pagination flex flex-col items-center gap-8 py-10">
          {/* 현재 페이지 번호 */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-medium">
            {safePage}
          </button>

          {/* 페이지당 상품 수 선택 */}
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-muted-foreground">페이지당 상품 수</span>
            <Select
              value={String(perPage)}
              onValueChange={(v) => {
                setPerPage(Number(v));
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-[60px] rounded-2xl">
                <SelectValue placeholder="12" />
              </SelectTrigger>
              <SelectContent side="bottom" align="center" sideOffset={4}>
                <SelectGroup>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="24">24</SelectItem>
                  <SelectItem value="48">48</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
