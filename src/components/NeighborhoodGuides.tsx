import React from 'react';
import { NEIGHBORHOOD_GUIDES_DATA, RESTAURANTS_DATA } from '../data/restaurants';
import { Restaurant } from '../types';

interface NeighborhoodGuidesProps {
  onSelectDong: (dong: string) => void;
  onSelectRestaurant: (restaurant: Restaurant) => void;
}

export const NeighborhoodGuides: React.FC<NeighborhoodGuidesProps> = ({
  onSelectDong,
  onSelectRestaurant
}) => {
  return (
    <div className="w-full flex flex-col gap-8 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#fff1ec] via-[#faebe6] to-[#ffd167]/20 rounded-2xl p-6 sm:p-8 border border-[#eedfda]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🗺️</span>
          <span className="text-xs font-bold text-[#ab3500] uppercase tracking-wide">
            중랑구 6개 동 로컬 가이드
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#211a17] tracking-tight">
          골목마다 색다른 매력, 중랑구 동네별 미식 지도
        </h2>
        <p className="text-sm sm:text-base text-[#594139] mt-2 max-w-2xl leading-relaxed">
          망우동 떡볶이 골목부터 상봉역 먹자골목, 면목동 30년 노포와 묵동 자가제면 칼국수까지!
          동네별 고유한 분위기와 추천 맛집을 만나보세요.
        </p>
      </div>

      {/* Dong Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NEIGHBORHOOD_GUIDES_DATA.map((guide) => {
          const matchedRestaurants = RESTAURANTS_DATA.filter((r) => r.dong === guide.dong);

          return (
            <div
              key={guide.dong}
              className="bg-white rounded-2xl p-5 shadow-sm border border-[#eedfda] flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-black text-[#211a17] flex items-center gap-1.5">
                    <span className="text-[#ab3500] text-sm">📍</span>
                    {guide.dong}
                  </span>
                  <span className="text-xs font-bold bg-[#ffdbd0]/60 text-[#ab3500] px-2.5 py-0.5 rounded-full">
                    맛집 {matchedRestaurants.length}곳
                  </span>
                </div>

                <div className="text-xs font-bold text-[#785a00] mb-2">{guide.tagline}</div>
                <p className="text-xs sm:text-sm text-[#594139] leading-relaxed mb-4">
                  {guide.desc}
                </p>

                {/* Hotspots */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-[#8d7168] block mb-1.5">
                    주요 미식 핫스팟
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {guide.hotspots.map((spot) => (
                      <span
                        key={spot}
                        className="text-xs bg-[#faebe6] text-[#211a17] px-2.5 py-1 rounded-md border border-[#eedfda]/50"
                      >
                        {spot}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mini restaurant thumbnails in this dong */}
                <div className="flex flex-col gap-2 pt-2 border-t border-[#eedfda]/50">
                  <span className="text-[11px] font-bold text-[#8d7168]">추천 매장 바로가기</span>
                  {matchedRestaurants.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => onSelectRestaurant(r)}
                      className="flex items-center justify-between text-left p-1.5 rounded-lg hover:bg-[#fff1ec] transition-colors group cursor-pointer"
                    >
                      <span className="text-xs font-semibold text-[#211a17] group-hover:text-[#ab3500] truncate">
                        {r.name}
                      </span>
                      <span className="text-[11px] text-[#785a00] font-bold">★ {r.rating}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectDong(guide.dong)}
                className="mt-5 w-full py-2.5 rounded-xl bg-[#faebe6] hover:bg-[#ff6b35] hover:text-white text-[#211a17] text-xs font-bold transition-all text-center flex items-center justify-center gap-1 cursor-pointer border border-[#eedfda]"
              >
                <span>{guide.dong} 맛집만 모아보기</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
