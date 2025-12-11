import { useParams } from "react-router-dom";

import { PRODUCTS, COMMON_PRODUCT_DETAILS } from "@/data/products";
import ProductExperienceSection from "@/features/product/shared/product-experience-section/product-experience-section";
import ProductDetailHero from "@/features/product/detail/product-detail-hero/product-detail-hero";
import TopControls from "@/components/ui/topcontrols";

import { useEffect, useRef, useState } from "react";
import ProductHeroSection from "@/features/product/shared/product-hero-section/product-hero-section";
import ProductDetailNav from "@/features/product/detail/product-detail-nav/product-detail-nav";
import ProductDetailSpecsSection from "@/features/product/detail/product-detail-specs-section/product-detail-specs-section";

export default function ProductDetailPage() {
  // URL 파라미터로부터 id 값 가져오기 (상품 인덱스 번호)
  const { id } = useParams();

  // 상품 데이터들중에서 현재 id와 같은 상품 찾기 못 찾으면 첫 번째 상품으로 이동
  const product = PRODUCTS.find((p) => String(p.id) === id) ?? PRODUCTS[0];

  /** 특정 섹션으로 스크롤 이동시키는 함수
    - ProductDetailNav에서 버튼 클릭 시 이 함수를 호출함
    - id는 "features" | "key-specs" | "tech-specs" 등
    - 해당 id를 가진 DOM 요소를 찾아서 scrollIntoView로 부드럽게 이동
   */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // sticky 네비게이션 위치 상태 관리
  //ProductDetailNav 컴포넌트에서 이 값을 받아서 nav의 위치 bottom / static / top 으로 바꿔 줌
  const [navPosition, setNavPosition] = useState<"bottom" | "middle" | "top">(
    "bottom"
  );
  // 전체를 감싸는 그리드 영역 참고해서 이 요소의 위치를 기준으로 스크롤 상태를 계산
  const gridRef = useRef<HTMLDivElement | null>(null);

  // 스크롤 위치에 따라 navPosition 값을 업데이트 실행
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const gridEl = gridRef.current; // ref를 통해 <div ref={gridRef}>...</div> 를 가져옴
      if (!gridEl) return;

      const rect = gridEl.getBoundingClientRect(); // DOM 요소가 현재 화면(뷰포트) 안에서 어디 위치해 있는지 측정하는 메소드
      const viewportHeight = window.innerHeight; //브라우저 화면(뷰포트)의 높이계산

      // 1) 아직 grid의 하단이 화면 하단보다 아래에 있을 때 navbar는 화면 아래에 붙어 있는 상태 유지
      if (rect.bottom > viewportHeight) {
        setNavPosition("bottom");
      }
      // 2) grid 하단이 화면 하단 위로 올라왔지만, 아직 화면 top(0)도달 안했으면 중간에 붙어있게하기
      else if (rect.bottom <= viewportHeight && rect.bottom > 0) {
        setNavPosition("middle");
      }
      // 3) grid 하단이 화면 top(0)까지 올라갔을 때 navbar를 화면 상단에 고정
      else {
        setNavPosition("top");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 첫 렌더 시 상태 설정

    // 언마운트 시 이벤트 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111]">
      <div className="px-6">
        <TopControls className="absolute right-[2rem] top-4 z-10" />
      </div>
      {/* 좌/우 이미지,텍스트 한번에 담은 상품소개 컴포넌트 */}
      <div ref={gridRef} className="grid w-full lg:grid-cols-2">
        <ProductDetailHero product={product} />
      </div>

      {/* navbar */}
      <ProductDetailNav
        navPosition={navPosition}
        scrollToSection={scrollToSection}
      />

      {/* 상품소개설명 컴포넌트 */}
      <ProductHeroSection />

      {/* 공통 데이터 컴포넌트 (기능,주요사양,기능사양) */}
      <ProductDetailSpecsSection details={COMMON_PRODUCT_DETAILS} />

      <ProductExperienceSection />
    </div>
  );
}
