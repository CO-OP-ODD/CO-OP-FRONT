// src/pages/ProductDetailPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { ChevronDown } from "lucide-react";
import ProductExperienceSection from "@/pages/ProductExperienceSection";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductDetailPage() {
  // URL 파라미터로부터 id 값 가져오기 (상품 인덱스 번호)
  const { id } = useParams();
  // 라우팅 이동용 훅 (버튼 클릭 시 /products 등으로 이동)
  const navigate = useNavigate();
  // 상품 데이터들중에서 현재 id와 같은 상품 찾기 못 찾으면 PRODUCTS[0] (첫 번째 상품)로 이동하기
  const product = PRODUCTS.find((p) => String(p.id) === id) ?? PRODUCTS[0];

  // 특정 섹션으로 스크롤 이동 함수
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // sticky 네비게이션 위치 상태 관리
  const [navPosition, setNavPosition] = useState<"bottom" | "middle" | "top">(
    "bottom"
  );
  // 전체를 감싸는 그리드 영역 참고해서 이 요소의 위치를 기준으로 스크롤 상태를 계산
  const gridRef = useRef<HTMLDivElement | null>(null);

  // 스크롤 위치에 따라 navPosition 값을 업데이트 실행
  useEffect(() => {
    const handleScroll = () => {
      const gridEl = gridRef.current;
      if (!gridEl) return;

      const rect = gridEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 1) 아직 grid의 하단이 화면 하단보다 아래에 있을 때 navbar는 화면 아래에 붙어 있는 상태 유지
      if (rect.bottom > viewportHeight) {
        setNavPosition("bottom");
      }
      // 2) grid 하단이 화면 하단 위로 올라왔지만, 아직 화면 top(0) 안 올라갔을 때 중간 구간, 자연스러운 이동 연출
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
      {/* 좌/우 각각 50% */}
      <div ref={gridRef} className="grid w-full lg:grid-cols-2">
        {/* 왼쪽영역 */}
        <section className="min-h-screen bg-[#ECEBF0]">
          {/* sticky가 걸리는 래퍼 */}
          <div className="sticky top-0 flex items-center justify-center">
            {/* 상품 영역 */}
            <div className="relative flex h-[53.125rem] w-[59.5rem] max-w-full items-center justify-center">
              {/* 헤드폰 이미지 */}
              <img
                src={product.thumbnail}
                alt={product.name}
                className="block h-auto w-[55%] object-contain"
              />

              {/* 우측 하단 페이지네이션 */}
              <div className="absolute bottom-[2rem] right-10 flex items-center gap-4 text-[0.75rem] text-[#222] font-semibold">
                <span>1 / 6</span>
                <div className="flex gap-2">
                  <div className="bg-[#f4f4f6] text-[#111] flex h-[3.375rem] w-[3.375rem] items-center justify-center rounded-full transition-colors duration-200 hover:bg-[#B70A09] hover:text-white">
                    <IoIosArrowBack className="font-semibold cursor-pointer text-[0.9rem]" />
                  </div>

                  <div className="bg-[#f4f4f6] text-[#111] flex h-[3.375rem] w-[3.375rem] items-center justify-center rounded-full transition-colors duration-200 hover:bg-[#B70A09] hover:text-white">
                    <IoIosArrowForward className="font-semibold cursor-pointer text-[0.9rem]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 오른쪽영역 */}
        <section className="mt-[29.3rem] bg-white pl-6 pr-12 pt-[7.5rem]">
          {/* 상단 브레드크럼 */}
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList className="text-[0.875rem] text-[#8c8c95]">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="flex items-center">
                    <IoMdHome size={14} />
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator className="mx-1">/</BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbLink href="/products">제품</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator className="mx-1">/</BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbPage>{product.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* 상품명 / 품목번호 / 버튼 */}
          <header className="mb-12">
            <h1 className="mb-4 text-[3.12rem] font-semibold leading-[1.05]">
              {product.name}
            </h1>

            <p className="mb-6 text-[1.25rem] text-[#555865]">
              품목 번호 <span className="font-medium text-[#111]">700286</span>
            </p>

            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="font-semibold shadow-none bg-[#f5f5f7] text-[#111] h-[3.375rem] rounded-full px-[1.125rem] text-xs transition-colors duration-200 hover:bg-[#B70A09] hover:text-white"
                onClick={() => navigate("/products")}
              >
                제품군 전환
              </Button>

              <button className="flex h-[3.375rem] w-[3.375rem] cursor-pointer items-center justify-center rounded-full bg-[#f5f5f7] text-xl transition-colors duration-200 hover:bg-[#B70A09] hover:text-white">
                ★
              </button>
            </div>
          </header>

          {/* 메인 설명 */}
          <main className="">
            <p className="mb-8 text-[2rem] font-medium leading-[1.5] tracking-[-0.05rem]">
              {product.name} 은 선명함, 편안함 및 신뢰성을 완벽하게 조합하여
              오늘날 음악 프로덕션의 모든 복잡한 작업을 처리할 수 있도 록
              제작되었습니다. 오픈백 디자인은 매우 넓고 입체적인 사운드 스테
              이지와 초정밀 사운드 재생을 가능하게 하여 오디오 사각지대를 없애
              고 모든 디테일을 완벽하게 제어할 수 있게 해줍니다.
            </p>

            <p className="mb-6 text-[1.25rem] leading-[1.8] tracking-[-0.05rem] text-[#545252]">
              {product.description}
              내구성이 뛰어난 구성 요소와 가볍고 편안한 디자인 뿐만 아니라
              독일에서 수작업으로 제작된 HD 25 PRO는 헤드폰 착용을 잊고 음악을
              즐길 수 있게 해줍니다. 세심한 인체공학적 설계로 압박감을 없애고,
              오픈백 디자인으 로 통풍이 잘되어 음악을 듣는 몇 시간을 몇 분처럼
              느끼게 합니다. 두 세트의 교체 가능한 이어패드는 각각 장시 간 믹싱
              및 프로듀싱을 위한 고유한 사운드 시그니처를 가지고 있으며, 귀의
              피로를 덜어주고, 세척 및 교체가 가 능한 지속 가능성과 내구성을
              염두에 두고 설계되었습니다. HD 25 PRO에는 Dear Reality의 혁신적인
              dearVR MIX-SE 플러그인도 포함되어 있어 ""스윗 스팟""에서 DAW를
              최고의 가상 믹싱 환경으로 전환해 줍니 다. DearVR MIX-SE는 세심하게
              설계된 믹싱 스튜디오의 음향을 시뮬레이션하여 다양한 시스템에서
              믹스의 균 형 잡힌 일관된 변환을 보장합니다. HD 490 25는 오디오
              사각지대를 제거하고 모든 디테일을 완벽하게 제어 하며, 스튜디오
              밖에서도 정확한 재생을 보장하여 창의적인 비전을 완벽하게 실현할 수
              있도록 도와줍니다.
            </p>
          </main>
        </section>
      </div>

      {/* navbar */}
      <nav
        className={cn(
          "z-20 w-full border-t border-[#e5e5ea] bg-white transition-all duration-300",

          navPosition === "bottom" && "fixed bottom-0 left-0",

          // middle 단계 — position 제거하고 문서 흐름 그대로 따라가게 함
          navPosition === "middle" && "static",

          navPosition === "top" && "fixed top-0 left-0"
        )}
      >
        <div className="mx-auto flex h-[4.1875rem] max-w-[120rem] items-center gap-[0.3rem] px-8">
          <span className="mr-3 whitespace-nowrap text-xs text-[#8f8f99]">
            다음으로 이동
          </span>

          {/* 탭 버튼들 */}
          <button
            type="button"
            onClick={() => scrollToSection("features")}
            className="font-semibold h-[2rem] cursor-pointer whitespace-nowrap rounded-full border-none bg-[#ECEBF0] px-[0.875rem] text-[0.8125rem] text-[#33333a] transition-colors duration-200 hover:bg-[#B70A09] hover:text-white"
          >
            기능
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("key-specs")}
            className="font-semibold h-[2rem] cursor-pointer whitespace-nowrap rounded-full border-none bg-[#ECEBF0] px-[0.875rem] text-[0.8125rem] text-[#33333a] transition-colors duration-200 hover:bg-[#B70A09] hover:text-white"
          >
            주요 사양
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("tech-specs")}
            className="font-semibold h-[2rem] cursor-pointer whitespace-nowrap rounded-full border-none bg-[#ECEBF0] px-[0.875rem] text-[0.8125rem] text-[#33333a] transition-colors duration-200 hover:bg-[#B70A09] hover:text-white"
          >
            기술 사양
          </button>
        </div>
      </nav>

      {/* 기능 섹션 - 아코디언 */}
      <section id="features" className="mx-auto max-w-full px-8 pt-16 pb-6">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="features">
            <AccordionTrigger className="text-left no-underline hover:no-underline [&>svg]:hidden">
              <h2 className="text-[3rem] font-semibold leading-[1.1]">기능</h2>
            </AccordionTrigger>
            <AccordionContent>
              {product.features && product.features.length > 0 ? (
                <ul className="mt-6 list-disc pl-6 text-[1.25rem] leading-[1.8]">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-base text-[#777]">
                  기능 정보가 없습니다.
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* 주요 사양 - 아코디언 */}
      <section id="key-specs" className="mx-auto max-w-full px-8 pt-4 pb-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="key-specs">
            <AccordionTrigger className="text-left hover:no-underline [&>svg]:hidden">
              <h2 className="text-[3rem] font-semibold leading-[1.1]">
                주요 사양
              </h2>
            </AccordionTrigger>

            <AccordionContent>
              <div className="mt-4 w-full">
                {product.keySpecs!.map((spec, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "grid w-full grid-cols-[1.5fr_2fr] items-center px-4 py-4 text-left",
                      "cursor-pointer transition-colors duration-150",
                      "hover:bg-[#B70A09] hover:text-white last:border-none"
                    )}
                  >
                    {/* 항목 이름 */}
                    <span className="text-[1.25rem]">{spec.label}</span>

                    {/* 설명 텍스트 */}
                    <span className="text-[1.25rem]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* 기술 사양 */}
      <section id="tech-specs" className="mx-auto max-w-full px-8 pt-4 pb-20">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="tech-specs">
            <AccordionTrigger className="text-left no-underline hover:no-underline [&>svg]:hidden">
              <h2 className="text-[3rem] font-semibold leading-[1.1]">
                기술 사양
              </h2>
            </AccordionTrigger>

            <AccordionContent className="pb-0">
              {/* 내부 소분류 아코디언 */}
              <Accordion type="single" collapsible className="mt-4 w-full ">
                {product.techDetailGroups!.map((group) => (
                  <AccordionItem
                    key={group.id}
                    value={group.id}
                    className="last:border-none"
                  >
                    <AccordionTrigger className="group py-3 text-left text-[0.95rem] md:text-base font-medium no-underline hover:no-underline [&>svg]:hidden">
                      <div className="flex items-center justify-between w-full">
                        <span>{group.title}</span>
                        <div
                          className="
                            bg-[#f4f4f6] text-[#111] 
                            flex h-[3.375rem] w-[3.375rem] items-center justify-center rounded-full 
                            transition-colors duration-200 
                            hover:bg-[#B70A09] hover:text-white 
                            group-data-[state=open]:bg-[#B70A09] group-data-[state=open]:text-white
                          "
                        >
                          <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-4 pb-6 pt-1">
                      <div
                        dangerouslySetInnerHTML={{ __html: group.content }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <ProductExperienceSection />
    </div>
  );
}
