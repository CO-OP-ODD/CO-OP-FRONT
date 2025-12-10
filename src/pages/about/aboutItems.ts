// src/pages/about/aboutItems.ts
export interface AboutItem {
  title: string;
  // description: string;
  image: string;
  alt: string;
}

export const ABOUT_ITEMS: AboutItem[] = [
  {
    title: "AMBEO",
    // description: `단순히 듣는 것이 아니라 느끼는 오디오 경험. AMBEO는 몰입감 넘치는
    //             경험의 가능성을 혁신합니다. AMBEO를 통해 사운드에 완전히 몰입할 수
    //             있도록 하며, 완전히 새로운 현실로 안내합니다.`,
    image: "/images/about/01.png",
    alt: "ambeo",
  },
  {
    title: "Merging Technologies",
    // description: `Merging - 연결의 힘. 당사의 디지털 녹음 시스템과 하이엔드 오디오
    //             컨버터는 전 세계의 주요 오디오 엔지니어들이 음악, 영화, 텔레비전,
    //             마스터링 또는 엔터테인먼트 분야 등에서 사용합니다.`,
    image: "/images/about/02.png",
    alt: "merging",
  },
  {
    title: "Neumann",
    // description: `마법을 담아 전설을 만듭니다. 최고 디테일에 대한 열정으로 Neumann은
    //             녹음 분야에서 타의 추종을 불허하는 사운드 품질을 제공합니다.
    //             열정적으로 사운드와 음악의 미래를 만들어 나가는 것은 우리가 하는
    //             일뿐만 아니라 우리가 누구인지를 반영하는 것입니다.`,
    image: "/images/about/03.png",
    alt: "neumann",
  },
];

