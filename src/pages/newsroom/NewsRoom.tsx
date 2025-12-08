import React from 'react';
// import { HeaderTab} from './types';
import type { NewsItem } from './types';

const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    tag: '프로 오디오',
    title: 'Sennheiser Spectera는 NEP Australia의 오디오 발전의 중심에 있습니다.',
    date: '2025. 11. 27',
  },
  {
    id: 2,
    tag: '프로 오디오',
    title: '도전적인 환경에서의 야외 뮤지컬 극장: Sennheiser의 Spectera 광대역 무선 생태계는 모래 저장소의 공격적인 조건에서 그 가치를 입증합니다.',
    date: '2025. 11. 27',
  },
  {
    id: 3,
    tag: '프로 오디오',
    title: "격납고 4의 '지저스 크라이스트 슈퍼스타'",
    date: '2025. 11. 27',
  },
  {
    id: 4,
    tag: '프로 오디오',
    title: 'Sennheiser Spectera는 NEP Australia의 오디오 발전의 중심에 있습니다.',
    date: '2025. 11. 27',
  },
  {
    id: 5,
    tag: '프로 오디오',
    title: '도전적인 환경에서의 야외 뮤지컬 극장: Sennheiser의 Spectera 광대역 무선 생태계는 모래 저장소의 공격적인 조건에서 그 가치를 입증합니다.',
    date: '2025. 11. 27',
  },
  {
    id: 6,
    tag: '프로 오디오',
    title: "격납고 4의 '지저스 크라이스트 슈퍼스타'",
    date: '2025. 11. 27',
  },
  {
    id: 7,
    tag: '프로 오디오',
    title: 'Sennheiser Spectera는 NEP Australia의 오디오 발전의 중심에 있습니다.',
    date: '2025. 11. 27',
  },
  {
    id: 8,
    tag: '프로 오디오',
    title: '도전적인 환경에서의 야외 뮤지컬 극장: Sennheiser의 Spectera 광대역 무선 생태계는 모래 저장소의 공격적인 조건에서 그 가치를 입증합니다.',
    date: '2025. 11. 27',
  },
  {
    id: 9,
    tag: '프로 오디오',
    title: "격납고 4의 '지저스 크라이스트 슈퍼스타'",
    date: '2025. 11. 27',
  },
];

const NewsRoom: React.FC = () => {
  // const [activeTab, setActiveTab] = useState<HeaderTab>(HeaderTab.NEWS_ROOM);

  return (
    
    <div className="py-12 font-sans text-gray-900">

      {/* Hero Section */}
      <div className="grid grid-cols-[3fr_2fr] gap-8 mb-32 items-end">
        {/* Hero Image */}
        <div className="w-full bg-gray-200 aspect-[4/3] lg:aspect-[16/10] relative">
            {/* Placeholder for Hero Image */}
        </div>

        {/* Hero Content */}
        <div className="flex flex-col justify-end ">
            <h2 className="text-xl font-bold mb-7 tracking-tight">
            젠하이저, 칠레 텔레톤 2025 음향의 핵심 역할 담당
            </h2>
            <p className="text-gray-600 text-sm leading-normal mb-6">
            올해 칠레 텔레톤에서 젠하이저(Sennheiser)는 스펙테라(Spectera)를 메인 시스템으로 활용하여 전문 음향 인프라의 핵심을 구축했다. 이를 통해 27시간에 걸친 프로그램 동안 선명하고 안정적이며 간섭 없는 음향 전송을 지원했다. 플랫폼은 행사의 상징적인 장소인 텔레톤 극장과 폐막식이 열린 훌리오 마르티네스 프라다노스 국립 경기장에서 모두 운영되었으며, 대규모 행사에서 요구되는 기술적 요건을 충족하는 음질을 구현했다.
            </p>
            <button className="text-xs self-start px-5 py-2 rounded-full border border-gray-400 text-sm hover:bg-gray-50 transition-colors">
            자세히 보기
            </button>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
        {NEWS_ITEMS.map((item) => (
          <article key={item.id} className="flex flex-col group cursor-pointer">

            <div className="w-full mb-6 overflow-visible relative">
                <div className="w-full aspect-[4/3] bg-gray-200 transform transition duration-300 group-hover:scale-105 group-hover:shadow-lg origin-center z-10 relative">
                   {/* Image Placeholder */}
                </div>
            </div>

            {/* Content - Static (does not scale) */}
            <div className="flex flex-col items-start">
              <span className="px-4 py-1 rounded-full border border-gray-400 text-[11px] font-medium mb-3">
                {item.tag}
              </span>
              <h3 className="text-lg font-bold leading-snug mb-3 break-keep">
                {item.title}
              </h3>
              <span className="text-xs text-gray-400">
                {item.date}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsRoom;