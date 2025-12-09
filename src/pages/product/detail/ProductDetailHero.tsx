// src/components/product/ProductDetailHero.tsx
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

type ProductDetailHeroProps = {
  product: Product;
};

export default function ProductDetailHero({ product }: ProductDetailHeroProps) {
  const navigate = useNavigate();

  return (
    <>
      {/* 왼쪽영역 */}
      <section className="min-h-screen bg-[#ECEBF0]">
        <div className="sticky top-0 flex items-center justify-center">
          <div className="relative flex h-[53.125rem] w-[59.5rem] max-w-full items-center justify-center">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="block h-auto w-[50%] object-contain"
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
        <main>
          <p className="mb-8 text-[2rem] font-medium leading-[1.5] tracking-[-0.05rem]">
            {product.name} 은 선명함, 편안함 및 신뢰성을 완벽하게 조합하여
            오늘날 음악 프로덕션의 모든 복잡한 작업을 처리할 수 있도 록
            제작되었습니다. 오픈백 디자인은 매우 넓고 입체적인 사운드 스테
            이지와 초정밀 사운드 재생을 가능하게 하여 오디오 사각지대를 없애 고
            모든 디테일을 완벽하게 제어할 수 있게 해줍니다.
          </p>

          <p className="mb-6 text-[1.25rem] leading-[1.8] tracking-[-0.05rem] text-[#545252]">
            {product.description}
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
