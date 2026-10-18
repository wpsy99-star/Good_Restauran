import React from 'react';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
  totalCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  onClearSearch,
  totalCount
}) => {
  return (
    <section className="relative w-full rounded-2xl bg-gradient-to-br from-[#FFF5EC] via-[#FFF9F3] to-[#FEEDE2] p-5 sm:p-8 lg:p-10 shadow-[0_4px_24px_-6px_rgba(255,107,53,0.12)] overflow-hidden border border-[#ffdbd0]/60">
      {/* Decorative Warm Radial Accents */}
      <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#ff6b35]/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-[#ffd167]/20 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Catchphrase Pill */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white shadow-xs text-[#ab3500] text-xs sm:text-sm font-semibold border border-[#ffdbd0]">
          <span className="text-base">🍜</span>
          <span>중랑구민 & 로컬 미식가 실시간 추천</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#211a17] mt-3 mb-2 tracking-tight">
          중랑구에서{' '}
          <span className="text-[#ff6b35] underline decoration-[#ffd167] decoration-wavy decoration-2">
            오늘 뭐 먹지?
          </span>
        </h1>

        <p className="text-sm sm:text-base text-[#594139] max-w-2xl leading-relaxed">
          상봉동부터 면목동, 망우동까지! 골목 구석구석 숨어있는 찐로컬 맛집 10곳을 발견하고, 결정이
          어려울 땐 오늘의 추천 룰렛을 돌려보세요.
        </p>

        {/* Live Search Bar */}
        <div className="w-full max-w-xl mt-6 relative flex items-center">
          <div className="absolute left-4 flex items-center pointer-events-none text-[#ab3500]">
            <span className="material-symbols-outlined text-2xl">search</span>
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="식당명, 대표메뉴 (예: 닭한마리, 떡볶이, 파스타) 검색..."
            className="w-full pl-12 pr-20 py-3.5 rounded-full bg-white text-[#211a17] text-sm sm:text-base placeholder-[#8d7168] shadow-[0_4px_18px_-2px_rgba(90,77,74,0.08)] border border-[#eedfda] focus:outline-none focus:ring-2 focus:ring-[#ff6b35] transition-all"
          />

          {searchQuery && (
            <button
              onClick={onClearSearch}
              className="absolute right-12 flex items-center justify-center text-[#8d7168] hover:text-[#211a17] p-1 transition-colors cursor-pointer"
              title="검색어 지우기"
            >
              <span className="material-symbols-outlined text-xl">cancel</span>
            </button>
          )}

          <button
            onClick={() => {}}
            className="absolute right-2 px-3 py-1.5 rounded-full bg-[#ff6b35] text-white text-xs font-bold hover:brightness-105 transition-all shadow-xs"
          >
            검색
          </button>
        </div>

        {/* Quick Search Tag Suggestions */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center mt-3 text-xs text-[#594139]">
          <span className="text-[#8d7168] font-medium">인기 키워드:</span>
          {['망우동 떡볶이', '상봉역 노포', '묵동 브런치', '사가정 닭갈비'].map((tag) => (
            <button
              key={tag}
              onClick={() => onSearchChange(tag)}
              className="px-2 py-0.5 rounded-md bg-white/80 hover:bg-[#ff6b35] hover:text-white transition-colors border border-[#eedfda]/60 cursor-pointer"
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Metric Counter Badges */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mt-6 w-full max-w-lg">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl py-3 px-2 text-center shadow-xs border border-[#eedfda]">
            <div className="text-xl sm:text-2xl font-black text-[#ab3500] tabular-nums">
              {totalCount}
            </div>
            <div className="text-xs text-[#594139] font-medium">엄선된 로컬 맛집</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl py-3 px-2 text-center shadow-xs border border-[#eedfda]">
            <div className="text-xl sm:text-2xl font-black text-[#785a00] tabular-nums">6개 동</div>
            <div className="text-xs text-[#594139] font-medium">중랑구 전역 커버</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl py-3 px-2 text-center shadow-xs border border-[#eedfda]">
            <div className="text-xl sm:text-2xl font-black text-[#ff6b35] flex items-center justify-center gap-0.5 tabular-nums">
              <span>4.8</span>
              <span className="text-sm">★</span>
            </div>
            <div className="text-xs text-[#594139] font-medium">주민 검증 평점</div>
          </div>
        </div>
      </div>
    </section>
  );
};
