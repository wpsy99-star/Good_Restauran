import React, { useState, useEffect } from 'react';
import { Restaurant } from '../types';

interface RandomPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateList: Restaurant[];
  onSelectRestaurant: (restaurant: Restaurant) => void;
  onShowToast: (msg: string) => void;
}

export const RandomPickerModal: React.FC<RandomPickerModalProps> = ({
  isOpen,
  onClose,
  candidateList,
  onSelectRestaurant,
  onShowToast
}) => {
  const [selected, setSelected] = useState<Restaurant | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [rollCount, setRollCount] = useState(0);

  const startRolling = () => {
    if (!candidateList || candidateList.length === 0) return;
    setIsRolling(true);

    let count = 0;
    const maxTicks = 12;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * candidateList.length);
      setSelected(candidateList[randomIndex]);
      count++;

      if (count >= maxTicks) {
        clearInterval(interval);
        const finalIndex = Math.floor(Math.random() * candidateList.length);
        setSelected(candidateList[finalIndex]);
        setIsRolling(false);
        setRollCount((prev) => prev + 1);
      }
    }, 60);
  };

  useEffect(() => {
    if (isOpen) {
      startRolling();
    }
  }, [isOpen]);

  if (!isOpen || !selected) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    onShowToast(`‘${selected.name}’ 추천 링크가 복사되었습니다! ✨`);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#372f2b]/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-[fadeIn_0.2s_ease-out]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-[0_24px_48px_-8px_rgba(45,37,34,0.35)] overflow-hidden my-auto transform transition-all duration-300 scale-100 flex flex-col border border-[#eedfda]"
      >
        {/* Top Decorative Confetti Accent Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#ff6b35] via-[#ffd167] to-[#ab3500]" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 pb-0 flex flex-col gap-1.5 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#faebe6] hover:bg-[#f4e5e0] text-[#594139] hover:text-[#211a17] flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
            aria-label="닫기"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdbd0] text-[#832600] text-xs font-bold shadow-xs">
              <span className="material-symbols-outlined text-base text-[#ab3500]">casino</span>
              <span>오늘의 중랑구 운명 맛집! ✨</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ffd167] text-[#765900] text-xs font-bold">
              <span className="material-symbols-outlined text-xs">verified</span>
              <span>{selected.badges[0] || '로컬 검증'}</span>
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl font-extrabold text-[#211a17] tracking-tight mt-1 transition-opacity duration-150 ${
              isRolling ? 'opacity-40 scale-98' : 'opacity-100 scale-100'
            }`}
          >
            {selected.name}
          </h2>

          <p className="text-xs sm:text-sm text-[#594139] pr-8 leading-relaxed">
            결정장애 즉시 해결! 중랑구 주민 설문과 단골 리뷰로 엄선된 오늘의 추천 매장입니다.
          </p>
        </div>

        {/* Modal Body: Recommended Restaurant Showcase Card */}
        <div className="p-5 sm:p-6 flex flex-col gap-4">
          {/* Hero Visual Showcase */}
          <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/10] bg-[#faebe6] shadow-inner border border-[#eedfda] group">
            <img
              src={selected.images.hero}
              alt={selected.name}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-all duration-300 ${
                isRolling ? 'blur-[1px] scale-102' : 'scale-100 group-hover:scale-105'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 flex-wrap text-white">
              <div className="flex items-center gap-1.5">
                <span className="bg-white/95 backdrop-blur-sm text-[#211a17] text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                  📍 {selected.dong} · {selected.subArea || '로컬'}
                </span>
                <span className="bg-[#ff6b35] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {selected.category}
                </span>
              </div>
              <div className="flex items-center gap-1 bg-[#ab3500] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                <span>★</span>
                <span>{selected.rating.toFixed(1)}</span>
                <span className="opacity-80 text-[10px]">({selected.reviewCount})</span>
              </div>
            </div>
          </div>

          {/* Curated Editor's Note Quote Box */}
          <div className="relative bg-[#fff1ec] rounded-2xl p-4 flex gap-3 items-start border border-[#eedfda]">
            <span className="material-symbols-outlined text-[#ff6b35] text-2xl flex-shrink-0 mt-0.5">
              format_quote
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-xs sm:text-sm text-[#211a17] font-medium leading-relaxed">
                “{selected.desc}”
              </p>
              <span className="text-[11px] text-[#8d7168]">
                중랑 로컬 미식 큐레이터 {selected.editorName} 님의 코멘트
              </span>
            </div>
          </div>

          {/* Essential Quick Details Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="bg-[#faebe6] rounded-xl p-2.5 flex items-center gap-2 border border-[#eedfda]/60">
              <div className="w-8 h-8 rounded-full bg-[#ffdbd0] text-[#ab3500] flex items-center justify-center flex-shrink-0 font-bold">
                <span className="material-symbols-outlined text-base">restaurant_menu</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] text-[#8d7168] truncate">대표 메뉴</span>
                <span className="text-xs font-bold text-[#211a17] truncate">
                  {selected.signatureMenu}
                </span>
              </div>
            </div>

            <div className="bg-[#faebe6] rounded-xl p-2.5 flex items-center gap-2 border border-[#eedfda]/60">
              <div className="w-8 h-8 rounded-full bg-[#ffd167]/40 text-[#765900] flex items-center justify-center flex-shrink-0 font-bold">
                <span className="material-symbols-outlined text-base">directions_walk</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] text-[#8d7168] truncate">도보 거리</span>
                <span className="text-xs font-bold text-[#211a17] truncate">
                  {selected.subwayWalkTime}
                </span>
              </div>
            </div>

            <div className="bg-[#faebe6] rounded-xl p-2.5 flex items-center gap-2 border border-[#eedfda]/60">
              <div className="w-8 h-8 rounded-full bg-[#ffdbd0] text-[#ab3500] flex items-center justify-center flex-shrink-0 font-bold">
                <span className="material-symbols-outlined text-base">schedule</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] text-[#8d7168] truncate">영업 상태</span>
                <span className="text-xs font-bold text-[#211a17] truncate">
                  영업중 · {selected.todayHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA Actions */}
        <div className="p-5 sm:p-6 pt-0 flex flex-col gap-2.5">
          <button
            onClick={() => {
              onClose();
              onSelectRestaurant(selected);
            }}
            className="w-full bg-[#ff6b35] hover:bg-[#ff5a1f] text-white text-sm font-bold py-3.5 rounded-xl flex items-center justify-center gap-1.5 shadow-[0_4px_20px_-2px_rgba(255,107,53,0.45)] hover:shadow-[0_6px_24px_-2px_rgba(255,107,53,0.55)] active:scale-[0.99] transition-all cursor-pointer"
          >
            <span>상세 정보 & 네이버 길찾기</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={startRolling}
              disabled={isRolling}
              className="bg-[#faebe6] hover:bg-[#f4e5e0] text-[#211a17] text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors active:scale-95 border border-[#eedfda] cursor-pointer"
            >
              <span
                className={`material-symbols-outlined text-lg transition-transform ${
                  isRolling ? 'animate-spin' : ''
                }`}
              >
                autorenew
              </span>
              <span>다시 뽑기 (다른 맛집)</span>
            </button>

            <button
              onClick={handleShare}
              className="bg-[#faebe6] hover:bg-[#f4e5e0] text-[#211a17] text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors active:scale-95 border border-[#eedfda] cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">share</span>
              <span>친구에게 공유하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
