// src/pages/ProductPagination.tsx

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ProductPaginationProps = {
  page: number;
  perPage: number;
  onPerPageChange: (value: number) => void;
};

export default function ProductPagination({
  page,
  perPage,
  onPerPageChange,
}: ProductPaginationProps) {
  return (
    <div className="product-pagination flex flex-col items-center gap-8 py-10">
      {/* 현재 페이지 번호 */}
      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-medium">
        {page}
      </button>

      {/* 페이지당 상품 수 선택 */}
      <div className="flex items-center gap-2 text-xs sm:text-sm">
        <span className="text-muted-foreground">페이지당 상품 수</span>
        <Select
          value={String(perPage)}
          onValueChange={(v) => onPerPageChange(Number(v))}
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
  );
}
