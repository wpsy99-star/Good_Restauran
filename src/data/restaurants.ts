import { Restaurant } from '../types';

export const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: 1,
    name: "상봉 엔터식스 닭한마리",
    category: "한식",
    dong: "상봉동",
    subArea: "상봉역 맛길",
    rating: 4.8,
    reviewCount: 342,
    price: 14000,
    priceLabel: "14,000원",
    signatureMenu: "진한 닭한마리 & 칼국수사리",
    tags: ["#상봉역맛집", "#국물맛집", "#칼국수필수"],
    address: "서울 중랑구 망우로 353 엔터식스 B1 맛길",
    roadAddress: "서울 중랑구 망우로 353",
    hours: "11:00 - 22:00 (라스트오더 21:15)",
    todayHours: "11:00 ~ 22:00",
    isOpenNow: true,
    breakTime: "브레이크타임 없음 (상시영업)",
    holiday: "연중무휴",
    phone: "02-435-0888",
    desc: "맑고 진한 닭 육수에 특제 양념장과 부추를 곁들여 먹는 상봉역 대표 국물 명소입니다. 닭을 다 건져 먹은 뒤 끓여먹는 쫄깃한 칼국수와 죽사리가 일품입니다.",
    tip: "점심시간에는 칼국수 사리가 기본 제공되며, 다대기장에 간장 2스푼과 겨자를 풀면 황금 비율!",
    editorName: "박상봉",
    editorTenure: "상봉동 거주 18년차",
    parking: "엔터식스 지하 주차장 2시간 무료 지원",
    subwayGuide: "경의중앙·경춘·7호선 상봉역 2번 출구 지하 통로 연결 (도보 2분)",
    subwayWalkTime: "상봉역 2번 출구 도보 2분",
    secondarySubway: "7호선 중화역 도보 14분",
    images: {
      hero: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      sub1: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
      sub2: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=700&q=80",
      sub3: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80",
      all: [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80"
      ]
    },
    badges: ["상봉동 닭요리 1위", "국물 맛집", "주차 편리"],
    menuItems: [
      {
        name: "원조 닭한마리 (2인)",
        price: 28000,
        priceFormatted: "28,000원",
        desc: "하림 생닭과 한방 약재 육수로 끓여낸 담백하고 진한 국물",
        tag: "대표메뉴",
        origin: "닭고기(국내산 하림)",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "쫄깃 칼국수 사리",
        price: 3000,
        priceFormatted: "3,000원",
        desc: "자가제면 생면으로 닭 육수가 촉촉하게 스며드는 별미",
        tag: "필수추가",
        origin: "밀가루(호주산)",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "영양 찹쌀 계란죽",
        price: 3500,
        priceFormatted: "3,500원",
        desc: "남은 진국 육수에 김가루와 참기름을 두른 마무리 죽",
        tag: "추천",
        origin: "쌀(국내산)",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "닭볶음탕 (중)",
        price: 32000,
        priceFormatted: "32,000원",
        desc: "칼칼하고 매콤달콤한 비법 고추장 양념의 진한 닭볶음탕",
        origin: "닭고기(국내산)",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80"
      }
    ],
    reviews: [
      {
        id: "r1",
        author: "상봉러버",
        userBadge: "상봉2동 주민 (방문 12회)",
        rating: 5.0,
        content: "국물이 정말 깊고 깔끔해요. 특히 부추 양념장에 찍어 먹으면 닭 가슴살도 부드럽게 넘어갑니다. 칼국수 면발도 쫄깃!",
        date: "어제 방문",
        orderInfo: "닭한마리 2인 + 칼국수사리"
      },
      {
        id: "r2",
        author: "중랑미식가",
        userBadge: "면목본동 주민",
        rating: 4.8,
        content: "엔터식스 쇼핑하고 가족 외식으로 제격입니다. 아기들도 맑은 국물이라 잘 먹고 주차도 편해서 자주 찾아요.",
        date: "3일 전",
        orderInfo: "닭한마리 세트 + 영양죽"
      }
    ],
    emoji: "🍲",
    naverMapUrl: "https://map.naver.com/v5/search/%EC%83%81%EB%B4%89%20%EC%97%94%ED%84%B0%EC%8B%9D%EC%8A%A4%20%EB%8B%AD%ED%95%9C%EB%A7%88%EB%A6%AC",
    kakaoMapUrl: "https://map.kakao.com/?q=%EC%83%81%EB%B4%89%20%EC%97%94%ED%84%B0%EC%8B%9D%EC%8A%A4%20%EB%8B%AD%ED%95%9C%EB%A7%88%EB%A6%AC"
  },
  {
    id: 2,
    name: "동부시장 할머니떡볶이",
    category: "분식/카페",
    dong: "면목동",
    subArea: "동부시장 골목",
    rating: 4.9,
    reviewCount: 512,
    price: 4500,
    priceLabel: "4,500원",
    signatureMenu: "밀떡볶이 & 바삭 야끼만두",
    tags: ["#가성비최고", "#중랑학생성지", "#30년전통"],
    address: "서울 중랑구 동일로109길 27 동부골목시장 내",
    roadAddress: "서울 중랑구 동일로101길 24 1층",
    hours: "10:30 - 20:30 (매주 월요일 휴무)",
    todayHours: "11:00 ~ 20:30",
    isOpenNow: true,
    breakTime: "브레이크타임 없음 (상시영업)",
    holiday: "매주 월요일 정기 휴무",
    phone: "02-491-0382",
    desc: "35년 동안 한 자리를 지키며 면목동 주민들의 학창 시절을 책임진 노포 떡볶이집. 옛날 학교 앞 자작하고 감칠맛 넘치는 멸치육수 고추장 양념과 쫄깃한 밀떡의 조화.",
    tip: "야끼만두 2개 추가 후 떡볶이 국물에 30초 푹 적셔 먹는 것이 단골들의 불문율입니다. 16:00~17:30 하교 시간 전 방문 추천!",
    editorName: "김면목",
    editorTenure: "면목동 거주 22년차",
    parking: "동부시장 공영주차장 이용 권장 (도보 2분 / 주차 할인권 지원)",
    subwayGuide: "7호선 면목역 1번 출구에서 동부시장 방면 320m 직진 후 중앙 통로 진입 (도보 4분)",
    subwayWalkTime: "면목역 1번 출구 도보 4분",
    secondarySubway: "경의중앙선 중랑역 4번 출구 도보 11분",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVn-pyuE9UxwuY0jGFlsMuqm8_1oIR0kQGdVjbqpdQ4JG9fkexJHGwIZMLWcNbxne0AEgSYJ0hYatscYtj0XJtIxs-C3w7xsQSu5AM-YQP-kaogdUubAcUt-9-66-l55WzXxs1ab045mO3Av8719McxzzhdWUQChiIpPDlDc_hMghN3NtkWBoYs6Yzy5zl9htOgHH0JgLm01sjZ_fDDOF-VtFwJXukQjnc6ICdAFFpIuvBw_kK4FCK",
      sub1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUJFSxlHNSEn6eRDUF-AOrds2ACunOpZWoHbIWqtj1CqJQycxwXT2qPJAfVjkgDbNAZtJ6p0fmlrihPjL7SoHl-9fmrHQa2ZKy5z4q0SPq6BOadeN8eVOIzz3PJPKnX0HcBpdIs-dtRCblsgRk33Lh856XyuSN67zYvmaK3emGII0uL48zEapACyprmGIsxbC7XTAJhPhghiInzpXZJ_c_yGsoI_d6wcr3pSC3VMfMFcO5fK8A9uV9",
      sub2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQAaJ1syWzJFVp9fB-cAyT0w3ALZ1-5rC1iIhaAQIzW3mhJeuw6F1xXzxFxtaiyz_NUgr1mr1qEITmDTFE11dR56sQfLfUAffagTckFYbZ4T3NBLssX_I4QJzd0kgrffUxtTh9mk9DOrljF4TsPkVlyNKkltunRVukDPqhwjX6-nhEDeLN9jZYAB_wWBCJWl9ewkDyldVcxu9WR9EkYJo13HFj4Lpy-IoxjdSFjoH6vouHSnr6YM7u",
      sub3: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrcQw-zU70mFr8hbxkPCXFVYFoTNybhanNJN_Z5kGMaN6C3zeQT-bVfX5FzJwNPKh4rPx4JCcCwBgUajD4ggIdy70NObOr7T2ky_6594neYvPTte2EjjGj-HFgvwFOfCsnW2Gv-diwCpxDfP0Eqju0p_-EYTnzlXXzCIOamC38p0TS0n8gn4xMy2wsUuDDjLvZozCpuXHHxm1ixXnFo6k41xb-0OK7asEIUMX6Qy4rIU6WC1xwLqVK",
      all: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAVn-pyuE9UxwuY0jGFlsMuqm8_1oIR0kQGdVjbqpdQ4JG9fkexJHGwIZMLWcNbxne0AEgSYJ0hYatscYtj0XJtIxs-C3w7xsQSu5AM-YQP-kaogdUubAcUt-9-66-l55WzXxs1ab045mO3Av8719McxzzhdWUQChiIpPDlDc_hMghN3NtkWBoYs6Yzy5zl9htOgHH0JgLm01sjZ_fDDOF-VtFwJXukQjnc6ICdAFFpIuvBw_kK4FCK",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBUJFSxlHNSEn6eRDUF-AOrds2ACunOpZWoHbIWqtj1CqJQycxwXT2qPJAfVjkgDbNAZtJ6p0fmlrihPjL7SoHl-9fmrHQa2ZKy5z4q0SPq6BOadeN8eVOIzz3PJPKnX0HcBpdIs-dtRCblsgRk33Lh856XyuSN67zYvmaK3emGII0uL48zEapACyprmGIsxbC7XTAJhPhghiInzpXZJ_c_yGsoI_d6wcr3pSC3VMfMFcO5fK8A9uV9",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQAaJ1syWzJFVp9fB-cAyT0w3ALZ1-5rC1iIhaAQIzW3mhJeuw6F1xXzxFxtaiyz_NUgr1mr1qEITmDTFE11dR56sQfLfUAffagTckFYbZ4T3NBLssX_I4QJzd0kgrffUxtTh9mk9DOrljF4TsPkVlyNKkltunRVukDPqhwjX6-nhEDeLN9jZYAB_wWBCJWl9ewkDyldVcxu9WR9EkYJo13HFj4Lpy-IoxjdSFjoH6vouHSnr6YM7u",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBrcQw-zU70mFr8hbxkPCXFVYFoTNybhanNJN_Z5kGMaN6C3zeQT-bVfX5FzJwNPKh4rPx4JCcCwBgUajD4ggIdy70NObOr7T2ky_6594neYvPTte2EjjGj-HFgvwFOfCsnW2Gv-diwCpxDfP0Eqju0p_-EYTnzlXXzCIOamC38p0TS0n8gn4xMy2wsUuDDjLvZozCpuXHHxm1ixXnFo6k41xb-0OK7asEIUMX6Qy4rIU6WC1xwLqVK"
      ]
    },
    badges: ["중랑 30년 전통", "안심식당", "생활의달인 추천"],
    menuItems: [
      {
        name: "원조 밀떡볶이",
        price: 4000,
        priceFormatted: "4,000원",
        desc: "35년 전통 비법 양념장과 쫄깃한 식감의 옛날식 국물 밀떡",
        tag: "대표메뉴",
        origin: "밀떡(국내산), 고춧가루(국내산 혼합)",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-vmVb0zvnoQbWK8SoYqn-JtisaBix6T09vtugXit2QJV0C9XFKLDZ-uZ69Ar0LkAizZSp0PxW4rXdt9hLIpfET7H5IA-c7Snz8WwI_D-h5LI1h3OU6BPNvTfpDV8fTW_gBplb1MiR6E3WScOW-ZKC3HGF2_PAoCHWpcraKO98XRxEku6gsSd5oxzQPcTjJYMrZZR6G8MJr7243LSxRJgwkKOJa9d2AqaOnQMphUrtvPEaFSpVibfI"
      },
      {
        name: "바삭 야끼만두 (3개)",
        price: 2000,
        priceFormatted: "2,000원",
        desc: "주문 즉시 한 번 더 튀겨내어 바삭함이 살아있는 떡볶이 짝꿍",
        tag: "필수조합",
        origin: "수제 당면튀김",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV7yjk6ASXDoBtEnyIIHhfJQ7Xgs7WaK2AZNTKz54yc3ZKovEp6hy0JdBr6GPCSZdBFWrdn4vwTh7MwFnI-HGBWYQnyIXs_2xc1MtZQ1ODbyNOupw5ojIre1ZOsbObJ3WRVOgUmbZlXExA8HghdaY-Ats0HY28wnTmBIDG-FWQ2v67X4hBnOeDebPOAJJ59JtZKukFQWRVr5SWOcYrW9BgxPbhy6QHH45s-brcTEqsTaxUnlfJ749a"
      },
      {
        name: "고소한 꼬마김밥 (4줄)",
        price: 3500,
        priceFormatted: "3,500원",
        desc: "직접 짠 방앗간 참기름을 듬뿍 바른 단무지·당근 꼬마김밥",
        origin: "쌀(국내산), 김(완도산)",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFhLBua_NOFN0awA2N5t_PrB1nXcukdfPDGbV0YZ8WL46NtHfwu77cy4hAoFZjWZxp0U3TRnjuCb-a5IJhyHg9yrtJQA55AiJu1LXCtuuCdtrZfPmOJAxFOfj3vWmaWfom-ZJ3kyJIUwW2N9s46C7qOM0cXmXkfNU-QOdmAnZwKmMP6tfsUXbt2UEVNXyPm-bswm0mIkKtY8jdusw-nJWXb5CTvNHPykRmpI_wIInLaaKyyFemMemc"
      },
      {
        name: "수제 찰순대 (내장포함)",
        price: 4500,
        priceFormatted: "4,500원",
        desc: "잡내 없이 찰기 넘치며 간, 허파, 오소리감투 넉넉히 제공",
        origin: "돼지소창(국내산)",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfyjfQErdFUYh6Qtjw21BDolr7qSOVPuO6rwjxw725MdqUXGq7SlSet48cuZ-aXGWKZ0aX91Qb6N9CZuIHkmkv9j53X3G7-svs_K00pvX5lDs-MBOTBp6A2Jn0ZOpLnQYjL8-Jt5LE2xHMkiaYRiHi4AgTq91qUteZUsFfm0G8tAnpft7YgBBPFFoUVsi0n3flmXqJIxowKUB7D03q8XOZ8mUvG2vEyjQcVizvPUYpZFo37EDof2Q-"
      }
    ],
    reviews: [
      {
        id: "r201",
        author: "중랑맛집사냥꾼",
        userBadge: "면목3동 주민 (영수증 인증)",
        rating: 5.0,
        content: "요즘 프랜차이즈 떡볶이들은 자극적인 캡사이신 맛만 가득한데, 여긴 멸치 육수 베이스에 파 단맛이 우러나서 끝까지 국물을 퍼먹게 됩니다. 순대도 내장 비린내 하나도 안 나고 찰기 최고예요. 할머니 오래오래 건강하게 장사해주세요!",
        date: "2일 전",
        orderInfo: "밀떡볶이, 바삭 야끼만두 2인 세트"
      },
      {
        id: "r202",
        author: "상봉퇴근길러",
        userBadge: "상봉동 주민",
        rating: 5.0,
        content: "퇴근하고 포장해와서 집에서 맥주 한 캔이랑 먹으면 피로가 싹 풀립니다. 4,000원에 양도 1.5인분은 족히 주십니다. 야끼만두 국물에 푹 적셔 먹는 맛은 서울 시내 분식집 통틀어 탑3 안에 듭니다.",
        date: "1주일 전",
        orderInfo: "포장 주문"
      },
      {
        id: "r203",
        author: "서울떡볶이순례",
        userBadge: "타지역 미식 탐방객",
        rating: 4.8,
        content: "망우동 떡볶이 골목이랑 비교했을 때 여기는 훨씬 더 시장 본연의 묵직하고 따스한 맛입니다. 가격도 2025년에 믿기 힘든 4천원대... 중랑구 오면 무조건 재방문할 거예요!",
        date: "2주일 전",
        orderInfo: "현장 매장 식사"
      }
    ],
    emoji: "🍢",
    naverMapUrl: "https://map.naver.com/v5/search/%EB%8F%99%EB%B6%80%EC%8B%9C%EC%9E%A5%20%ED%95%A0%EB%A8%B8%EB%8B%88%EB%96%A1%EB%B3%B6%EC%9D%B4",
    kakaoMapUrl: "https://map.kakao.com/?q=%EB%8F%99%EB%B6%80%EC%8B%9C%EC%9E%A5%20%ED%95%A0%EB%A8%B8%EB%8B%88%EB%96%A1%EB%B3%B6%EC%9D%B4"
  },
  {
    id: 3,
    name: "묵동 하오마라 중화요리",
    category: "중식",
    dong: "묵동",
    subArea: "먹골역 인근",
    rating: 4.7,
    reviewCount: 228,
    price: 12000,
    priceLabel: "12,000원",
    signatureMenu: "얼큰 마라탕 & 꿔바로우",
    tags: ["#먹골역맛집", "#꿔바로우바삭", "#중랑마라성지"],
    address: "서울 중랑구 동일로 932 2층",
    roadAddress: "서울 중랑구 동일로 932 2층",
    hours: "11:00 - 22:30 (연중무휴)",
    todayHours: "11:00 ~ 22:30",
    isOpenNow: true,
    holiday: "연중무휴",
    phone: "02-972-8889",
    desc: "한국인 입맛에 맞춰 사골 육수로 묵직하고 깊은 풍미를 낸 마라탕과 찹쌀 반죽으로 겉바속쫀의 극치를 보여주는 꿔바로우가 메인인 맛집입니다.",
    tip: "매운맛 2단계(신라면 수준)에 땅콩소스를 따로 요청하여 찍어 드시면 훨씬 고소합니다.",
    editorName: "이묵동",
    editorTenure: "묵1동 거주 14년차",
    parking: "건물 뒤편 4대 주차 가능 (만차 시 인근 유료주차)",
    subwayGuide: "7호선 먹골역 1번 출구 도보 3분",
    subwayWalkTime: "먹골역 1번 출구 도보 3분",
    secondarySubway: "6·7호선 태릉입구역 도보 8분",
    images: {
      hero: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
      sub1: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
      sub2: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80",
      sub3: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80"
    },
    badges: ["사골 마라육수", "꿔바로우 달인", "묵동 중식 1위"],
    menuItems: [
      {
        name: "사골 셀프 마라탕 (100g)",
        price: 1900,
        priceFormatted: "1,900원/100g",
        desc: "신선한 40여 종 채소와 면, 피쉬볼을 직접 담아 끓이는 마라탕",
        tag: "대표메뉴",
        origin: "사골(국내산), 향신료(사천 직수입)",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "찹쌀 꿔바로우 (소)",
        price: 13000,
        priceFormatted: "13,000원",
        desc: "바삭한 찹쌀 튀김옷과 새콤달콤한 특제 레몬 유자 소스",
        tag: "강추",
        origin: "돼지등심(국내산)",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80"
      }
    ],
    reviews: [
      {
        id: "r31",
        author: "마라홀릭",
        userBadge: "묵동 주민",
        rating: 4.8,
        content: "마라 입문자부터 고수까지 만족할 만한 사골 육수입니다. 꿔바로우는 식어도 바삭해요!",
        date: "어제",
        orderInfo: "마라탕 2단계 + 꿔바로우"
      }
    ],
    emoji: "🥟",
    naverMapUrl: "https://map.naver.com/v5/search/%EB%AC%B5%EB%8F%99%20%ED%95%98%EC%98%A4%EB%A7%88%EB%9D%BC",
    kakaoMapUrl: "https://map.kakao.com/?q=%EB%AC%B5%EB%8F%99%20%ED%95%98%EC%98%A4%EB%A7%88%EB%9D%BC"
  },
  {
    id: 4,
    name: "망우 맑은샘 분식",
    category: "분식/카페",
    dong: "망우동",
    subArea: "혜원여고 골목",
    rating: 4.8,
    reviewCount: 489,
    price: 5000,
    priceLabel: "5,000원",
    signatureMenu: "추억의 즉석떡볶이 & 군만두",
    tags: ["#망우동노포", "#생활의달인", "#추억의맛"],
    address: "서울 중랑구 망우로73길 42",
    roadAddress: "서울 중랑구 망우로73길 42",
    hours: "12:00 - 19:00 (재료 소진 시 조기 마감)",
    todayHours: "12:00 ~ 19:00",
    isOpenNow: true,
    holiday: "매주 일요일 정기 휴무",
    phone: "02-493-1442",
    desc: "혜원여고 학생들의 영원한 참새 방앗간이자 방송에 다수 소개된 레전드 즉석떡볶이집. 자극적이지 않고 달콤칼칼한 쫄면 즉떡에 갓 튀긴 만두가 예술입니다.",
    tip: "마지막에 빙수(3,000원)로 입가심하면 완벽한 망우동 클래식 코스 완성!",
    editorName: "정우림",
    editorTenure: "망우동 토박이 30년",
    parking: "골목길 특성상 주차 불가, 대중교통 이용 추천",
    subwayGuide: "경의중앙·경춘선 망우역 1번 출구 도보 10분",
    subwayWalkTime: "망우역 1번 출구 도보 10분",
    images: {
      hero: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1200&q=80",
      sub1: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80",
      sub2: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
      sub3: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80"
    },
    badges: ["생활의달인 방영", "여고앞 추억맛집", "가성비 탑"],
    menuItems: [
      {
        name: "즉석 떡볶이 (1인)",
        price: 3000,
        priceFormatted: "3,000원",
        desc: "쫄면과 오뎅이 듬뿍 들어간 옛날 달달한 즉석떡볶이",
        tag: "대표메뉴",
        origin: "밀떡(국내산)",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "야끼 군만두 (3개)",
        price: 1500,
        priceFormatted: "1,500원",
        desc: "바삭바삭하게 튀겨내 즉떡 국물에 넣어 끓여먹는 만두",
        tag: "필수",
        origin: "수제",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "추억의 팥빙수",
        price: 3000,
        priceFormatted: "3,000원",
        desc: "달콤한 연유와 통단팥이 올라간 레트로 얼음빙수",
        tag: "후식필수",
        origin: "팥(국내산)",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80"
      }
    ],
    reviews: [
      {
        id: "r41",
        author: "혜원여고졸업생",
        userBadge: "망우동 주민",
        rating: 5.0,
        content: "학창 시절 먹던 그 맛 그대로예요. 가격도 아직도 너무 착해서 눈물 납니다. 즉떡 먹고 빙수로 입가심하면 최고예요.",
        date: "5일 전",
        orderInfo: "즉석떡볶이 2인 + 만두 + 빙수"
      }
    ],
    emoji: "🥘",
    naverMapUrl: "https://map.naver.com/v5/search/%EB%A7%9D%EC%9A%B0%20%EB%A7%91%EC%9D%80%EC%83%98",
    kakaoMapUrl: "https://map.kakao.com/?q=%EB%A7%9D%EC%9A%B0%20%EB%A7%91%EC%9D%80%EC%83%98"
  },
  {
    id: 5,
    name: "신내 숲길 파스타",
    category: "양식",
    dong: "신내동",
    subArea: "봉화산 자락길",
    rating: 4.7,
    reviewCount: 195,
    price: 15000,
    priceLabel: "15,000원",
    signatureMenu: "명란 크림 파스타 & 부챗살 스테이크",
    tags: ["#분위기맛집", "#데이트추천", "#봉화산역"],
    address: "서울 중랑구 신내로 21길 16 1층",
    roadAddress: "서울 중랑구 신내로 21길 16",
    hours: "11:30 - 21:30 (브레이크타임 15:00-17:00)",
    todayHours: "11:30 ~ 21:30",
    isOpenNow: true,
    breakTime: "15:00 ~ 17:00",
    holiday: "매주 화요일 정기 휴무",
    phone: "02-3422-5501",
    desc: "봉화산 자락 근처에 자리해 채광과 푸릇푸릇한 조경이 예쁜 감성 비스트로입니다. 저염 백명란과 동물성 크림을 듬뿍 넣은 파스타가 특히 여성 고객에게 인기입니다.",
    tip: "주말 저녁에는 네이버 예약 시 하우스 와인 1잔 무료 쿠폰을 증정합니다.",
    editorName: "최신내",
    editorTenure: "신내동 주민 10년차",
    parking: "매장 전용 주차장 6대 완비",
    subwayGuide: "6호선 봉화산역 3번 출구 도보 6분",
    subwayWalkTime: "봉화산역 3번 출구 도보 6분",
    images: {
      hero: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
      sub1: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
      sub2: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80",
      sub3: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80"
    },
    badges: ["분위기 맛집", "데이트 추천", "주차 가능"],
    menuItems: [
      {
        name: "저염 백명란 크림 파스타",
        price: 15000,
        priceFormatted: "15,000원",
        desc: "고소한 풍미의 100% 동물성 생크림과 감칠맛 나는 백명란의 조화",
        tag: "시그니처",
        origin: "명란(국내산), 크림(이탈리아산)",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "수비드 부챗살 스테이크 (200g)",
        price: 26000,
        priceFormatted: "26,000원",
        desc: "부드럽게 저온 수비드 후 시어링한 부챗살과 구운 제철 채소",
        origin: "소고기(프라임급)",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80"
      }
    ],
    reviews: [
      {
        id: "r51",
        author: "신내주민",
        userBadge: "신내1동 주민",
        rating: 4.8,
        content: "봉화산 산책하고 들르기 딱 좋아요. 명란 크림 파스타가 정말 꾸덕하고 맛있습니다. 분위기도 차분해요.",
        date: "3일 전",
        orderInfo: "명란 크림 파스타 + 하우스와인"
      }
    ],
    emoji: "🍝",
    naverMapUrl: "https://map.naver.com/v5/search/%EC%8B%A0%EB%82%B4%20%EC%88%B2%EA%B8%B8%20%ED%8C%8C%EC%8A%A4%ED%83%80",
    kakaoMapUrl: "https://map.kakao.com/?q=%EC%8B%A0%EB%82%B4%20%EC%88%B2%EA%B8%B8%20%ED%8C%8C%EC%8A%A4%ED%83%80"
  },
  {
    id: 6,
    name: "중화 태릉입구 참치&스시",
    category: "일식",
    dong: "중화동",
    subArea: "중화역 먹자골목",
    rating: 4.9,
    reviewCount: 310,
    price: 16000,
    priceLabel: "16,000원",
    signatureMenu: "모둠초밥 12p & 나가사키 우동",
    tags: ["#신선한회", "#중화역초밥", "#혼밥성지"],
    address: "서울 중랑구 중랑역로 142 1층",
    roadAddress: "서울 중랑구 중랑역로 142",
    hours: "11:30 - 22:00 (일요일 휴무)",
    todayHours: "11:30 ~ 22:00",
    isOpenNow: true,
    breakTime: "15:00 ~ 17:00",
    holiday: "매주 일요일 정기 휴무",
    phone: "02-432-8877",
    desc: "새벽 노량진 수산시장에서 공수한 신선한 활어와 참치로 두툼하게 쥐어내는 스시 전문점. 밥알 사이 공기층이 살아있어 입안에서 부드럽게 풀립니다.",
    tip: "특초밥 주문 시 뚝배기 미니 우동과 왕새우 튀김 1p가 서비스로 제공됩니다.",
    editorName: "한중화",
    editorTenure: "중화동 주민 15년차",
    parking: "인근 공영주차장 주차권 1시간 제시",
    subwayGuide: "7호선 중화역 3번 출구 도보 4분",
    subwayWalkTime: "중화역 3번 출구 도보 4분",
    images: {
      hero: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      sub1: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=700&q=80",
      sub2: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80",
      sub3: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80"
    },
    badges: ["당일공수 활어", "가성비 스시", "혼밥 추천"],
    menuItems: [
      {
        name: "특선 모둠초밥 (12p)",
        price: 16000,
        priceFormatted: "16,000원",
        desc: "광어, 연어, 참치, 간장새우, 와규 등 알찬 12가지 구성",
        tag: "대표",
        origin: "광어·도미(국내산), 연어(노르웨이)",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "칼칼 나가사키 우동",
        price: 11000,
        priceFormatted: "11,000원",
        desc: "홍합, 오징어 등 푸짐한 해물과 불맛 가득한 진한 육수",
        origin: "해물(국내산 및 원양산)",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=500&q=80"
      }
    ],
    reviews: [
      {
        id: "r61",
        author: "스시덕후",
        userBadge: "중화동 직장인",
        rating: 5.0,
        content: "회가 정말 두툼하고 밥 양도 적당해요. 미니 우동 서비스까지 주셔서 배부르게 점심 먹을 수 있는 최고의 곳!",
        date: "4일 전",
        orderInfo: "특초밥 12p 세트"
      }
    ],
    emoji: "🍣",
    naverMapUrl: "https://map.naver.com/v5/search/%EC%A4%91%ED%99%94%20%ED%83%9C%EB%A6%89%EC%9E%85%EA%B5%AC%20%EC%B0%B8%EC%B9%98%EC%8A%A4%EC%8B%9C",
    kakaoMapUrl: "https://map.kakao.com/?q=%EC%A4%91%ED%99%94%20%ED%83%9C%EB%A6%89%EC%9E%85%EA%B5%AC%20%EC%B0%B8%EC%B9%98%EC%8A%A4%EC%8B%9C"
  },
  {
    id: 7,
    name: "면목 사가정 숯불닭갈비",
    category: "한식",
    dong: "면목동",
    subArea: "사가정역 먹자골목",
    rating: 4.8,
    reviewCount: 420,
    price: 13000,
    priceLabel: "13,000원",
    signatureMenu: "양념 숯불닭갈비 & 막국수",
    tags: ["#사가정맛집", "#숯불향가득", "#모임장소"],
    address: "서울 중랑구 면목로48길 19",
    roadAddress: "서울 중랑구 면목로48길 19",
    hours: "15:00 - 24:00 (자정 마감)",
    todayHours: "15:00 ~ 24:00",
    isOpenNow: true,
    holiday: "연중무휴",
    phone: "02-495-9292",
    desc: "철판이 아닌 참숯 화로 위에서 직화로 구워 불향이 그윽하게 배어있는 닭다리살 닭갈비. 특제 과일 양념으로 부드럽고 매콤달콤한 육즙이 터집니다.",
    tip: "치즈퐁듀(3,000원)를 불판 모퉁이에 올려 닭갈비를 찍어 먹으면 꿀맛입니다.",
    editorName: "사가정골목대장",
    editorTenure: "사가정 거주 25년차",
    parking: "사가정역 공영주차장 도보 2분",
    subwayGuide: "7호선 사가정역 1번 출구 도보 3분",
    subwayWalkTime: "사가정역 1번 출구 도보 3분",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnKjjv3NBg_Yuuz77napBNL3VoxyXBEy7fw8_rNr9JKLegaNeWCqaNXKf5EnL_00hibZw8BkTzrLHiWUGFQa53vKdeb1cnqwzxMXiryQxb3Upup62PxAifmUnTzRI5DoGnMPWWt1V2XmJ_8DYbQKelB1RPNlz5rLrKD0CUr5S1rQbRiZmVKATbfOl1jLKn_WM3wRTEGObvOVX5JoNjOPA6xmytW3-TfuC4f_ncdjMCVGbv8VS9-mUh",
      sub1: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80",
      sub2: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
      sub3: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80"
    },
    badges: ["사가정 먹자골목 1위", "참숯 직화", "회식 명소"],
    menuItems: [
      {
        name: "참숯 양념 닭갈비 (300g)",
        price: 13000,
        priceFormatted: "13,000원",
        desc: "국내산 닭다리살을 사과·배 과일 양념에 48시간 숙성한 직화구이",
        tag: "인기",
        origin: "닭다리살(국내산)",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "시원한 살얼음 메밀막국수",
        price: 7000,
        priceFormatted: "7,000원",
        desc: "동치미 육수와 매콤 비빔장이 어우러진 닭갈비 최고의 파트너",
        origin: "메밀(국내산/봉평)",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=500&q=80"
      }
    ],
    reviews: [
      {
        id: "r71",
        author: "숯불마니아",
        userBadge: "면목7동 주민",
        rating: 5.0,
        content: "춘천 갈 필요가 없어요. 숯불 향이 진하고 닭다리살이 너무 촉촉합니다. 치즈 퐁듀 꼭 추가하세요!",
        date: "2일 전",
        orderInfo: "양념 닭갈비 3인분 + 막국수"
      }
    ],
    emoji: "🍗",
    naverMapUrl: "https://map.naver.com/v5/search/%EC%82%AC%EA%B0%80%EC%A0%95%20%EC%88%AF%EB%B6%88%EB%8B%AD%EA%B0%88%EB%B9%84",
    kakaoMapUrl: "https://map.kakao.com/?q=%EC%82%AC%EA%B0%80%EC%A0%95%20%EC%88%AF%EB%B6%88%EB%8B%AD%EA%B0%88%EB%B9%84"
  },
  {
    id: 8,
    name: "상봉 감성카페 무화과 & 베이커스",
    category: "분식/카페",
    dong: "상봉동",
    subArea: "상봉역 골목",
    rating: 4.9,
    reviewCount: 388,
    price: 6500,
    priceLabel: "6,500원",
    signatureMenu: "수제 바스크 치즈케이크 & 아인슈페너",
    tags: ["#디저트천국", "#감성카페", "#중랑디저트"],
    address: "서울 중랑구 상봉중앙로 42 2층",
    roadAddress: "서울 중랑구 상봉중앙로 42 2층",
    hours: "12:00 - 21:00 (수요일 휴무)",
    todayHours: "12:00 ~ 21:00",
    isOpenNow: true,
    holiday: "매주 수요일 정기 휴무",
    phone: "02-493-7720",
    desc: "빈티지 우드 톤의 따스한 인테리어와 매일 아침 구워내는 수제 글루텐프리 바스크 치즈케이크, 묵직하고 달콤한 크림을 올린 아인슈페너가 있는 힐링 스팟입니다.",
    tip: "햇살이 가장 잘 드는 오후 2시 창가 둥근 테이블 자리가 포토존으로 유명합니다.",
    editorName: "정상봉",
    editorTenure: "상봉1동 거주 12년차",
    parking: "주차 불가 (상봉역 도보 4분)",
    subwayGuide: "7호선·경의중앙선 상봉역 2번 출구 도보 3분",
    subwayWalkTime: "상봉역 2번 출구 도보 3분",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6DaL4fmdpDiEmNn3onTv47a-Ao-CrZO-BtKMDUD14vy0ivkRU2PK2sJnvHYgGwD3Srs-7pknGQ-7HqX6iIYIaPwGHhhJGhlofqzdg6lmVylEYjdUlTo9KlC0u44Wr3CwNcjE9VCha5Ch_dfoPy3TzH79cDBnrf83pX3HUS0B-XdGWTYFsCYpS_PMhuYLQJYdWZApkyVKVYfwXTzHZeinaAKSg601Q_iGqyVhpOubKy04Po3t5gvhH",
      sub1: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9XPvxaC8KDyEZVk5oBY0Z95GMWKyDN1MmBZ6mr3mGtVO7hL-FYO9-wPUvWg4C6C7javExflU-JPlnIgwTlDYWPqUV35gKxFYMz0oUMMy-u7WOJYg7koYsCgt5toSNeZIS-hc4CmEwCCxwOMKCoiVaT166tiys2Md0f4APepzKTIEgYbD9IPwas6Qp4jFzXHIKi9P0PcE970Pdqt1BOe984WqgtfWRP_uYUEh1t_GHvSCHSffuhAEh",
      sub2: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80",
      sub3: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80"
    },
    badges: ["수제 디저트", "반려동물 동반 가능", "핸드드립 명소"],
    menuItems: [
      {
        name: "수제 바스크 치즈케이크",
        price: 6800,
        priceFormatted: "6,800원",
        desc: "스페인산 끼리 크림치즈로 만든 겉은 캐러멜라이징, 속은 촉촉한 케이크",
        tag: "베스트",
        origin: "크림치즈(스페인산)",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "시그니처 아인슈페너",
        price: 6000,
        priceFormatted: "6,000원",
        desc: "진한 에스프레소 위에 쫀쫀한 동물성 수제 크림을 듬뿍 얹은 커피",
        origin: "원두(에티오피아 예가체프 블렌드)",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9XPvxaC8KDyEZVk5oBY0Z95GMWKyDN1MmBZ6mr3mGtVO7hL-FYO9-wPUvWg4C6C7javExflU-JPlnIgwTlDYWPqUV35gKxFYMz0oUMMy-u7WOJYg7koYsCgt5toSNeZIS-hc4CmEwCCxwOMKCoiVaT166tiys2Md0f4APepzKTIEgYbD9IPwas6Qp4jFzXHIKi9P0PcE970Pdqt1BOe984WqgtfWRP_uYUEh1t_GHvSCHSffuhAEh"
      }
    ],
    reviews: [
      {
        id: "r81",
        author: "카페투어러",
        userBadge: "상봉동 주민",
        rating: 5.0,
        content: "중랑구에 이런 감성 카페가 있어서 너무 감사해요. 커피 향도 너무 좋고 무화과 디저트는 인생 디저트입니다.",
        date: "어제",
        orderInfo: "아인슈페너 + 바스크치즈케이크"
      }
    ],
    emoji: "☕",
    naverMapUrl: "https://map.naver.com/v5/search/%EC%83%81%EB%B4%89%20%EC%B9%B4%ED%8E%98%20%EB%AC%B4%ED%99%94%EA%B3%BC",
    kakaoMapUrl: "https://map.kakao.com/?q=%EC%83%81%EB%B4%89%20%EC%B9%B4%ED%8E%98%20%EB%AC%B4%ED%99%94%EA%B3%BC"
  },
  {
    id: 9,
    name: "중화 연탄불 마포돼지갈비",
    category: "한식",
    dong: "중화동",
    subArea: "중화역 3번출구",
    rating: 4.8,
    reviewCount: 350,
    price: 15000,
    priceLabel: "15,000원",
    signatureMenu: "달짝지근 연탄돼지갈비 300g",
    tags: ["#연탄구이", "#중화동명물", "#가성비고기집"],
    address: "서울 중랑구 동일로 798",
    roadAddress: "서울 중랑구 동일로 798",
    hours: "16:00 - 23:00 (격주 월요일 휴무)",
    todayHours: "16:00 ~ 23:00",
    isOpenNow: true,
    holiday: "격주 월요일 휴무",
    phone: "02-491-3312",
    desc: "초벌 연탄구이실에서 70% 구워져 나오는 촉촉한 양념돼지갈비. 은은한 연탄 불향과 오랜 비법 간장 소스가 버무려져 밥도둑 겸 술안주로 정평이 나 있습니다.",
    tip: "기본 제공되는 시골식 배추된장국과 파채무침을 쌈에 함께 싸서 드세요. 생생정보통 방영 명소!",
    editorName: "박중화",
    editorTenure: "중화동 거주 20년차",
    parking: "가게 앞 2대 주차 가능 (인근 골목 주차 권장)",
    subwayGuide: "7호선 중화역 3번 출구 도보 4분",
    subwayWalkTime: "중화역 3번 출구 도보 4분",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR23N7W8DB_091SxL5Cvr1ayzPyCjpyEdwHcoujiXAs1kxoxvKUE6ckKIG2oXsGRS_U7wnG8Cy3MYcUfR8avoAtoSqNw45SrY3ZNfqWOSMaYCrxWK57JxzQSPwyrXzXv_CABn-sQG47WDkZUlE9Q_QaFgAqNw1wSwVlX_viBEdqv_xToTjvbvWqZRT1rPffCllTdN32ccmdCrhG_zxY7_lKveRIrRODRjaSoPOxwQ0ELFsHnxhnVq5",
      sub1: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
      sub2: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80",
      sub3: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80"
    },
    badges: ["생생정보통 방영", "연탄직화구이", "중화동 명물"],
    menuItems: [
      {
        name: "수제 연탄 돼지갈비 (250g)",
        price: 16000,
        priceFormatted: "16,000원",
        desc: "연탄불에 초벌해 육즙을 가두고 특제 비법 양념을 머금은 갈비",
        tag: "대표",
        origin: "돼지갈비(국내산)",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR23N7W8DB_091SxL5Cvr1ayzPyCjpyEdwHcoujiXAs1kxoxvKUE6ckKIG2oXsGRS_U7wnG8Cy3MYcUfR8avoAtoSqNw45SrY3ZNfqWOSMaYCrxWK57JxzQSPwyrXzXv_CABn-sQG47WDkZUlE9Q_QaFgAqNw1wSwVlX_viBEdqv_xToTjvbvWqZRT1rPffCllTdN32ccmdCrhG_zxY7_lKveRIrRODRjaSoPOxwQ0ELFsHnxhnVq5"
      },
      {
        name: "차돌 시골 된장찌개",
        price: 5000,
        priceFormatted: "5,000원 (첫 주문 시 무료)",
        desc: "집된장으로 구수하게 끓여낸 차돌박이와 두부 뚝배기",
        origin: "된장(국내산)",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80"
      }
    ],
    reviews: [
      {
        id: "r91",
        author: "고기러버",
        userBadge: "중화2동 주민",
        rating: 5.0,
        content: "연탄 불향이 고기 전체에 쏙 배어있어요. 고기도 야들야들하고 기본으로 나오는 된장찌개가 정말 밥 한 공기 뚝딱입니다.",
        date: "3일 전",
        orderInfo: "연탄돼지갈비 3인분 + 공깃밥"
      }
    ],
    emoji: "🥩",
    naverMapUrl: "https://map.naver.com/v5/search/%EC%A4%91%ED%99%94%EB%8F%99%20%EC%97%B0%ED%83%84%EB%B6%88%20%EB%8F%BC%EC%A7%80%EA%B0%88%EB%B9%84",
    kakaoMapUrl: "https://map.kakao.com/?q=%EC%A4%91%ED%99%94%EB%8F%99%20%EC%97%B0%ED%83%84%EB%B6%88%20%EB%8F%BC%EC%A7%80%EA%B0%88%EB%B9%84"
  },
  {
    id: 10,
    name: "묵동 먹골 손칼국수 & 보쌈",
    category: "한식",
    dong: "묵동",
    subArea: "먹골역 7번출구",
    rating: 4.7,
    reviewCount: 265,
    price: 9000,
    priceLabel: "9,000원",
    signatureMenu: "손칼국수 & 야들야들 수육보쌈",
    tags: ["#직접빚은면", "#김치찐맛집", "#먹골역점심"],
    address: "서울 중랑구 공릉로 28 1층",
    roadAddress: "서울 중랑구 공릉로 28 1층",
    hours: "10:30 - 21:00 (매주 일요일 휴무)",
    todayHours: "10:30 ~ 21:00",
    isOpenNow: true,
    holiday: "매주 일요일 정기 휴무",
    phone: "02-971-4560",
    desc: "매일 아침 직접 반죽해 홍두깨로 밀어 썬 쫄깃한 면발과 매일 담그는 칼칼한 겉절이 김치가 끝내주는 손칼국수집. 곁들임 한방 수육보쌈도 부드럽고 푸짐합니다.",
    tip: "칼국수 국물에 다진 청양고추지를 한 티스푼 넣어 먹으면 알싸하게 해장됩니다.",
    editorName: "김먹골",
    editorTenure: "묵동 거주 16년차",
    parking: "건물 옆 유료주차장 (식사 시 30분 무료 지원)",
    subwayGuide: "7호선 먹골역 7번 출구 도보 4분",
    subwayWalkTime: "먹골역 7번 출구 도보 4분",
    images: {
      hero: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=1200&q=80",
      sub1: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
      sub2: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
      sub3: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80"
    },
    badges: ["자가제면 손칼국수", "매일 담그는 겉절이", "먹골 직장인 성지"],
    menuItems: [
      {
        name: "옛날 손칼국수",
        price: 9000,
        priceFormatted: "9,000원",
        desc: "멸치 디포리와 다시마로 우려낸 시원하고 깔끔한 맑은 칼국수",
        tag: "대표",
        origin: "밀가루(국내산), 멸치(남해안)",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "맛보기 한방 수육보쌈 (200g)",
        price: 15000,
        priceFormatted: "15,000원",
        desc: "한방 약재로 삶아 잡내 없이 야들야들한 오겹살 수육과 보쌈김치",
        tag: "추천",
        origin: "돼지고기(국내산)",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80"
      }
    ],
    reviews: [
      {
        id: "r101",
        author: "칼국수마니아",
        userBadge: "묵2동 주민",
        rating: 5.0,
        content: "면발이 진짜 쫄깃해요. 마트 면발과는 차원이 다릅니다. 그리고 겉절이 김치가 너무 맛있어서 항아리 하나 다 비우고 갑니다.",
        date: "어제",
        orderInfo: "손칼국수 + 맛보기 보쌈"
      }
    ],
    emoji: "🍜",
    naverMapUrl: "https://map.naver.com/v5/search/%EB%A8%B9%EA%B3%A8%20%EC%86%90%EC%8B%9D%EB%8B%B9%20%EC%B9%BC%EA%B5%AD%EC%88%98",
    kakaoMapUrl: "https://map.kakao.com/?q=%EB%A8%B9%EA%B3%A8%20%EC%86%90%EC%8B%9D%EB%8B%B9%20%EC%B9%BC%EA%B5%AD%EC%88%98"
  }
];

export const POPULAR_PICKS = [
  RESTAURANTS_DATA[1], // 동부시장 할머니떡볶이
  RESTAURANTS_DATA[7], // 상봉 감성카페 무화과 & 베이커스
  RESTAURANTS_DATA[8]  // 중화 연탄불 마포돼지갈비
];

export const NEIGHBORHOOD_GUIDES_DATA = [
  {
    dong: '면목동',
    tagline: '30년 노포와 활기찬 골목 시장의 미식 중심지',
    desc: '동부골목시장의 달달한 옛날 떡볶이와 사가정역 먹자골목의 불향 가득 숯불구이가 공존하는 중랑구 대표 미식 핫플입니다.',
    hotspots: ['동부골목시장 떡볶이길', '사가정역 먹자골목', '면목천 산책로 맛집'],
    recommendCount: 3,
    avgPrice: '8,000원'
  },
  {
    dong: '상봉동',
    tagline: '복합 쇼핑몰과 감성 골목 카페가 어우러진 젊은 거리',
    desc: '상봉 엔터식스와 코스트코 주변의 편리한 대형 맛집과 한적한 골목 주택가에 자리한 수제 베이커리 & 핸드드립 카페를 함께 즐겨보세요.',
    hotspots: ['엔터식스 지하 맛길', '상봉중앙로 감성 카페거리', '상봉역 먹자골목'],
    recommendCount: 2,
    avgPrice: '10,000원'
  },
  {
    dong: '망우동',
    tagline: '학창 시절의 추억이 깃든 즉석떡볶이와 우림시장 노포',
    desc: '혜원여고 앞 즉떡 골목과 50년 역사를 자랑하는 우림전통시장의 푸짐한 인심과 가성비를 만날 수 있는 따스한 동네입니다.',
    hotspots: ['망우동 즉석떡볶이 골목', '우림시장 먹거리 장터', '망우역 광장 노포'],
    recommendCount: 2,
    avgPrice: '6,000원'
  },
  {
    dong: '중화동',
    tagline: '중랑천 벚꽃길과 어우러진 연탄구이 & 가성비 일식',
    desc: '퇴근길 연탄불에 지글지글 익어가는 돼지갈비 냄새와 신선한 활어회를 부담 없이 즐길 수 있는 중랑구민들의 숨은 안식처입니다.',
    hotspots: ['동일로 연탄구이길', '중화역 로컬 스시 골목', '중랑천 수변 산책로'],
    recommendCount: 2,
    avgPrice: '15,000원'
  },
  {
    dong: '묵동',
    tagline: '자가제면 손칼국수와 먹골역 직장인 힐링 맛길',
    desc: '홍두깨로 직접 밀어 만든 진한 손칼국수와 알싸한 마라 요리가 가득해 든든한 점심 식사와 저녁 회식으로 사랑받는 동네입니다.',
    hotspots: ['먹골역 손칼국수 거리', '공릉로 먹자골목', '묵동 장미공원 인근'],
    recommendCount: 2,
    avgPrice: '10,500원'
  },
  {
    dong: '신내동',
    tagline: '봉화산 자락의 푸른 채광과 여유로운 감성 비스트로',
    desc: '봉화산 둘레길을 산책한 뒤 즐기는 정갈한 파스타와 수비드 스테이크, 가족 친화적인 조용한 숲길 레스토랑이 매력적입니다.',
    hotspots: ['봉화산역 둘레길 맛길', '신내로 숲길 비스트로', '중랑구립도서관 카페'],
    recommendCount: 1,
    avgPrice: '15,000원'
  }
];
