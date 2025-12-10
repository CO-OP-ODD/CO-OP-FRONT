import { IoMdSearch } from "react-icons/io";
import { IoPersonOutline, IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";

// 우측상단 아이콘 모음 타입 정의
// onUserClick,onSearchClick => 컴포넌트 외부에서 동작을 주입하는 함수
// 지금은 UI만 구현해놓음. 실제 행동(기능)은 아직 구현 예정
type TopControlsProps = {
  label?: string; // "Consumer" 같은 텍스트
  onUserClick?: () => void; // 사람 아이콘 클릭
  onSearchClick?: () => void; // 검색 아이콘 클릭
  className?: string;
};

// 위에서 정의한 타입에 대한 함수 실행
export default function TopControls({
  label = "Consumer",
  onUserClick,
  onSearchClick,
  className,
}: TopControlsProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* 왼쪽 칩 */}
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-4 py-1.5 text-[0.8rem] font-medium text-[#444] shadow-sm"
      >
        <span>{label}</span>
        <span
          onClick={(e) => {
            e.stopPropagation(); // 클릭 이벤트 버블링 방지
          }}
          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#555] text-[0.65rem] text-white"
        >
          <IoClose />
        </span>
      </button>

      {/* 중앙 - 사람 아이콘 */}
      <button
        type="button"
        onClick={onUserClick}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7] text-[#777] transition-colors duration-200 hover:bg-[#e4e4ea] hover:text-[#111]"
      >
        <IoPersonOutline size={16} />
      </button>

      {/* 오른쪽 - 검색 아이콘 */}
      <button
        type="button"
        onClick={onSearchClick}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7] text-[#777] transition-colors duration-200 hover:bg-[#e4e4ea] hover:text-[#111]"
      >
        <IoMdSearch size={16} />
      </button>
    </div>
  );
}
