import React from 'react';

interface RandomBannerProps {
  onOpenRoulette: () => void;
}

export const RandomBanner: React.FC<RandomBannerProps> = ({ onOpenRoulette }) => {
  return (
    <div className="w-full mt-4 p-4 sm:p-5 bg-gradient-to-r from-[#ff6b35] via-[#FF854D] to-[#ffd167] rounded-2xl shadow-[0_8px_24px_-4px_rgba(255,107,53,0.32)] flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
      <div className="flex items-center gap-3.5 text-left">
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl flex-shrink-0 backdrop-blur-md shadow-xs">
          🎲
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
            결정장애 해결! 오늘 어디서 먹을까?
          </h2>
          <p className="text-xs sm:text-sm text-white/90">
            현재 선택된 필터 조건에 맞는 최고의 맛집을 랜덤으로 즉시 추천해 드려요.
          </p>
        </div>
      </div>
      <button
        onClick={onOpenRoulette}
        className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#ff6b35] text-sm font-bold shadow-md hover:bg-[#fff1ec] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
      >
        <span className="material-symbols-outlined text-xl">casino</span>
        <span>지금 바로 랜덤 뽑기!</span>
      </button>
    </div>
  );
};
