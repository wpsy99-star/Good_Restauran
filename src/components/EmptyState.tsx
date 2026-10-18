import React from 'react';
import { Restaurant } from '../types';
import { POPULAR_PICKS } from '../data/restaurants';

interface EmptyStateProps {
  searchQuery: string;
  onApplyKeyword: (keyword: string) => void;
  onResetSearch: () => void;
  onOpenSuggestModal: (keyword: string) => void;
  onOpenDetail: (restaurant: Restaurant) => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  searchQuery,
  onApplyKeyword,
  onResetSearch,
  onOpenSuggestModal,
  onOpenDetail
}) => {
  return (
    <div className="w-full flex flex-col gap-10 mt-6">
      {/* Empty State Card */}
      <section className="w-full bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_8px_32px_-8px_rgba(90,77,74,0.08)] flex flex-col items-center text-center relative overflow-hidden border border-[#eedfda]">
        {/* Decorative Background Glows */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#ffdbd0]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#ffd167]/40 blur-3xl pointer-events-none" />

        {/* Steaming Curious Clay Pot & Magnifying Glass SVG Illustration */}
        <div className="relative w-44 h-44 mb-4 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#faebe6] scale-95 animate-pulse" />
          <svg
            className="w-36 h-36 relative z-10 drop-shadow-md"
            fill="none"
            viewBox="0 0 160 160"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Steam lines */}
            <path
              d="M68 34C68 34 64 24 70 18C75 13 81 19 80 25C79 30 75 33 75 33"
              opacity="0.75"
              stroke="#FF6B35"
              strokeLinecap="round"
              strokeWidth="3"
            >
              <animate
                attributeName="opacity"
                dur="2.4s"
                repeatCount="indefinite"
                values="0.4;0.9;0.4"
              />
              <animateTransform
                attributeName="transform"
                dur="2.4s"
                repeatCount="indefinite"
                type="translate"
                values="0,0; 0,-4; 0,0"
              />
            </path>
            <path
              d="M88 38C88 38 93 28 89 21C85 15 79 19 81 27"
              opacity="0.6"
              stroke="#FFB59D"
              strokeLinecap="round"
              strokeWidth="3"
            >
              <animate
                attributeName="opacity"
                dur="2s"
                repeatCount="indefinite"
                values="0.7;0.3;0.7"
              />
              <animateTransform
                attributeName="transform"
                dur="2s"
                repeatCount="indefinite"
                type="translate"
                values="0,0; 0,-3; 0,0"
              />
            </path>

            {/* Clay pot body */}
            <ellipse cx="80" cy="116" fill="#594139" opacity="0.12" rx="46" ry="16" />
            <path
              d="M38 78C38 102 54 114 80 114C106 114 122 102 122 78H38Z"
              fill="#594139"
            />
            <ellipse cx="80" cy="78" fill="#372F2B" rx="42" ry="10" />
            <ellipse cx="80" cy="79" fill="#FFDBD0" rx="38" ry="7" />

            {/* Dumpling character */}
            <path
              d="M62 76C62 60 70 52 80 52C90 52 98 60 98 76H62Z"
              fill="#FFF8F6"
              stroke="#eedfda"
              strokeWidth="2"
            />
            <path
              d="M72 54C75 58 78 58 80 54C82 58 85 58 88 54"
              stroke="#e1bfb5"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <circle cx="73" cy="65" fill="#211A17" r="2.2" />
            <circle cx="87" cy="65" fill="#211A17" r="2.2" />
            <circle cx="68" cy="68" fill="#FF6B35" opacity="0.4" r="2.8" />
            <circle cx="92" cy="68" fill="#FF6B35" opacity="0.4" r="2.8" />
            <path
              d="M96 50C97.5 47 101 47 102 49C103 51 101.5 52.5 100.5 54.5"
              stroke="#AB3500"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <circle cx="100.5" cy="58" fill="#AB3500" r="1.2" />

            {/* Magnifying glass */}
            <g transform="rotate(-15 100 80)">
              <circle
                cx="102"
                cy="72"
                fill="#FFF1EC"
                fillOpacity="0.85"
                r="19"
                stroke="#FF6B35"
                strokeWidth="4.5"
              />
              <path
                d="M92 65C94 60 100 57 106 58"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeWidth="2.5"
              />
              <rect fill="#AB3500" height="18" rx="2.5" width="5" x="99.5" y="91" />
              <rect fill="#5B4300" height="6" rx="2" width="7" x="98.5" y="104" />
            </g>
          </svg>
        </div>

        {/* Main Headline */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#211a17] mb-1.5">
          ‘<span className="text-[#ab3500] font-black">{searchQuery || '입력하신 검색어'}</span>’에
          대한 검색 결과가 없어요
        </h2>

        {/* Helper Explanation */}
        <p className="text-xs sm:text-sm text-[#594139] max-w-lg mb-6 leading-relaxed">
          입력하신 검색어의 철자가 맞는지 확인해보시거나,
          <br className="hidden sm:inline" />
          다른 동네 또는 중랑구 로컬 인기 키워드로 찾아보세요.
        </p>

        {/* Quick Search Suggestions Box */}
        <div className="w-full max-w-2xl bg-[#faebe6] rounded-2xl p-4 sm:p-5 mb-6 flex flex-col gap-2.5 items-center border border-[#eedfda]">
          <span className="text-xs font-bold text-[#594139] flex items-center gap-1">
            <span className="material-symbols-outlined text-base text-[#ab3500]">
              local_fire_department
            </span>
            중랑구 주민들이 자주 찾는 추천 키워드
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { emoji: '🍢', text: '동부시장 떡볶이' },
              { emoji: '🥘', text: '사가정 닭갈비' },
              { emoji: '☕', text: '상봉 감성카페' },
              { emoji: '🍝', text: '신내 파스타' },
              { emoji: '🍜', text: '망우 맑은샘' }
            ].map((kw) => (
              <button
                key={kw.text}
                onClick={() => onApplyKeyword(kw.text)}
                className="bg-white hover:bg-[#ff6b35] hover:text-white text-[#211a17] text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-1 border border-[#eedfda] cursor-pointer"
              >
                <span>{kw.emoji}</span>
                <span>{kw.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onResetSearch}
            className="bg-[#ff6b35] hover:brightness-105 active:scale-95 text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow-[0_4px_16px_-2px_rgba(255,107,53,0.4)] flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">replay</span>
            <span>전체 맛집 목록 보기</span>
          </button>

          <button
            onClick={() => onOpenSuggestModal(searchQuery)}
            className="bg-[#faebe6] hover:bg-[#f4e5e0] text-[#211a17] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-colors flex items-center gap-1.5 border border-[#eedfda] cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg text-[#ab3500]">add_location_alt</span>
            <span>‘{searchQuery || '새 맛집'}’ 제보하기</span>
          </button>
        </div>
      </section>

      {/* POPULAR PICKS: Never Dead End */}
      <section className="w-full flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ab3500] animate-ping" />
              <span className="text-[11px] font-black text-[#ab3500] uppercase tracking-wider">
                POPULAR PICKS
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#211a17]">
              혹시 이런 중랑구 맛집을 찾으시나요?
            </h3>
            <p className="text-xs sm:text-sm text-[#594139]">
              방문자 평점 4.7점 이상! 현재 가장 많은 이들이 찾는 동네 찐맛집입니다.
            </p>
          </div>
          <button
            onClick={onResetSearch}
            className="text-xs font-bold text-[#ab3500] hover:underline flex items-center gap-1 self-start sm:self-auto cursor-pointer"
          >
            <span>전체 10곳 둘러보기</span>
            <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
          </button>
        </div>

        {/* 3 Popular Pick Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {POPULAR_PICKS.map((item) => (
            <article
              key={item.id}
              onClick={() => onOpenDetail(item)}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_-2px_rgba(90,77,74,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(90,77,74,0.14)] hover:-translate-y-1 transition-all flex flex-col border border-[#eedfda] cursor-pointer"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#faebe6]">
                <img
                  src={item.images.hero}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badges on Image */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 text-[#ab3500] shadow-sm">
                  <span
                    className="material-symbols-outlined text-xs"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    favorite
                  </span>
                  <span className="text-xs font-bold text-[#211a17]">{item.reviewCount}</span>
                </div>

                <div className="absolute top-3 right-3 bg-[#ffd167] text-[#765900] text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <span
                    className="material-symbols-outlined text-xs"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span>{item.rating.toFixed(1)}</span>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 flex-wrap">
                  {item.badges.slice(0, 2).map((b) => (
                    <span
                      key={b}
                      className="bg-black/60 text-white backdrop-blur-md text-[11px] font-semibold px-2 py-0.5 rounded-full"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-bold text-[#ab3500]">
                      {item.dong} · {item.category}
                    </span>
                    <span className="text-xs text-[#8d7168]">{item.subwayWalkTime}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#211a17] group-hover:text-[#ab3500] transition-colors truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#594139] line-clamp-2 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between bg-[#fff1ec]/50 -mx-4 -mb-4 px-4 py-2.5 rounded-b-2xl border-t border-[#eedfda]/40">
                  <div className="flex items-center gap-1 text-[#594139] text-xs font-medium">
                    <span className="material-symbols-outlined text-sm text-[#ab3500]">
                      payments
                    </span>
                    <span>1인 기준 {item.priceLabel}</span>
                  </div>
                  <span className="text-xs font-bold bg-[#faebe6] text-[#211a17] px-2.5 py-1 rounded-full group-hover:bg-[#ff6b35] group-hover:text-white transition-colors flex items-center gap-0.5">
                    <span>자세히 보기</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
