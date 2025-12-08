import "./App.scss";
import { useState } from "react";

import { NavigationPills } from "@/pages/history/NavigationPills";
import { HistoryItem } from "@/pages/history/HistoryItem";
import { HISTORY_DATA } from "@/pages/history/constants";
import { NavItem } from "@/pages/history/navItems";
import NewsRoom from "@/pages/newsroom/NewsRoom";

export default function App() {
  const [activeItem, setActiveItem] = useState<NavItem>(NavItem.HISTORY);

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">

      <NavigationPills activeItem={activeItem} onSelect={setActiveItem} />

      {activeItem === NavItem.HISTORY && (
        <div>
          {HISTORY_DATA.map((entry) => (
            <HistoryItem key={entry.id} entry={entry} />
          ))}
        </div>
      )}

      {activeItem === NavItem.NEWSROOM && (
        <NewsRoom />  // ← 기존 뉴스룸 컴포넌트 바로 렌더링
      )}

      {activeItem !== NavItem.HISTORY && activeItem !== NavItem.NEWSROOM && (
        <p className="text-gray-500 text-center mt-24">
          This section is not implemented yet.
        </p>
      )}

    </div>
  );
}
