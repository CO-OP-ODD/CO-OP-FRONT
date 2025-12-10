import { NavItem } from "@/data/subnav/navItems.ts";

interface SubNavProps {
  activeItem: NavItem; // 현재 활성화된 네비게이션 아이템
  onSelect: (item: NavItem) => void; // 아이템 선택 시 호출되는 콜백 함수
}

export const SubNav = ({ activeItem, onSelect }: SubNavProps) =>{
  // 표시할 네비게이션 탭 목록
  const items = [NavItem.ABOUT, NavItem.HISTORY, NavItem.NEWSROOM];

  return (
    
    <div className="flex flex-wrap gap-3 mb-12">
      {items.map((item) => (
        <button
          key={String(item)}
          onClick={() => onSelect(item)}
          className={`
            px-6 py-2 rounded-full border text-sm font-medium transition-colors duration-200
            ${
              activeItem === item
                ? "bg-[#ba1f1e] text-white border-bg-[#ba1f1e]" //active 스타일
                : "bg-white text-gray-600 border-gray-300 hover:border-[#ba1f1e]" //inactive 스타일
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
