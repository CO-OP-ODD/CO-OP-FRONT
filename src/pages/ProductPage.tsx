import React, { useMemo, useState } from "react";
import { PRODUCTS, type Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
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

const categoryFilters = [
  "전체",
  "적용유형",
  "착용방식",
  "Connectors",
  "오디오소스",
  "정렬기준",
];

type ImageCardProps = {
  product: Product;
  aspectClass?: string;
};

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
          opacity-0 translate-y-2
          transition-all duration-300
          group-hover:opacity-100 group-hover:translate-y-0
        "
      >
        {product.name}
      </div>
    </div>
  );
}

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [perPage, setPerPage] = useState<number>(12);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 1. 카테고리 필터링
  const filteredProducts = useMemo(() => {
    if (!selectedCategory || selectedCategory === "전체") {
      // selectedCategory가 ""(빈값)이거나 "전체"일 때
      return PRODUCTS;
    }
    return PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // 2. 페이지네이션
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / perPage));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * perPage;
  const pagedProducts = filteredProducts.slice(start, start + perPage);

  // 상단 메인 영역용 3개 + 하단 그리드용 나머지
  const topProducts = pagedProducts.slice(0, 3);
  const gridProducts = pagedProducts.slice(3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-10">
        {/* Breadcrumb - Skeleton과 동일 구조 */}
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
          <IoSearchCircleSharp size="1.5rem" color="#ccc" />

          {categoryFilters.map((label, idx) => {
            const isLast = idx === categoryFilters.length - 1;
            const isSort = label === "정렬기준";
            const isActive = !isSort && label === selectedCategory;

            return (
              <button
                key={label}
                style={isLast ? { marginLeft: "auto" } : undefined}
                type="button"
                onClick={() => {
                  if (isSort) return;
                  setSelectedCategory(label);
                  setCurrentPage(1);
                }}
                className={cn(
                  "rounded-full border",
                  "px-[0.7rem] py-[0.5rem]",
                  "text-[0.8125rem]",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/60 text-[#222] hover:bg-[#B70A09] hover:text-white transition-colors"
                )}
              >
                {label}
              </button>
            );
          })}
        </section>

        {/* 상단 메인 */}
        <section>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topProducts.map((p, index) => (
              <div
                key={p.id}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-card/70",
                  index === 0 && "lg:col-span-2 lg:row-span-2"
                )}
              >
                <ProductImageOverlayCard
                  product={p}
                  aspectClass="aspect-square"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 하단 상품영역 */}
        <section className="space-y-3">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridProducts.map((p) => (
              <div
                key={p.id}
                className="overflow-hidden rounded-2xl border bg-card/70"
              >
                <ProductImageOverlayCard
                  product={p}
                  aspectClass="aspect-square"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 페이지네이션 */}
        <div className="product-pagination flex flex-col items-center gap-3 py-10">
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
