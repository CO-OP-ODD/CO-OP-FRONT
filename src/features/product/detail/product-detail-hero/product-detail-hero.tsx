import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useNavigate } from "react-router-dom";
import type { Product } from "@/data/products";
import { PRODUCTS } from "@/data/products";
import { useState } from "react";

type ProductDetailHeroProps = {
  product?: Product;
};

export default function ProductDetailHero({ product }: ProductDetailHeroProps) {
  const _product = product ?? PRODUCTS[0];
  const navigate = useNavigate();

  // 현재 보여줄 이미지 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);

  // 이미지의 길이 계산
  const totalImages = _product.images?.length ?? 0;

  // 다음이미지로 이동
  const handleNext = () => {
    if (!totalImages) return;
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };
  // 이전이미지로 이동
  const handlePrev = () => {
    if (!totalImages) return;
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <>
      {/* 왼쪽영역 */}
      <section
        className={`
          bg-[#ECEBF0]
          py-10
          md:py-14
          lg:py-0 lg:min-h-screen
        `}
      >
        <div
          className={`
            mx-auto flex items-center justify-center
            px-4
            md:px-6
            lg:px-0 lg:sticky lg:top-0 lg:h-screen
          `}
        >
          <div
            className={`
              relative
              w-full
              max-w-[59.5rem]
              h-auto
              md:h-[34rem]
              lg:h-auto
              flex items-center justify-center
              overflow-hidden
            `}
          >
            {/* 슬라이더 메인 이미지 => 이미지 여러 장을 가로로 나열하고 translateX로 밀기 */}
            <div
              className="flex h-full w-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
                {_product.images?.map((src, idx) => (
                <div
                  key={idx}
                  className="flex h-full w-full flex-shrink-0 items-center justify-center"
                >
                    <img
                    src={src}
                    alt={`${_product.name} - ${idx + 1}`}
                    className={`
                      block
                      h-auto
                      w-[50%]
                      md:w-[35%]
                      lg:w-[50%]
                      object-contain
                    `}
                  />
                </div>
              ))}
            </div>

            {/* 우측 하단 페이지네이션 */}
            <div
              className={`
                absolute
                bottom-0 right-4
                md:bottom-6 md:right-6
                lg:bottom-0 lg:right-10
                flex items-center gap-3
                text-[0.75rem] md:text-[0.8rem]
                text-[#222] font-semibold
              `}
            >
              <span>
                {totalImages > 0
                  ? `${currentIndex + 1} / ${totalImages}`
                  : `- / -`}
              </span>
              <div className="flex gap-2">
                {/* 이전 버튼 */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className={`
                    flex items-center justify-center rounded-full
                    bg-[#f4f4f6] text-[#111]
                    transition-colors duration-200
                    hover:bg-[#B70A09] hover:text-white
                    h-10 w-10
                    md:h-[3.375rem] md:w-[3.375rem]
                  `}
                >
                  <IoIosArrowBack className="cursor-pointer text-[0.85rem] md:text-[0.9rem] font-semibold" />
                </button>

                {/* 다음 버튼 */}
                <button
                  type="button"
                  onClick={handleNext}
                  className={`
                    flex items-center justify-center rounded-full
                    bg-[#f4f4f6] text-[#111]
                    transition-colors duration-200
                    hover:bg-[#B70A09] hover:text-white
                    h-10 w-10
                    md:h-[3.375rem] md:w-[3.375rem]
                  `}
                >
                  <IoIosArrowForward className="cursor-pointer text-[0.85rem] md:text-[0.9rem] font-semibold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 오른쪽영역 */}
      <section
        className={`
          bg-white
          px-4 py-10
          md:px-6 md:py-14
          lg:pl-6 lg:pr-12 lg:pt-[7.5rem]
          lg:mt-[29.3rem]
        `}
      >
        {/* 상단 브레드크럼 */}
        <div className="mb-4 md:mb-6 lg:mb-8">
            <Breadcrumb>
            <BreadcrumbList className="text-[0.75rem] md:text-[0.875rem] text-[#8c8c95]">
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
                <BreadcrumbPage>{_product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* 상품명 / 품목번호 / 버튼 */}
        <header className="mb-8 md:mb-10 lg:mb-12">
            <h1
            className={`
              mb-3 md:mb-4
              text-[1.875rem]  /* 30px */
              md:text-[2.5rem]
              lg:text-[3.12rem]
              font-semibold
              leading-[1.2] md:leading-[1.1] lg:leading-[1.05]
            `}
          >
            {_product.name}
          </h1>

          <p
            className={`
              mb-4 md:mb-6
              text-[0.95rem]
              md:text-[1.05rem]
              lg:text-[1.25rem]
              text-[#555865]
            `}
          >
            품목 번호 <span className="font-medium text-[#111]">700286</span>
          </p>

          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <Button
              size="sm"
              className={`
                font-semibold shadow-none
                bg-[#f5f5f7] text-[#111]
                h-10 md:h-[3.375rem]
                rounded-full
                px-3 md:px-[1.125rem]
                text-[0.7rem] md:text-xs
                transition-colors duration-200
                hover:bg-[#B70A09] hover:text-white
              `}
              onClick={() => navigate("/products")}
            >
              제품군 전환
            </Button>

            <button
              className={`
                flex cursor-pointer items-center justify-center rounded-full
                bg-[#f5f5f7]
                text-lg md:text-xl
                transition-colors duration-200
                hover:bg-[#B70A09] hover:text-white
                h-10 w-10
                md:h-[3.375rem] md:w-[3.375rem]
              `}
            >
              ★
            </button>
          </div>
        </header>

        {/* 메인 설명 */}
        <main>
          <p
            className={`
              mb-6 md:mb-8
              text-[1.25rem]
              sm:text-[1rem]
              lg:text-[2rem]
              font-medium
              leading-[1.6] md:leading-[1.55] lg:leading-[1.5]
              tracking-[-0.03rem] lg:tracking-[-0.05rem]
            `}
          >
            {_product.name} 은 선명함, 편안함 및 신뢰성을 완벽하게 조합하여
            오늘날 음악 프로덕션의 모든 복잡한 작업을 처리할 수 있도 록
            제작되었습니다. 오픈백 디자인은 매우 넓고 입체적인 사운드 스테
            이지와 초정밀 사운드 재생을 가능하게 하여 오디오 사각지대를 없애 고
            모든 디테일을 완벽하게 제어할 수 있게 해줍니다.
          </p>

          <p
            className={`
              mb-6
              text-[0.95rem]
              sm:text-[0.9rem]
              lg:text-[1.25rem]
              leading-[1.7] md:leading-[1.75] lg:leading-[1.8]
              tracking-[-0.02rem] lg:tracking-[-0.05rem]
              text-[#545252]
            `}
          >
            {_product.description}
            내구성이 뛰어난 구성 요소와 가볍고 편안한 디자인 뿐만 아니라
            독일에서 수작업으로 제작된 HD 25 PRO는 헤드폰 착용을 잊고 음악을
            즐길 수 있게 해줍니다. 세심한 인체공학적 설계로 압박감을 없애고,
            오픈백 디자인으 로 통풍이 잘되어 음악을 듣는 몇 시간을 몇 분처럼
            느끼게 합니다. 두 세트의 교체 가능한 이어패드는 각각 장시 간 믹싱 및
            프로듀싱을 위한 고유한 사운드 시그니처를 가지고 있으며, 귀의 피로를
            덜어주고, 세척 및 교체가 가 능한 지속 가능성과 내구성을 염두에 두고
            설계되었습니다. HD 25 PRO에는 Dear Reality의 혁신적인 dearVR MIX-SE
            플러그인도 포함되어 있어 ""스윗 스팟""에서 DAW를 최고의 가상 믹싱
            환경으로 전환해 줍니 다. DearVR MIX-SE는 세심하게 설계된 믹싱
            스튜디오의 음향을 시뮬레이션하여 다양한 시스템에서 믹스의 균 형 잡힌
            일관된 변환을 보장합니다. HD 490 25는 오디오 사각지대를 제거하고
            모든 디테일을 완벽하게 제어 하며, 스튜디오 밖에서도 정확한 재생을
            보장하여 창의적인 비전을 완벽하게 실현할 수 있도록 도와줍니다.
          </p>
        </main>
      </section>
    </>
  );
}
