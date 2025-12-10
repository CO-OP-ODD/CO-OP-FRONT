// src/data/products.ts

export type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    thumbnail: string;
    description: string;
    badges?: string[];

    // 상세용 데이터
    features?: string[]; // 기능
    keySpecs?: { label: string; value: string }[]; // 주요 사항
    techSpecs?: { label: string; value: string }[]; // 기술 사항
};

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Studio Headphone A1",
        category: "적용유형",
        price: 129000,
        thumbnail: "products/img01_1.png",
        description: "전문가용 모니터링 헤드폰으로 정확한 사운드를 제공합니다.",
        badges: ["On-ear", "3.5 mm", "6.3 mm", "Broadcast", "Film making"],
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
    },
    {
        id: 2,
        name: "Wireless Over-ear B2",
        category: "착용방식",
        price: 159000,
        thumbnail: "products/img02_1.png",
        description: "편안한 착용감과 안정적인 무선 연결을 지원합니다.",
        badges: ["Over-ear", "Bluetooth", "ANC"],
    },
    {
        id: 3,
        name: "USB-C Studio Headset",
        category: "Connectors",
        price: 89000,
        thumbnail: "products/img03_1.png",
        description: "USB-C 연결을 통해 안정적인 사운드를 제공합니다.",
        badges: ["Over-ear", "Bluetooth", "ANC"],
    },
    {
        id: 4,
        name: "Gaming Headset Pro",
        category: "오디오소스",
        price: 139000,
        thumbnail: "products/img04.png",
        description: "게이머를 위한 서라운드 사운드 지원.",
        badges: ["Over-ear", "영상제작", "라이브프로덕션 및 투어", "3.5 mm"],
    },
    {
        id: 5,
        name: "Professional Headphone C5",
        category: "적용유형",
        price: 199000,
        thumbnail: "products/img05_1.png",
        description: "고성능 스튜디오 녹음 환경을 위해 설계되었습니다.",
        badges: ["On-ear", "3.5 mm", "6.3 mm", "방송", "보컬"],
    },
    {
        id: 6,
        name: "Portable On-ear Lite",
        category: "착용방식",
        price: 69000,
        thumbnail: "products/img06_1.png",
        description: "가벼운 무게로 이동하며 듣기에 최적화.",
        badges: ["Over-ear", "영상제작", "라이브프로덕션 및 투어"],
    },
    {
        id: 7,
        name: "Bluetooth Balanced Sound",
        category: "오디오소스",
        price: 119000,
        thumbnail: "products/img07_1.png",
        description: "밸런스드 사운드 튜닝이 돋보이는 무선 헤드폰.",
        badges: ["Over-ear", "영상제작", "라이브프로덕션 및 투어"],
    },
    {
        id: 8,
        name: "Studio Reference S8",
        category: "적용유형",
        price: 249000,
        thumbnail: "products/img08_1.png",
        description: "음향 엔지니어가 선호하는 레퍼런스 모델.",
        badges: ["Over-ear", "영상제작", "라이브프로덕션 및 투어", "Bluetooth"],
    },
    {
        id: 9,
        name: "DJ Monitor X9",
        category: "오디오소스",
        price: 149000,
        thumbnail: "products/img01_1.png",
        description: "저음 강화 튜닝으로 DJ 환경에 적합.",
        badges: ["Bluetooth", "영상제작", "라이브프로덕션 및 투어", "3.5 mm"],
    },
    {
        id: 10,
        name: "Noise Cancelling Ultra",
        category: "착용방식",
        price: 199000,
        thumbnail: "products/img02_1.png",
        description: "최신 ANC 기술로 소음을 효과적으로 차단.",
        badges: ["Over-ear", "영상제작", "라이브프로덕션 및 투어"],
    },
    {
        id: 11,
        name: "Studio Cable Headset",
        category: "Connectors",
        price: 129000,
        thumbnail: "products/img03_1.png",
        description: "고품질 케이블과 연결 인터페이스 제공.",
        badges: ["보컬", "영상제작", "라이브프로덕션 및 투어"],
    },
    {
        id: 12,
        name: "Portable Lightweight H12",
        category: "적용유형",
        price: 59000,
        thumbnail: "products/img04.png",
        description: "컴팩트한 디자인의 휴대용 헤드폰.",
        badges: ["Over-ear", "Bluetooth", "영상제작", "6.3 mm"],
    },
];
