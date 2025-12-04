
import { cn } from "@/lib/utils";
import { Select } from "@/components/ui/select";

const categoryFilters = ["적용유형", "착용방식", "Connectors", "오디오소스"];

import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
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

        <section className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            필터 :
          </span>
          {categoryFilters.map((label, idx) => (
            <button
              key={label}
              className={cn(
                "rounded-full border px-3 py-1 text-xs",
                "bg-card/60 text-muted-foreground",
                "hover:bg-card transition-colors"
              )}
            >
            </button>
          ))}
        </section>

        {/* 상단 메인 영역 */}
        <section className="grid gap-4 lg:grid-cols-[2.1fr,1fr] items-stretch">
          {/* 왼쪽 큰 카드 (카드 전체가 skeleton 느낌) */}
          <div className="rounded-2xl border bg-card/70 p-0">
            <div className="overflow-hidden rounded-2xl">
              {/* 상단 이미지 영역 */}
              <div className="h-64 w-full md:h-80 rounded-none" />

              {/* 텍스트 스켈레톤 */}
              <div className="space-y-3 p-6">
                <div className="h-3 w-16" />
                <div className="h-5 w-40" />
                <div className="h-3 w-3/4" />
                <div className="h-3 w-1/2" />
              </div>
            </div>
          </div>

          {/* 오른쪽 컬럼 */}
          <div className="flex h-full flex-col gap-4">
            {/* 위 */}
            <div className="flex-1 rounded-2xl border bg-card/70 p-4">
              <div className="space-y-2 pt-4 text-right">
                <div className="space-y-3">
                  <div className="h-3 w-16" />
                  <div className="h-5 w-40" />
                  <div className="h-3 w-3/4" />
                  <div className="h-3 w-1/2" />
                </div>
              </div>
            </div>

            {/* 아래 */}
            <div className="flex-1 rounded-2xl border bg-card/70 p-4">
              <div className="space-y-2 pt-4 text-right">
                <div className="space-y-3">
                  <div className="h-3 w-16" />
                  <div className="h-5 w-40" />
                  <div className="h-3 w-3/4" />
                  <div className="h-3 w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 하단 그리드 카드들 */}
        <section className="space-y-3">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border bg-card/70 p-3"
              >
                {/* 썸네일 */}
                <div className="mb-3 h-56 w-full rounded-xl" />
                {/* 텍스트 */}
              </div>
            ))}
          </div>
        </section>

        {/* 페이지네이션 영역 */}
        <div className="product-pagination flex flex-col items-center gap-3 py-10">
          {/* 위: 현재 페이지 번호 */}
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
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>12</SelectLabel>
                                <SelectItem value="apple">24</SelectItem>
                                <SelectItem value="banana">48</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
          </div>
        </div>
      </div>
    </div>
  );
}