import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
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
  "적용유형",
  "착용방식",
  "Connectors",
  "오디오소스",
  "정렬기준",
];

export default function ProductSkeletonPage() {
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
        <header className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">제품</h1>
          </div>
        </header>

        {/* 카테고리 필터 */}
        <section className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            필터 :
          </span>
          <IoSearchCircleSharp size="1.5rem" color="#ccc" />
          {categoryFilters.map((label, idx) => (
            <button
              key={label}
              style={{
                ...(idx === categoryFilters.length - 1 && {
                  marginLeft: "auto",
                }),
                // 다른 공통 스타일들
              }}
              className={cn(
                "rounded-full border text-xs",
                "bg-card/60 text-muted-foreground",
                "hover:bg-card transition-colors"
              )}
            >
              <Skeleton
                className={cn(
                  "h-3 w-12 rounded-full",
                  idx === 0 && "bg-primary/40"
                )}
              />
            </button>
          ))}
        </section>

        {/* 상단 메인 영역 */}
        <section className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-stretch">
          {/* 왼쪽 큰 카드 (카드 전체가 skeleton 느낌) */}
          <div className="rounded-2xl border bg-card/70 overflow-hidden flex flex-col">
            <div className="overflow-hidden rounded-2xl">
              {/* 상단 이미지 영역 */}
              <Skeleton className="aspect-[4/3] w-full rounded-none" />

              {/* 텍스트 스켈레톤 */}
              <div className="space-y-3 p-6">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-3 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          </div>

          {/* 오른쪽 컬럼 */}
          <div className="flex h-full flex-col gap-4">
            {/* 위 */}
            <div className="flex-1 rounded-2xl border bg-card/70 flex flex-col">
              <Skeleton className="aspect-[4/3] w-full h-full rounded-xl " />
            </div>

            {/* 아래 */}
            <div className="flex-1 rounded-2xl border bg-card/70 flex flex-col">
              <Skeleton className="aspect-[4/3] w-full h-full rounded-xl" />
            </div>
          </div>
        </section>

        {/* 하단 그리드 카드들 */}
        <section className="space-y-3">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border bg-card/70"
              >
                {/* 정사각형 썸네일 */}
                <Skeleton className="aspect-square w-full" />
              </div>
            ))}
          </div>
        </section>

        {/* 페이지네이션 영역 */}
        <div className="product-pagination flex flex-col items-center gap-3 py-10">
          {/* 위: 현재 페이지 번호 */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-medium">
            1
          </button>

          {/* 아래: 페이지당 상품 수 */}
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-muted-foreground">페이지당 상품 수</span>
            <Select>
              <SelectTrigger className="w-[60px] rounded-2xl">
                <SelectValue placeholder="12" />
              </SelectTrigger>
              <SelectContent
                side="bottom" // 아래쪽으로
                align="center" // 가운데 정렬
                sideOffset={4} // 트리거와의 간격
              >
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
