import "./App.scss";
import { useState } from "react";

import { NavigationPills } from "@/pages/history/NavigationPills";
import { HistoryItem } from "@/pages/history/HistoryItem";
import { HISTORY_DATA } from "@/pages/history/constants"; //Hisotry(연혁) 데이터
import { NavItem } from "@/pages/history/navItems"; 
import NewsRoom from "@/pages/newsroom/NewsRoom"; 

export default function App() {
  
  // 상태 관리: 현재 활성화된 내비게이션 아이템(About us, History, News Room)
  const [activeItem, setActiveItem] = useState<NavItem>(NavItem.HISTORY);

  // 현재 activeItem에 따라 네비 아래 타이틀 문자열 반환
  const getTitle = () => {
    switch (activeItem) {
      case NavItem.ABOUT:
        return "About Us";
      case NavItem.HISTORY:
        return "Our History";
      case NavItem.NEWSROOM:
        return "News Room";
      default:
        return "";
    }
  };
  return (
    <div className="py-12 max-w-6xl mx-auto container">

      {/* Nav 탭메뉴 */}
      {/* activeItem: 현재 선택된 탭, onSelect: 탭 선택 시 상태 업데이트 */}
      <NavigationPills activeItem={activeItem} onSelect={setActiveItem} />

      {/* 활성화된 페이지 제목 */}
      <h1 className="text-5xl md:text-6xl font-black mb-16 tracking-tight">
        {getTitle()}
      </h1>


      {activeItem === NavItem.HISTORY && (
        <div>
          {HISTORY_DATA.map((entry) => (
            <HistoryItem key={entry.id} entry={entry} />
          ))}
        </div>
      )}

      {activeItem === NavItem.NEWSROOM && (
        <NewsRoom /> 
      )}
    </div>
  );
}
