import { IoMdSearch } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import {
  categoryFilters,
  type Category,
} from "@/data/productFilterConstants.ts";

// 컴포넌트가 받을 props 타입 정의 (부모 컴포넌트가 넘겨주는 2개의 값만 구조분해)
// ProductFilterBarProps => props의 타입을 TypeScript로 보장
type ProductFilterBarProps = {
  selectedCategory: Category; // 현재 활성화된 카테고리 값 (선택된 카테고리)
  onCategoryChange: (category: Category) => void; // 필터 버튼 클릭 시 실행되는 콜백 (사용자가 카테고리 버튼 클릭했을 때 실행할 함수)
};

// 위에서 정의한 함수들을 실행
export default function ProductFilterBar({
  selectedCategory,
  onCategoryChange,
}: ProductFilterBarProps) {
  return (
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
            onClick={() => onCategoryChange(label)}
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
  );
}
