import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
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

// 실제 필터 UI와 동일한 카테고리 목록
const categoryFilters = [
  "전체",
  "적용유형",
  "착용방식",
  "Connectors",
  "오디오소스",
] as const;

export default function ProductSkeletonPage() {
  // 페이지 이동을 위한 React Router 훅
  const navigate = useNavigate();

  //페이지 로드 후 2초 뒤에 실제 /products 페이지로 자동 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/products", { replace: true }); // replace: true → 히스토리 스택에 현재 페이지를 남기지 않고 대체 (뒤로 가기 눌렀을 때 스켈레톤 페이지로 안 돌아가게 하려고)
    }, 2000);
    // cleanup: 컴포넌트가 언마운트되면 타이머 제거
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-10">
        {/* Breadcrumb - ProductPage와 동일 */}
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

        {/* 상단 헤더 - className 통일 */}
        <header className="flex items-center justify-between pb-4 border-b border-b-[#ECEBF0]">
          <div className="space-y-1">
            <h1 className="text-[3.125rem] font-semibold tracking-tight pt-[1.375rem]">
              제품
            </h1>
          </div>
        </header>

        {/* 카테고리 필터 - 구조와 정렬 ProductPage와 동일 */}
        <section className="flex flex-wrap items-center gap-2">
          <span className="text-[0.8125rem] text-[#222] font-medium text-muted-foreground">
            필터 :
          </span>

          {/* 검색 아이콘 버튼 */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f3f3] cursor-default"
          >
            <IoMdSearch className="text-[#ccc]" size="1.1em" />
          </button>

          {/* 카테고리 버튼 */}
          {categoryFilters.map((label, idx) => (
            <button
              key={label}
              type="button"
              className={cn(
                "rounded-full border px-[0.7rem] py-[0.5rem] text-[0.8125rem]",
                "bg-[#ECEBF0] text-[#222]"
              )}
            >
              <Skeleton
                className={cn("h-3 w-12 rounded-full", idx === 0 && "w-10")}
              />
            </button>
          ))}

          {/* 정렬 기준 */}
          <div className="ml-auto">
            <Select>
              <SelectTrigger className="w-[100px] rounded-full">
                <SelectValue placeholder="정렬 기준" />
              </SelectTrigger>
              <SelectContent side="bottom" align="center" sideOffset={4}>
                <SelectGroup>
                  <SelectItem value="name">이름순</SelectItem>
                  <SelectItem value="date">날짜순</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* 상단 메인 */}
        <section>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* 길이가 3인 배열, 12인 배열을 만들어서 렌더링 */}
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  "js-product-card overflow-hidden rounded-2xl border bg-card/70",
                  index === 0 && "lg:col-span-2 lg:row-span-2"
                )}
              >
                <Skeleton className="aspect-square w-full" />
              </div>
            ))}
          </div>
        </section>

        {/* 하단 상품 영역 */}
        <section className="space-y-3">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border bg-card/70"
              >
                <Skeleton className="aspect-square w-full" />
              </div>
            ))}
          </div>
        </section>

        {/* 페이지네이션 */}
        <div className="product-pagination flex flex-col items-center gap-8 py-10">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-medium">
            1
          </button>

          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-muted-foreground">페이지당 상품 수</span>
            <Select>
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
