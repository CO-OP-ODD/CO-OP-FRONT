import { NEWS_ITEMS } from "@/data/news/newsItems";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import news01 from "/images/news/01.png";

export default function NewsRoom() {
  return (
    // 상단 Hero 섹션 + 뉴스 카드 리스트로 구성
    <div className="py-12 font-sans text-gray-900">
      {/* Hero 섹션 전체*/}
      <div className="grid grid-cols-[3fr_2fr] md:grid-cols-1 gap-8 mb-32 items-end">
        <AnimatedContent duration={1.2}>
          {/* Hero Image */}
          <div className="w-full aspect-[4/3] lg:aspect-[16/10] relative overflow-hidden ">
            <img
              className="w-full object-cover origin-center h-full"
              src={news01}
              alt="뉴스메인"
            />
          </div>
        </AnimatedContent>

        <AnimatedContent duration={1.2} delay={0.2}>
          {/* Hero Content */}
          <div className="flex flex-col justify-end ">
            <h2 className="text-xl font-bold mb-7 tracking-tight">
              젠하이저, 칠레 텔레톤 2025 음향의 핵심 역할 담당
            </h2>
            <p className="text-gray-600 text-sm leading-normal mb-6">
              올해 칠레 텔레톤에서 젠하이저(Sennheiser)는 스펙테라(Spectera)를
              메인 시스템으로 활용하여 전문 음향 인프라의 핵심을 구축했다. 이를
              통해 27시간에 걸친 프로그램 동안 선명하고 안정적이며 간섭 없는
              음향 전송을 지원했다. 플랫폼은 행사의 상징적인 장소인 텔레톤
              극장과 폐막식이 열린 훌리오 마르티네스 프라다노스 국립 경기장에서
              모두 운영되었으며, 대규모 행사에서 요구되는 기술적 요건을 충족하는
              음질을 구현했다.
            </p>
            <button className="text-xs self-start px-5 py-2 rounded-full border border-gray-400 hover:bg-gray-50 transition-colors">
              자세히 보기
            </button>
          </div>
        </AnimatedContent>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 overflow-hidden">
        {/*  NEWS_ITEMS 배열을 순회 */}

        {NEWS_ITEMS.map((item, i) => (
          <AnimatedContent key={item.id} delay={(i % 3) * 0.15}>
            {" "}
            {/* 한 열에서 순차적으로*/}
            <article className="flex flex-col group cursor-pointer">
              <div className="w-full mb-6 relative">
                <div className="w-full aspect-[4/3] transform transition duration-300 group-hover:scale-x-105 group-hover:scale-y-100 origin-center">
                  {/* Image */}
                    <img
                      className="w-full h-full object-cover"
                      src={item.image}
                      alt={item.title}
                      />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col items-start">
                <span className="px-4 py-1 rounded-full border border-gray-400 text-[11px] font-medium mb-3">
                  {item.tag}
                </span>
                <h3 className="text-sm font-bold leading-snug mb-3 break-keep">
                  {item.title}
                </h3>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
            </article>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}