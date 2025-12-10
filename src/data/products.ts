// 각 기술 사양 분류 정의
export type TechDetailGroup = {
  id: string;
  title: string;
  content: string;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  thumbnail: string;
  images: string[];
  description: string;
  badges?: string[];

  // 상세용 데이터
  features?: string[]; // 기능
  keySpecs?: { label: string; value: string }[]; // 주요 사양
  techSpecs?: { label: string; value: string }[]; // 기술 사양

  // 기술 사양 섹션의 소분류 아코디언 데이터
  techDetailGroups?: TechDetailGroup[];
};

// 공통 상세 데이터
export const COMMON_PRODUCT_DETAILS = {
  features: [
    "오픈백 설계로 넓은 사운드 스테이지 제공",
    "장시간 착용에도 편안한 경량 헤드밴드 구조",
    "모니터링에 최적화된 플랫한 주파수 응답",
  ],
  keySpecs: [
    { label: "임피던스", value: "130 Ω (1 kHz)" },
    { label: "최대 음압 레벨", value: "128 dBSPL (1 kHz @ 5% THD)" },
    { label: "전력 소비 (Amp)", value: "300 mW (100 h, noise IEC 60268)" },
    {
      label: "감도",
      value: "105 dBSPL (1 kHz / 1 Vrms), 96 dBSPL (1 kHz / 1 mW)",
    },
    { label: "변환기 유형", value: "동적" },
    { label: "연결부", value: "유선" },
    { label: "커넥터", value: "3.5 mm, 6.3 mm" },
  ],
  techSpecs: [
    { label: "주파수 응답", value: "10 Hz – 40 kHz" },
    { label: "임피던스", value: "250 Ω" },
    { label: "음압 레벨(SPL)", value: "108 dB" },
    { label: "무게", value: "280 g (케이블 제외)" },
    { label: "케이블 길이", value: "3 m" },
  ],
  techDetailGroups: [
    {
      id: "sound",
      title: "사운드",
      content: `
      <strong>고급 사운드 특장점</strong><br />
      어댑티브 ANC(Active Noise Cancellation).<br />
      True Transparency™<br />
      <br /> 
      <strong>드라이버 종류 & 사이즈</strong><br />
      다이내믹형 티타늄 드라이버, 40mm 직경<br />
      <br />
      <strong>주파수 범위</strong><br />
      10–20,000 Hz<br />
      10–40,000 Hz (Hi-Res mode)<br />
      <br />
      <strong>맞춤형 사운드 EQ</strong><br />
      5개 프리셋 사용 가능 그리고 Bang & Olufsen 앱에서 완전한 맞춤설정 가능<br />
      <br />
      <strong>Earsense</strong><br />
      네이버 환경에 따라 자동으로 사운드 조정`,
    },
    {
      id: "design",
      title: "디자인",
      content: `
      <strong>디자이너</strong><br />
      디자인 팀<br />
      <br />
      <strong>착용 방식</strong><br />
      오버이어<br />  
      <br />
      <strong>소재</strong><br />
      알루미늄<br />
      티타늄<br />
      양가죽<br />
      소가죽<br />
      강화유리<br />
      직물<br />
      폴리머 (보이지 않음)<br />
      <br />
      <strong>방진 및 방수 등급</strong><br />
      IP53<br />
      <br />
      <strong>치수</strong><br />
      헤드폰: 188 너비 x 210 높이 x 77 깊이 mm<br />
      케이스: 225 너비 x 265 높이 x 52 깊이 mm<br />
      <br />
      <strong>무게 (g)</strong><br />
      헤드폰: 375 g<br />
      가죽 파우치: 350 g`,
    },
    {
      id: "battery",
      title: "배터리",
      content: `
      <strong>배터리 재생 시간</strong><br />
      액티브 노이즈 캔슬링으로 32시간<br />
      공간 오디오 및 헤드트래킹으로 30시간<br />
      <br />
      <strong>빠른 충전: 5분 충전으로 5시간 재생 가능</strong><br />
      (포함된 USB-C 케이블과 호환되는 전원 어댑터 사용 시)<br />
      <br />
      <strong>충전 시간</strong><br />
      약 1시간<br />
      <br />
      <strong>고속 충전 5분으로 5시간 재생 (포함된 USB-C 케이블과 호환되는 전원 어댑터 사용 시)</strong>`,
    },
    {
      id: "connection",
      title: "연결",
      content: `
      <strong>Bluetooth Version</strong><br />
      블루투스 5.3<br />
      <br />
      <strong>Bluetooth Codecs</strong><br />
      AAC<br />
      SBC<br />
      Beoplay H100은 탁월한 사운드 품질, 시스템 안정성, 그리고 매끄러운 사용자 경험이라는 목표에 맞춰 오디오 코덱을 신중하게 선정했습니다. <br />
      고객 사용 사례를 폭넓게 평가한 결과, 선택된 코덱 솔루션이 특정 기기에서만 지원되는 LDAC보다 Beoplay H100의 디자인과 성능 프로필에 더 적합하다는 결론에 도달했습니다.<br />
      <br />
      <strong>음성 어시스턴트 통합</strong><br />
      앱에서 사용자 정의 가능<br />
      <br />
      <strong>마이크</strong><br />
      총계: 10<br />
      4개의 디지털 MEMS 음성 마이크<br />
      4개의 MEMS 피드 포워드 마이크<br />
      ANC/투명 기능을 위한 2개의 아날로그 피드백 마이크<br />
      <br />
      <strong>물리적 연결</strong><br />
      1 x USB-C
      (케이블은 알루미늄 디테일과 헤드폰 색상과 어울리는 직물로 만들어졌습니다.)<br />
      <br />
      <strong>멀티포인트</strong><br />
      최대 2대 기기 (2025년 소프트웨어 업데이트에서 3대 기기 멀티포인트 예정)<br />
      <br />
      <strong>인증 / 빠른 페어링</strong><br />
      Google Fast Pair<br />
      Made for iPhone (MFi)<br />
      Microsoft Swift Pair<br />
      Dolby Atmos에 최적화<br />
      고해상도 오디오`,
    },
  ],
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Studio Headphone A1",
    category: "적용유형",
    price: 129000,
    thumbnail: "/images/product/img01_1.png",
    images: [
      "/images/product/img01_1.png",
      "/images/product/img01_2.png",
      "/images/product/img01_3.png",
    ],
    description: "전문가용 모니터링 헤드폰으로 정확한 사운드를 제공합니다.",
    badges: ["On-ear", "3.5 mm", "6.3 mm", "Broadcast", "Film making"],
    ...COMMON_PRODUCT_DETAILS, // 한 번에 모든 상세 데이터 적용
  },
  {
    id: 2,
    name: "Wireless Over-ear B2",
    category: "착용방식",
    price: 159000,
    thumbnail: "/images/product/img02_1.png",
    images: [
      "/images/product/img02_1.png",
      "/images/product/img02_2.png",
      "/images/product/img02_3.png",
    ],
    description: "편안한 착용감과 안정적인 무선 연결을 지원합니다.",
    badges: ["Over-ear", "Bluetooth", "ANC"],
    ...COMMON_PRODUCT_DETAILS,
  },
  {
    id: 3,
    name: "USB-C Studio Headset",
    category: "Connectors",
    price: 89000,
    thumbnail: "/images/product/img03_1.png",
    images: [
      "/images/product/img03_1.png",
      "/images/product/img03_2.png",
      "/images/product/img03_3.png",
    ],
    description: "USB-C 연결을 통해 안정적인 사운드를 제공합니다.",
    badges: ["Over-ear", "Bluetooth", "ANC"],
    ...COMMON_PRODUCT_DETAILS,
  },
  {
    id: 4,
    name: "Gaming Headset Pro",
    category: "오디오소스",
    price: 139000,
    thumbnail: "/images/product/img04.png",
    images: [
      "/images/product/img04.png",
      "/images/product/img04.png",
      "/images/product/img04.png",
    ],
    description: "게이머를 위한 서라운드 사운드 지원.",
    badges: ["Over-ear", "영상제작", "라이브프로덕션 및 투어", "3.5 mm"],
    ...COMMON_PRODUCT_DETAILS,
  },
  {
    id: 5,
    name: "Professional Headphone C5",
    category: "적용유형",
    price: 199000,
    thumbnail: "/images/product/img05_1.png",
    images: [
      "/images/product/img05_1.png",
      "/images/product/img05_2.png",
      "/images/product/img05_3.png",
    ],
    description: "고성능 스튜디오 녹음 환경을 위해 설계되었습니다.",
    badges: ["On-ear", "3.5 mm", "6.3 mm", "방송", "보컬"],
    ...COMMON_PRODUCT_DETAILS,
  },
  {
    id: 6,
    name: "Portable On-ear Lite",
    category: "착용방식",
    price: 69000,
    thumbnail: "/images/product/img06_1.png",
    images: [
      "/images/product/img06_1.png",
      "/images/product/img06_1.png",
      "/images/product/img06_1.png",
    ],
    description: "가벼운 무게로 이동하며 듣기에 최적화.",
    badges: ["Over-ear", "영상제작", "라이브프로덕션 및 투어"],
    ...COMMON_PRODUCT_DETAILS,
  },
  {
    id: 7,
    name: "Bluetooth Balanced Sound",
    category: "오디오소스",
    price: 119000,
    thumbnail: "/images/product/img07_1.png",
    images: [
      "/images/product/img07_1.png",
      "/images/product/img07_3.png",
      "/images/product/img07_1.png",
    ],
    description: "밸런스드 사운드 튜닝이 돋보이는 무선 헤드폰.",
    badges: ["Over-ear", "영상제작", "라이브프로덕션 및 투어"],
    ...COMMON_PRODUCT_DETAILS,
  },
  {
    id: 8,
    name: "Studio Reference S8",
    category: "적용유형",
    price: 249000,
    thumbnail: "/images/product/img08_1.png",
    images: [
      "/images/product/img08_1.png",
      "/images/product/img08_2.png",
      "/images/product/img08_3.png",
    ],
    description: "음향 엔지니어가 선호하는 레퍼런스 모델.",
    badges: ["Over-ear", "영상제작", "라이브프로덕션 및 투어", "Bluetooth"],
    ...COMMON_PRODUCT_DETAILS,
  },
  {
    id: 9,
    name: "DJ Monitor X9",
    category: "오디오소스",
    price: 149000,
    thumbnail: "/images/product/img01_1.png",
    images: [
      "/images/product/img01_1.png",
      "/images/product/img01_2.png",
      "/images/product/img01_3.png",
    ],
    description: "저음 강화 튜닝으로 DJ 환경에 적합.",
    badges: ["Bluetooth", "영상제작", "라이브프로덕션 및 투어", "3.5 mm"],
    ...COMMON_PRODUCT_DETAILS,
  },
  {
    id: 10,
    name: "Noise Cancelling Ultra",
    category: "착용방식",
    price: 199000,
    thumbnail: "/images/product/img02_1.png",
    images: [
      "/images/product/img02_1.png",
      "/images/product/img02_2.png",
      "/images/product/img02_3.png",
    ],
    description: "최신 ANC 기술로 소음을 효과적으로 차단.",
    badges: ["Over-ear", "영상제작", "라이브프로덕션 및 투어"],
    ...COMMON_PRODUCT_DETAILS,
  },
  {
    id: 11,
    name: "Studio Cable Headset",
    category: "Connectors",
    price: 129000,
    thumbnail: "/images/product/img03_1.png",
    images: [
      "/images/product/img03_1.png",
      "/images/product/img03_2.png",
      "/images/product/img03_3.png",
    ],
    description: "고품질 케이블과 연결 인터페이스 제공.",
    badges: ["보컬", "영상제작", "라이브프로덕션 및 투어"],
    ...COMMON_PRODUCT_DETAILS,
  },
  {
    id: 12,
    name: "Portable Lightweight H12",
    category: "적용유형",
    price: 59000,
    thumbnail: "/images/product/img04.png",
    images: [
      "/images/product/img04.png",
      "/images/product/img04.png",
      "/images/product/img04.png",
    ],
    description: "컴팩트한 디자인의 휴대용 헤드폰.",
    badges: ["Over-ear", "Bluetooth", "영상제작", "6.3 mm"],
    ...COMMON_PRODUCT_DETAILS,
  },
];
