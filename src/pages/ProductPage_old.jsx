import React, { useMemo, useState } from "react";
import { PRODUCTS, Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { NativeSelect } from "@/components/ui/native-select";

export default function ProductPage() {
  const categoryFilters = [
    "전체",
    "적용유형",
    "착용방식",
    "Connectors",
    "오디오소스",
  ];

  const [selectedCategory, setSelectedCategory] = useState < string > "전체";
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  // 1) 필터 적용
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "전체") return PRODUCTS;

    return PRODUCTS.filter((p) => {
      return (
        p.category.적용유형 === selectedCategory ||
        p.category.착용방식 === selectedCategory ||
        p.category.connector === selectedCategory ||
        p.category.audioSource === selectedCategory
      );
    });
  }, [selectedCategory]);

  // 2) 페이지네이션 계산
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / perPage));
  const safePage = Math.min(currentPage, totalPages);

  const pagedProducts = useMemo(() => {
    const start = (safePage - 1) * perPage;
    return filteredProducts.slice(start, start + perPage);
  }, [filteredProducts, perPage, safePage]);

  const mainProduct = pagedProducts[0] ?? filteredProducts[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col gap-8">
        {/* 헤더 */}
        <header>
          <h1 className="text-2xl font-semibold tracking-tight">제품</h1>
          <p className="text-xs text-muted-foreground">
            총 {filteredProducts.length}개 상품
          </p>
        </header>

        {/* 카테고리 필터 */}
        <section className="flex items-center flex-wrap gap-2">
          <span className="text-xs text-muted-foreground">필터</span>

          {categoryFilters.map((label) => {
            const active = selectedCategory === label;

            return (
              <button
                key={label}
                onClick={() => {
                  setSelectedCategory(label);
                  setCurrentPage(1);
                }}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs transition-colors",
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card/60 text-muted-foreground hover:bg-card"
                )}
              >
                {label}
              </button>
            );
          })}
        </section>

        {/* 상단 메인 상품 (좌측 2:1 레이아웃) */}
        <section className="grid gap-4 lg:grid-cols-[2fr,1fr] items-stretch">
          {mainProduct && (
            <div className="rounded-2xl border bg-card overflow-hidden">
              <div className="h-64 md:h-80 overflow-hidden bg-muted">
                <img
                  src={mainProduct.imageUrl}
                  alt={mainProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-1">
                <p className="text-xs text-muted-foreground">
                  {mainProduct.category.적용유형}
                </p>
                <h2 className="text-lg font-semibold">{mainProduct.name}</h2>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {mainProduct.description}
                </p>
                <p className="text-base font-bold pt-2">
                  {mainProduct.price.toLocaleString()}원
                </p>
              </div>
            </div>
          )}

          {/* 오른쪽 요약 카드 */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border bg-card p-4 flex-1">
              <h3 className="text-sm font-semibold mb-2">요약 정보</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>
                  현재 페이지: {safePage} / {totalPages}
                </li>
                <li>표시 상품 : {pagedProducts.length}개</li>
                <li>선택 카테고리: {selectedCategory}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 하단 상품 그리드 */}
        <section>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pagedProducts.map((product) => (
              <div key={product.id} className="rounded-2xl border bg-card p-3">
                <div className="h-40 w-full overflow-hidden rounded-xl bg-muted mb-3">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="text-xs space-y-1">
                  <p className="text-muted-foreground">
                    {product.category.적용유형}
                  </p>
                  <p className="text-sm font-semibold line-clamp-1">
                    {product.name}
                  </p>
                  <p className="line-clamp-2 text-muted-foreground text-[11px]">
                    {product.description}
                  </p>
                  <p className="text-sm font-bold">
                    {product.price.toLocaleString()}원
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 페이지네이션 */}
        <div className="flex flex-col items-center gap-3 py-8">
          <div className="flex items-center gap-3">
            <button
              disabled={safePage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="text-xs text-muted-foreground disabled:opacity-40"
            >
              이전
            </button>

            <button className="h-9 w-9 flex items-center justify-center rounded-full bg-muted">
              {safePage}
            </button>

            <button
              disabled={safePage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="text-xs text-muted-foreground disabled:opacity-40"
            >
              다음
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-muted-foreground">페이지당 상품 수</span>
            <NativeSelect
              value={String(perPage)}
              onChange={(e) => {
                setPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="h-8 w-20"
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
            </NativeSelect>
          </div>
        </div>
      </div>
    </div>
  );
}
