// src/App.tsx
import "./App.scss";
import React, { useState } from "react";

import { NavigationPills } from "@/pages/history/NavigationPills";
import { TimelineItem } from "@/pages/history/TimelineItem";
import { TIMELINE_DATA } from "@/pages/history/constants";
import { NavItem } from "@/pages/history/navItems";


export default function App() {
  const [activeItem, setActiveItem] = useState<NavItem>(NavItem.HISTORY);

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">

      <NavigationPills activeItem={activeItem} onSelect={setActiveItem} />

      {activeItem === NavItem.HISTORY ? (
        <div>
          {TIMELINE_DATA.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-24">
          This section is not implemented yet.
        </p>
      )}

    </div>
  );
}
