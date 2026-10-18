import React, { useState } from 'react';
import { TabType } from '../types';

interface HeaderProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  favoritesCount: number;
  onOpenRandomRoulette: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  favoritesCount,
  onOpenRandomRoulette
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-40 bg-[#fff8f6]/95 backdrop-blur-xl border-b border-[#eedfda]/60 shadow-[0_1px_8px_rgba(90,77,74,0.06)]">
      <div className="h-16 max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => onSelectTab('explore')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[#faebe6] ring-2 ring-[#ab3500]/20 flex items-center justify-center shadow-xs">
            <img
              alt="중랑구 맛집 탐방 로고"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHgHwX7-bDwO-tnjumewcaGQTaryeQ6v_uLleKBi3yJAV9U3WQLXitAiHmSDOzK7IhIx3Ob7_lFoC_rIyAeMg2IoRRZxtd8bdVvAbRmPttingWwyKsrF7Y6ems_KTTxfzX41MhSMwli7VlHV7IFKuZsTY0fIrqJGzaM0Oz8jVrjiJoaMPEMwU6yCB09FyqvoFA166yg-Edp-7pQawnY6BZNReeNrbbrWx5EM0tR7umXmPiLnBb_hby"
              onError={(e) => {
                // SVG fallback if network blocks
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-bold text-base sm:text-lg text-[#211a17] group-hover:text-[#ab3500] transition-colors whitespace-nowrap">
                중랑구 맛집 탐방 🍜
              </span>
            </div>
            <span className="text-xs text-[#594139] hidden sm:inline-block font-medium">
              중랑구 동네 찐맛집 아카이브
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          <button
            onClick={() => onSelectTab('explore')}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              currentTab === 'explore'
                ? 'bg-[#ff6b35] text-white shadow-[0_2px_8px_-2px_rgba(255,107,53,0.36)]'
                : 'text-[#594139] hover:text-[#211a17] hover:bg-[#faebe6]'
            }`}
          >
            맛집 탐방 (목록)
          </button>
          <button
            onClick={() => onSelectTab('random')}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              currentTab === 'random'
                ? 'bg-[#ff6b35] text-white shadow-[0_2px_8px_-2px_rgba(255,107,53,0.36)]'
                : 'text-[#594139] hover:text-[#211a17] hover:bg-[#faebe6]'
            }`}
          >
            오늘 뭐 먹지? (랜덤 추천)
          </button>
          <button
            onClick={() => onSelectTab('neighborhoods')}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              currentTab === 'neighborhoods'
                ? 'bg-[#ff6b35] text-white shadow-[0_2px_8px_-2px_rgba(255,107,53,0.36)]'
                : 'text-[#594139] hover:text-[#211a17] hover:bg-[#faebe6]'
            }`}
          >
            동네별 가이드
          </button>
          <button
            onClick={() => onSelectTab('favorites')}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              currentTab === 'favorites'
                ? 'bg-[#ff6b35] text-white shadow-[0_2px_8px_-2px_rgba(255,107,53,0.36)]'
                : 'text-[#594139] hover:text-[#211a17] hover:bg-[#faebe6]'
            }`}
          >
            <span>즐겨찾기</span>
            {favoritesCount > 0 && (
              <span
                className={`text-xs px-1.5 py-0.2 rounded-full font-bold ${
                  currentTab === 'favorites'
                    ? 'bg-white text-[#ff6b35]'
                    : 'bg-[#ffdbd0] text-[#ab3500]'
                }`}
              >
                {favoritesCount}
              </span>
            )}
          </button>
        </nav>

        {/* Right Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenRandomRoulette}
            className="flex items-center gap-1.5 bg-[#ff6b35] hover:bg-[#ff5a1f] text-white text-sm font-bold px-4 py-2 rounded-full shadow-[0_4px_16px_-4px_rgba(255,107,53,0.36)] hover:brightness-105 active:scale-95 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg leading-none">casino</span>
            <span>오늘 뭐 먹지?</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-[#faebe6] text-[#211a17] hover:bg-[#f4e5e0] transition-colors"
            aria-label="메뉴 열기"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fff8f6] border-b border-[#eedfda] px-4 py-3 flex flex-col gap-1 shadow-lg animate-[fadeIn_0.15s_ease-out]">
          <button
            onClick={() => {
              onSelectTab('explore');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
              currentTab === 'explore'
                ? 'bg-[#ff6b35] text-white'
                : 'text-[#211a17] hover:bg-[#faebe6]'
            }`}
          >
            <span>맛집 탐방 (목록)</span>
            <span className="material-symbols-outlined text-base">restaurant</span>
          </button>
          <button
            onClick={() => {
              onSelectTab('random');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
              currentTab === 'random'
                ? 'bg-[#ff6b35] text-white'
                : 'text-[#211a17] hover:bg-[#faebe6]'
            }`}
          >
            <span>오늘 뭐 먹지? (랜덤 추천)</span>
            <span className="material-symbols-outlined text-base">casino</span>
          </button>
          <button
            onClick={() => {
              onSelectTab('neighborhoods');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
              currentTab === 'neighborhoods'
                ? 'bg-[#ff6b35] text-white'
                : 'text-[#211a17] hover:bg-[#faebe6]'
            }`}
          >
            <span>동네별 가이드</span>
            <span className="material-symbols-outlined text-base">map</span>
          </button>
          <button
            onClick={() => {
              onSelectTab('favorites');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
              currentTab === 'favorites'
                ? 'bg-[#ff6b35] text-white'
                : 'text-[#211a17] hover:bg-[#faebe6]'
            }`}
          >
            <span>즐겨찾기 ({favoritesCount})</span>
            <span className="material-symbols-outlined text-base">favorite</span>
          </button>
        </div>
      )}
    </header>
  );
};
