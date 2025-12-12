import type { HistoryEntry } from './types';
import {HISTORY_IMAGES} from './historyImages';

export const HEADER_TITLE = "Our History";

export const HEADER_DESCRIPTION = `Sennheiser는 현재의 Sennheiser를 정의하는 우수성과 발견에 대한 열정으로 설립되었습니다. 당사의 놀라운 여정은 1945년 하노버 근처의 한 농가에서 첫 번째 마이크를 개발하며 시작되었습니다. 80여 년이 지난 지금, 신뢰할 수 있는 Sennheiser 제품은 시장의 아이콘으로 자리매김했으며, 여전히 업계의 기술 표준을 제시하고 있습니다.`;

export const HISTORY_DATA: HistoryEntry[] = [
  {
    id: '1',
    year: '1945',
    title: '독일 엔지니어링',
    description: 'Fritz Sennheiser 공학 박사는 1945년에 이후 젠하이저 일렉트로닉이 된 Laboratorium Wennebostel(Lab W)을 설립했습니다. 이 새로운 회사는 측정 장비를 생산하여 Siemens에 판매합니다. 1946년, Sennheiser는 실제로 Siemens를 위한 첫 번째 DM 1 마이크를 제작합니다. 1년 후, Sennheiser는 자체 마이크인 DM 2를 출시합니다.',
    imageUrl: HISTORY_IMAGES.history01
  },
  {
    id: '2',
    year: '1956',
    title: '성장과 혁신',
    description: '영화, 텔레비전 및 라디오 제작 붐이 시작되면서 Sennheiser는 도전에 직면했습니다. 1956년, MD 82를 출시했습니다. 세계 최초의 샷건 마이크입니다. 얼마 후인 1960년대 초, 새로운 콘덴서와 무선 마이크를 출시했습니다. 또한 여전히 신뢰되고 있는 획기적인 아이콘인 MD 421 다이나믹 마이크를 출시했습니다.',
    imageUrl: HISTORY_IMAGES.history02
  },
  {
    id: '3',
    year: '1968',
    title: '최초의 역사',
    description: 'Sennheiser는 지속적으로 신기술을 빠르게 혁신하고 있습니다. 1968년에 세계 최초의 오픈백 헤드폰이자 전 세계에서 최고의 판매량을 기록한 풀사이즈 헤드폰 HD 414를 선보였습니다. 1971년, MD 441 마이크를 출시했습니다. 이 제품은 클래식 브랜드로 빠르게 성장했습니다.',
    imageUrl: HISTORY_IMAGES.history03
  },
  {
    id: '4',
    year: '1974',
    title: '새로운 표준 설정',
    description: '클래식 MD 441 마이크가 출시됩니다.',
    imageUrl: HISTORY_IMAGES.history04
  },
  {
    id: '5',
    year: '1982',
    title: '브랜드 전통 계승',
    description: 'Dr. Fritz Sennheiser 교수는 회사 경영권을 그의 아들인 Dr. Jörg Sennheiser 교수에게 물려 주었습니다. 혁신, 신뢰성 및 탁월한 브랜드의 전통은 다음 세대로 이어집니다.',
    imageUrl: HISTORY_IMAGES.history05
  },
  {
    id: '6',
    year: '1988',
    title: '정점을 향해 가다',
    description: 'Sennheiser가 HD 25 헤드폰을 출시합니다. 이 헤드폰은 콩코드 항공기에서 즐길 수 있는 이상적인 사운드 엔터테인먼트로 입증되었습니다. 이 놀랍고 신뢰할 수 있는 헤드폰은 오늘날까지도 DJ 부스에서 많은 사랑을 받고 있습니다.',
    imageUrl: HISTORY_IMAGES.history06
  },
  {
    id: '7',
    year: '1991',
    title: '완벽한 청취 경험',
    description: '한정판 Orpheus 정전형 헤드폰을 출시합니다. 수십 년 동안 세계에서 가장 뛰어난 헤드폰 중 하나로 꼽히는 이 제품은 청취자를 투명하고 자연스러우며 섬세한 사운드에 몰입하게 합니다. 2015년에도 또 하나의 제품 HE 1을 선보이며 브랜드의 역사를 이어갑니다.',
    imageUrl: HISTORY_IMAGES.history07
  },
  {
    id: '8',
    year: '1998',
    title: '혁신적인 진화의 시작',
    description: 'Evolution 마이크 시리즈가 시장에 출시되고, 1999년에 Evolution 무선 마이크 시리즈가 출시되었습니다. 두 제품 모두 성공적인 결과를 거두었습니다. 오늘날까지도 전 세계 무대에서 만나볼 수 있습니다. 2018년에는 "Evolution(진화)의 20년"를 기념하는 행사를 통해 이러한 성과를 기념했습니다.',
    imageUrl: HISTORY_IMAGES.history08
  },
  {
    id: '9',
    year: '2000',
    title: '새로운 시대를 위한 마이크',
    description: 'MKH 800으로 디지털 시대에 과감히 도전합니다. 새로운 디지털 오디오 형식의 사운드를 캡처할 수 있는 최초의 스튜디오 콘덴서 마이크입니다. 또한 하이엔드 스피커 제조업체인 Klein + Hummel을 인수하여 제품 포트폴리오를 강화하고 있습니다.',
    imageUrl: HISTORY_IMAGES.history09
  },
  {
    id: '10',
    year: '2009',
    title: '디지털 사운드의 미래',
    description: 'Sennheiser가 새로운 하이엔드 레퍼런스 헤드폰 HD 800을 공개합니다. 2012년에 출시된 Digital 9000 무선 마이크 시스템은 데이터 감소 없이 작동하는 유일한 시스템입니다. 그 기세를 이어 그 해 첫 번째 MOMENTUM 헤드폰 시리즈의 출시로 이어졌습니다.',
    imageUrl: HISTORY_IMAGES.history10
  },
  {
    id: '11',
    year: '2012',
    title: 'Digital 9000 - 무선 마스터피스',
    description: 'Digital 9000 시스템은 방송 스튜디오, 극장 및 라이브 공연 등 사운드에 타협 하지 않는 모든 전문가들을 위해 개발되었습니다. Sennheiser만의 비압축 디지털 오디오 전송 기능으로 뛰어난 다이내믹과 함께 아티팩트가 없는 사운드를 제공합니다.',
    imageUrl: HISTORY_IMAGES.history11
  },
  {
    id: '12',
    year: '2013',
    title: '차세대 리더십',
    description: 'Daniel과 Andreas Sennheiser 박사는 공동 CEO로서 회사 경영을 맡게 되었습니다. 1996년부터 감독 이사회 의장을 맡아온 Jörg Sennheiser 교수는 2015년에 의장직을 이임했습니다.',
    imageUrl: HISTORY_IMAGES.history12
  },
  {
    id: '13',
    year: '2015',
    title: '다음 성공 모델',
    description: 'Sennheiser는 전설적인 Orpheus의 후속 모델인 HE 1을 선보입니다.',
    imageUrl: HISTORY_IMAGES.history13
  },
  {
    id: '14',
    year: '2016',
    title: '3D 사운드',
    description: 'Sennheiser가 AMBEO 몰입형 오디오를 출시합니다. 모노에서 스테레오 사운드로의 역사적인 도약과 마찬가지로 AMBEO는 시장의 흐름을 전환하는 획기적인 기술입니다. 모든 각도와 거리에서 청취자가 360°의 풍부한 사운드 경험에 몰입할 수 있는 차세대 오디오 표준입니다.',
    imageUrl: HISTORY_IMAGES.history14
  },
  {
    id: '15',
    year: '2018',
    title: '혁신적인 리더십',
    description: '2018년, Sennheiser는 TeamConnect Ceiling을 출시했습니다. 회의실용 천장형 마이크입니다. 동적 빔포밍 기술을 사용하여 프레젠테이션, 강의, 회의 및 컨퍼런스를 자동으로 녹음합니다. Digital 6000 무선 마이크 시리즈는 2017년에 출시되었습니다.',
    imageUrl: HISTORY_IMAGES.history15
  },
  {
    id: '16',
    year: '2020',
    title: 'Continental x AMBEO',
    description: 'Continental과 협력하여 차량 내부용 스피커리스 AMBEO 오디오 시스템을 출시합니다.',
    imageUrl: HISTORY_IMAGES.history16
  },
  {
    id: '17',
    year: '2023',
    title: '이동성',
    description: 'Sennheiser가 CUPRA Tavascan에 오디오 마법을 선사합니다.',
    imageUrl: HISTORY_IMAGES.history17
  },
  {
    id: '18',
    year: '2024',
    title: 'Spectera',
    description: 'Sennheiser는 세계 최초의 광대역 양방향 무선 에코시스템을 선보입니다.',
    imageUrl: HISTORY_IMAGES.history18
  },
  {
    id: '19',
    year: '2025',
    title: 'Sennheiser 80주년 기념',
    description: '올해는 창립 80주년을 맞이하여 우리의 여정, 성공과 좌절 등을 되돌아보는 뜻깊은 해입니다. 이는 과거로부터 얼마나 많은 것을 배워 미래를 설계했는지에 관한 것이기 때문입니다.',
    imageUrl: HISTORY_IMAGES.history19
  },

];