import { cn } from "@/lib/utils";

type ProductDetailNavProps = {
  // * bottom → 화면 아래 붙어있는 상태 (fixed bottom)
  // * middle → 문서 흐름 안에 있는 상태 (static)
  // * top → 화면 상단에 붙어서 따라오는 상태 (fixed top)
  navPosition?: "bottom" | "middle" | "top";

  // 각 탭 클릭 시 호출할 함수 (id로 타겟 섹션 이동)
  scrollToSection?: (id: string) => void;
};

export default function ProductDetailNav({
  navPosition = "bottom",
  scrollToSection = () => {},
}: ProductDetailNavProps) {
  return (
    <nav
      className={cn(
        "z-20 w-full border-t border-[#e5e5ea] bg-white transition-all duration-300",
        navPosition === "bottom" && "fixed bottom-0 left-0",
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
  );
}
