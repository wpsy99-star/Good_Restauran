export interface MenuItem {
  name: string;
  price: number;
  priceFormatted: string;
  desc: string;
  tag?: string;
  origin?: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  userBadge: string;
  rating: number;
  content: string;
  date: string;
  orderInfo: string;
}

export interface Restaurant {
  id: number;
  name: string;
  category: '한식' | '중식' | '일식' | '양식' | '분식/카페';
  dong: '상봉동' | '면목동' | '망우동' | '중화동' | '묵동' | '신내동';
  subArea?: string;
  rating: number;
  reviewCount: number;
  price: number;
  priceLabel: string;
  signatureMenu: string;
  tags: string[];
  address: string;
  roadAddress: string;
  hours: string;
  todayHours: string;
  isOpenNow: boolean;
  breakTime?: string;
  holiday: string;
  phone: string;
  desc: string;
  tip: string;
  editorName: string;
  editorTenure: string;
  parking: string;
  subwayGuide: string;
  subwayWalkTime: string;
  secondarySubway?: string;
  images: {
    hero: string;
    sub1: string;
    sub2: string;
    sub3: string;
    all?: string[];
  };
  badges: string[];
  menuItems: MenuItem[];
  reviews: Review[];
  emoji: string;
  naverMapUrl: string;
  kakaoMapUrl: string;
}

export type SortOption = 'recommend' | 'rating' | 'price' | 'favorite';

export type TabType = 'explore' | 'random' | 'neighborhoods' | 'favorites';
