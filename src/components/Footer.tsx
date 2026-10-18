import React from 'react';
import { TabType } from '../types';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
  onOpenSuggestModal: () => void;
  onSelectDong: (dong: string) => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenSuggestModal,
  onSelectDong,
  onShowToast
}) => {
  return (
    <footer className="w-full bg-[#faebe6] mt-16 border-t border-[#eedfda]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base sm:text-lg text-[#ab3500]">
                중랑구 맛집 탐방
              </span>
              <span className="text-xs bg-[#f4e5e0] text-[#594139] px-2.5 py-0.5 rounded-full font-medium border border-[#eedfda]">
                로컬 큐레이션
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#594139] mt-1 leading-relaxed max-w-lg">
              망우동 떡볶이 골목부터 상봉역 먹자골목, 면목동 노포와 묵동 브런치 카페까지.
              중랑구민과 방문객을 위해 정성스레 수집한 동네 미식 안내서입니다.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="text-xs font-bold text-[#211a17] uppercase tracking-wider">
              탐방 둘러보기
            </span>
            <div className="flex flex-col gap-1.5 text-xs sm:text-sm text-[#594139]">
              <button
                onClick={() => {
                  onSelectDong('면목동');
                  onSelectTab('explore');
                }}
                className="hover:text-[#ab3500] transition-colors text-left cursor-pointer"
              >
                면목동 · 상봉동 맛집
              </button>
              <button
                onClick={() => {
                  onSelectDong('중화동');
                  onSelectTab('explore');
                }}
                className="hover:text-[#ab3500] transition-colors text-left cursor-pointer"
              >
                중화동 · 묵동 카페 & 맛집
              </button>
              <button
                onClick={() => onSelectTab('neighborhoods')}
                className="hover:text-[#ab3500] transition-colors text-left cursor-pointer"
              >
                망우동 떡볶이 골목 지도
              </button>
            </div>
          </div>

          {/* Inquiries */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="text-xs font-bold text-[#211a17] uppercase tracking-wider">
              문의 및 제안
            </span>
            <div className="flex flex-col gap-1.5 text-xs sm:text-sm text-[#594139]">
              <button
                onClick={onOpenSuggestModal}
                className="hover:text-[#ab3500] transition-colors text-left cursor-pointer"
              >
                신규 맛집 제보하기
              </button>
              <button
                onClick={() => onShowToast('오류 수정 요청이 접수되었습니다! 검토 후 반영하겠습니다.')}
                className="hover:text-[#ab3500] transition-colors text-left cursor-pointer"
              >
                오류 정보 수정 요청
              </button>
              <span className="text-xs text-[#8d7168]">운영시간 09:00 - 18:00</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#eedfda] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#594139]">
          <p>중랑구 맛집 탐방 · 주민과 방문객을 위한 오픈 큐레이션</p>
          <p className="text-[#8d7168] text-[11px]">
            등록된 매장 정보는 공공데이터 및 방문 검증 기준 샘플 데이터입니다.
          </p>
        </div>
      </div>
    </footer>
  );
};
