import React from 'react';
import { SortOption } from '../types';

interface FilterBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedDong: string;
  onSelectDong: (dong: string) => void;
  currentSort: SortOption;
  onSelectSort: (sort: SortOption) => void;
  resultCount: number;
}

const CATEGORIES = [
  { id: 'ALL', label: '전체', emoji: '🍽️' },
  { id: '한식', label: '한식', emoji: '🍲' },
  { id: '중식', label: '중식', emoji: '🥟' },
  { id: '일식', label: '일식', emoji: '🍣' },
  { id: '양식', label: '양식', emoji: '🍝' },
  { id: '분식/카페', label: '분식/카페', emoji: '🥪' }
];

const DONGS = [
  'ALL',
  '상봉동',
  '면목동',
  '망우동',
  '중화동',
  '묵동',
  '신내동'
];

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedDong,
  onSelectDong,
  currentSort,
  onSelectSort,
  resultCount
}) => {
  return (
    <section className="mt-6 flex flex-col gap-4">
      {/* Category Tabs (Horizontal Scrollable Pill Group) */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-bold text-[#594139] flex items-center gap-1">
            <span className="material-symbols-outlined text-base text-[#ab3500]">restaurant_menu</span>
            음식 종류
          </span>
          <span className="text-xs text-[#ab3500] font-medium hidden sm:inline-block">
            {selectedDong === 'ALL' ? '중랑구 전역' : selectedDong} ·{' '}
            {selectedCategory === 'ALL' ? '모든 음식' : selectedCategory} 탐색 중
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#ff6b35] text-white shadow-[0_2px_8px_-1px_rgba(255,107,53,0.36)] font-bold'
                    : 'bg-white text-[#594139] hover:bg-[#faebe6] hover:text-[#211a17] border border-[#eedfda]'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Neighborhood (동별) Pills & Sort Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-1 border-t border-[#eedfda]/50">
        {/* Neighborhood Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-[#594139] mr-1 flex items-center font-medium">
            <span className="material-symbols-outlined text-sm mr-0.5 text-[#785a00]">location_on</span>
            지역:
          </span>

          {DONGS.map((dong) => {
            const isAll = dong === 'ALL';
            const label = isAll ? '전체 동' : dong;
            const isActive = selectedDong === dong;

            return (
              <button
                key={dong}
                onClick={() => onSelectDong(dong)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#372f2b] text-[#fdeee8] font-bold shadow-xs'
                    : 'bg-white text-[#594139] hover:bg-[#faebe6] border border-[#eedfda]/70'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Count Indicator & Sorting Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <div className="text-xs sm:text-sm text-[#594139]">
            검색 결과{' '}
            <span className="text-base font-extrabold text-[#ab3500] tabular-nums">
              {resultCount}
            </span>
            곳
          </div>

          <div className="flex items-center gap-1 bg-[#fff1ec] p-1 rounded-xl border border-[#eedfda]">
            <button
              onClick={() => onSelectSort('recommend')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currentSort === 'recommend'
                  ? 'bg-white text-[#ab3500] font-bold shadow-xs'
                  : 'text-[#594139] hover:text-[#211a17]'
              }`}
            >
              추천순
            </button>
            <button
              onClick={() => onSelectSort('rating')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currentSort === 'rating'
                  ? 'bg-white text-[#ab3500] font-bold shadow-xs'
                  : 'text-[#594139] hover:text-[#211a17]'
              }`}
            >
              평점순
            </button>
            <button
              onClick={() => onSelectSort('price')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currentSort === 'price'
                  ? 'bg-white text-[#ab3500] font-bold shadow-xs'
                  : 'text-[#594139] hover:text-[#211a17]'
              }`}
            >
              낮은가격순
            </button>
            <button
              onClick={() => onSelectSort('favorite')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currentSort === 'favorite'
                  ? 'bg-white text-[#ab3500] font-bold shadow-xs'
                  : 'text-[#594139] hover:text-[#211a17]'
              }`}
            >
              저장순
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
