import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 컴포넌트가 받을 props 타입 정의
type ProductPaginationProps = {
  page: number;
  perPage: number;
  onPerPageChange: (value: number) => void; // perPage 변경 시 부모에게 알려주는 콜백 함수 (부모인 ProductPage 컴포넌트가 정의한 콜백 함수)
};

// 위에서 선언한 타입들 함수 실행
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
          onValueChange={(v) => onPerPageChange(Number(v))} // v => Select 컴포넌트가 넘겨주는 실제 값, v값을 부모로 전달함(매개변수)
          // Select → onValueChange → 받아온 값(v)
          //              ↓
          //   (v) => onPerPageChange(Number(v))
          //              ↓
          //      부모에게 숫자로 전달
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
