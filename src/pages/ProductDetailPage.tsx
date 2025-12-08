// src/pages/ProductDetailPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/button";

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
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => String(p.id) === id) ?? PRODUCTS[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [navAtTop, setNavAtTop] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const gridEl = gridRef.current;
      if (!gridEl) return;

      const rect = gridEl.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // ✅ grid 영역의 "아래"가 화면 아래와 만나거나 위로 올라갔을 때 top으로 붙이기
      const shouldStickTop = rect.bottom <= viewportHeight;
      setNavAtTop(shouldStickTop);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 첫 렌더 시 상태 맞추기

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111]">
      {/* 좌/우 각각 50% */}
      <div ref={gridRef} className="grid w-full lg:grid-cols-2">
        {/* 왼쪽영역 */}
        <section className="min-h-screen bg-[#ECEBF0]">
          {/* sticky가 걸리는 래퍼 */}
          <div className="sticky top-20 flex items-center justify-center pt-10">
            {/* 상품 영역 */}
            <div className="relative flex h-[53.125rem] w-[59.5rem] max-w-full items-center justify-center">
              {/* 헤드폰 이미지 */}
              <img
                src={product.thumbnail}
                alt={product.name}
                className="block h-auto w-1/2 object-contain"
              />

              {/* 우측 하단 페이지네이션 */}
              <div className="absolute bottom-[7.8rem] right-10 flex items-center gap-4 text-[0.75rem] text-[#7b7b85]">
                <span>1 / 6</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
                  >
                    {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 오른쪽영역 */}
        <section className="mt-[32.3rem] bg-white pl-6 pr-12 pt-[7.5rem]">
          {/* 상단 브레드크럼 */}
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList className="text-[0.6875rem] text-[#8c8c95]">
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
            <h1 className="mb-4 text-[3.5rem] font-semibold leading-[1.05]">
              {product.name}
            </h1>

            <p className="mb-6 text-sm text-[#555865]">
              품목 번호 <span className="font-medium text-[#111]">700286</span>
            </p>

            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="h-10 rounded-full px-[1.125rem] text-xs"
                onClick={() => navigate("/products")}
              >
                제품군 전환
              </Button>

              <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#f5f5f7] text-xl">
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

      {/* sticky  */}
      <nav
        className={cn(
          "z-20 w-full border-t border-[#e5e5ea] bg-white transition-all duration-300",
          navAtTop ? "fixed top-0 left-0" : "fixed bottom-0 left-0"
        )}
      >
        <div className="mx-auto flex h-[4.1875rem] max-w-[120rem] items-center gap-3 px-8">
          <span className="mr-3 whitespace-nowrap text-xs text-[#8f8f99]">
            다음으로 이동
          </span>

          {/* 탭 버튼들 */}
          <button
            type="button"
            onClick={() => scrollToSection("features")}
            className="h-10 cursor-pointer whitespace-nowrap rounded-full border border-[#111] bg-[#111] px-[0.875rem] text-[0.8125rem] text-white"
          >
            기능
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("key-specs")}
            className="h-10 cursor-pointer whitespace-nowrap rounded-full border border-[#e5e5ea] bg-[#f7f7f9] px-[0.875rem] text-[0.8125rem] text-[#33333a]"
          >
            주요 사항
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("tech-specs")}
            className="h-10 cursor-pointer whitespace-nowrap rounded-full border border-[#e5e5ea] bg-[#f7f7f9] px-[0.875rem] text-[0.8125rem] text-[#33333a]"
          >
            기술 사항
          </button>
        </div>
      </nav>

      {/* 기능 섹션 */}
      <section id="features" className="mx-auto max-w-full px-8 pt-16 pb-20">
        <h2 className="mb-10 text-[3rem] font-semibold leading-[1.1]">기능</h2>

        <ul className="list-disc pl-6 text-base leading-[1.8]">
          <li>
            수십 년에 걸친 젠하이저의 엔지니어링, 기술, 연구 및 개발이
            뒷받침합니다.
          </li>
          <li>
            매우 넓고 입체적인 사운드 스테이지와 초정밀 로컬라이제이션을 갖춘
            오픈백 디자인
          </li>
          <li>
            전체 스펙트럼에 걸쳐 정직하고 동적인 사운드를 재현하는 무색 주파수
            응답
          </li>
          <li>
            완전하고 정확하며 명확하게 정의된 로우 엔드를 위한 혁신적인 저주파
            실린더 시스템
          </li>
          <li>
            정밀한 인체공학적 설계로 압박감을 없애고 유연하고 가벼운 최고의
            편안함을 제공
          </li>
          <li>
            전고조파 왜곡(THD)을 줄이고 공간을 최소화하여 오디오 정확도를
            향상시키는 젠하이저 오픈 프레임 아키텍처
          </li>
          <li>
            프로듀싱 또는 믹싱을 위한 두 개의 유니크한 이어패드가 귀의 피로를
            덜어주고 주파수를 정확히 파악
          </li>
          <li>
            기하학적으로 각진 이어컵 설계로 트랜스듀서 배치를 최적화하여 일관된
            청취 경험 제공
          </li>
          <li>탁월한 드라이버 성능과 효율성을 보장하는 첨단 네오디뮴 자석</li>
          <li>
            특허받은 케이블 코일 구조로 케이블을 통해 전달되는 노이즈를 차단하여
            가장 선명한 신호 보장
          </li>
          <li>
            매우 사실적이고 역동적인 오디오 재현을 위한 초경량 보이스 코일
          </li>
          <li>
            모든 스튜디오 구성에 쉽게 적응 가능한 탈착식 케이블의 좌측 및 우측
            이어잭
          </li>
          <li>
            지속 가능성을 고려한 세척 및 교체 가능한 패드와 산림경영인증(FSC)을
            받은 환경 친화적 포장
          </li>
          <li>오픈 메시 메탈 이어컵 커버로 자연스러운 통기성 제공</li>
          <li>
            독일 기술력으로 설계되고루마니아에서 수작업으로 조립된 탁월한
            내구성의 디자인
          </li>
        </ul>
      </section>

      {/* 주요 사항 */}
      <section id="key-specs" className="mx-auto max-w-full px-8 pt-16 pb-20">
        <h2 className="mb-10 text-[3rem] font-semibold leading-[1.1]">
          주요 사항
        </h2>
      </section>

      {/* 기술 사항 */}
      <section id="tech-specs" className="mx-auto max-w-full px-8 pt-16 pb-20">
        <h2 className="mb-10 text-[3rem] font-semibold leading-[1.1]">
          기술 사항
        </h2>
      </section>
    </div>
  );
}
