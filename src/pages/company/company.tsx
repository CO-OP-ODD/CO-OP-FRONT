import { useState, useRef, useEffect } from "react";

import { SubNav } from "@/components/features/about/modules/section-subnavigation/SubNav";
import { HistoryItem } from "@/components/features/about/modules/section-history/History";
import { HISTORY_DATA } from "@/data/history/historyItems.ts"; //Hisotry(연혁) 데이터
import { NavItem } from "@/data/subnav/navItems.ts";
import NewsRoom from "@/components/features/about/modules/section-newsroom/NewsRoom";
import VariableProximity from "@/components/reactbits/VariableProximity.tsx";
import AnimatedContent from "@/components/reactbits/AnimatedContent.tsx";
import AboutUs from "@/components/features/about/modules/section-about/AboutUs";

export default function Company() {
  // 상태 관리: 현재 활성화된 내비게이션 아이템(About us, History, News Room)

  const containerRef = useRef<HTMLDivElement>(null);

  // 현재 activeItem에 따라 네비 아래 타이틀 문자열 반환
  const getInitialTab = (): NavItem => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    switch (tab) {
      case "about":
        return NavItem.ABOUT;
      case "history":
        return NavItem.HISTORY;
      case "newsroom":
        return NavItem.NEWSROOM;
      default:
        return NavItem.ABOUT; // 기본 랜딩페이지를 About으로 설정
    }
  };

  const [activeItem, setActiveItem] = useState<NavItem>(getInitialTab);

  // activeItem이 바뀔 때 URL 쿼리 업데이트
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set(
      "tab",
      activeItem === NavItem.ABOUT
        ? "about"
        : activeItem === NavItem.HISTORY
          ? "history"
          : "newsroom"
    );
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl); // 페이지 새로고침 없이 URL만 변경
  }, [activeItem]);

  // 현재 activeItem에 따라 네비 아래 큰 타이틀 문자열 반환
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

  // 제목 아래 페이지 설명 반환
  const getDescription = () => {
    switch (activeItem) {
      case NavItem.ABOUT:
        return "언제 어디서나 가능합니다. 오디오 분야의 미래를 선도하고 전 세계 고객들을 위한 특별한 사운드 경험을 창출합니다. 이러한 열망과 오디오에 대한 우리의 공통된 열정이 회사 설립 이래로 우리를 이끌어 왔습니다. 역사는 아이디어, 혁신, 도전적인 프로젝트 및 기술적 성과로 가득하며, 이 모든 것을 제품에 반영하고 있습니다. 오늘날 Sennheiser는 세계 최고의 전문 오디오 기술 제공업체 중 하나입니다.";
      case NavItem.HISTORY:
        return "Sennheiser는 현재의 Sennheiser를 정의하는 우수성과 발견에 대한 열정으로 설립되었습니다. 당사의 놀라운 여정은 1945년 하노버 근처의 한 농가에서 첫 번째 마이크를 개발하며 시작되었습니다. 80여 년이 지난 지금, 신뢰할 수 있는 Sennheiser 제품은 시장의 아이콘으로 자리매김했으며, 여전히 업계의 기술 표준을 제시하고 있습니다.";
      case NavItem.NEWSROOM:
        return ""; // NewsRoom에서는 설명 숨김
      default:
        return "";
    }
  };
  return (
    <div className="py-12 sm:w-[70%] mx-auto container">
      {/* Nav 탭메뉴 */}
      {/* activeItem: 현재 선택된 탭, onSelect: 탭 선택 시 상태 업데이트 */}
      <SubNav activeItem={activeItem} onSelect={setActiveItem} />

      <div ref={containerRef} style={{ position: "relative" }}>
        <VariableProximity
          label={getTitle()}
          className="font-sans text-5xl md:text-6xl font-black tracking-tight"
          fromFontVariationSettings="'wght' 600"
          toFontVariationSettings="'wght' 900"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
        />
      </div>
      {/* 탭메뉴 클릭시 해당 페이지의 설명이 보이고, 뉴스페이지에서는 숨김 */}
      {activeItem !== NavItem.NEWSROOM && (
        <AnimatedContent>
          <p
            className="text-gray-700 text-base md:text-md mt-8 mb-16"
            style={{ position: "relative" }}
          >
            {getDescription()}
          </p>
        </AnimatedContent>
      )}
      {activeItem === NavItem.ABOUT && (<AboutUs />)}

      {activeItem === NavItem.HISTORY && (
        <div>
          {/* 연혁페이지 섹션 하나씩 HISTORY_DATA 돌면서 순회 */}
          {HISTORY_DATA.map((item, i) => (
            <HistoryItem
              key={item.id}
              item={item}
              delay={i * 0.2}
              forceVisible={i < 3}
            />
          ))}
        </div>
      )}

      {activeItem === NavItem.NEWSROOM && <NewsRoom />}
    </div>
  );
}
