import React, { useState } from 'react';

interface SuggestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialKeyword?: string;
  onSuccess: (name: string) => void;
}

export const SuggestModal: React.FC<SuggestModalProps> = ({
  isOpen,
  onClose,
  initialKeyword = '',
  onSuccess
}) => {
  const [name, setName] = useState(initialKeyword);
  const [dong, setDong] = useState('면목동');
  const [category, setCategory] = useState('한식');
  const [menu, setMenu] = useState('');
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onSuccess(name);
    setName('');
    setMenu('');
    setReason('');
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#372f2b]/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-[fadeIn_0.2s_ease-out]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden p-6 sm:p-7 flex flex-col gap-4 border border-[#eedfda]"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#faebe6] hover:bg-[#f4e5e0] text-[#594139] flex items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#ffdbd0] text-[#ab3500] flex items-center justify-center text-xl font-bold">
            🍽️
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#211a17]">
              중랑구 찐맛집 제보하기
            </h3>
            <p className="text-xs text-[#594139]">
              나만 알기 아까운 중랑구의 숨겨진 보물 맛집을 알려주세요!
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 mt-2">
          <div>
            <label className="block text-xs font-bold text-[#211a17] mb-1">
              식당 이름 <span className="text-[#ab3500]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="예: 망우동 골목 국수가게"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#fff8f6] border border-[#eedfda] focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#211a17] mb-1">동네 위치</label>
              <select
                value={dong}
                onChange={(e) => setDong(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl bg-[#fff8f6] border border-[#eedfda] focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
              >
                <option value="면목동">면목동</option>
                <option value="상봉동">상봉동</option>
                <option value="망우동">망우동</option>
                <option value="중화동">중화동</option>
                <option value="묵동">묵동</option>
                <option value="신내동">신내동</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#211a17] mb-1">음식 종류</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl bg-[#fff8f6] border border-[#eedfda] focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
              >
                <option value="한식">한식</option>
                <option value="분식/카페">분식/카페</option>
                <option value="중식">중식</option>
                <option value="일식">일식</option>
                <option value="양식">양식</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#211a17] mb-1">대표 추천 메뉴</label>
            <input
              type="text"
              placeholder="예: 얼큰 잔치국수와 김치전"
              value={menu}
              onChange={(e) => setMenu(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#fff8f6] border border-[#eedfda] focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#211a17] mb-1">
              추천 이유 및 단골 팁
            </label>
            <textarea
              rows={3}
              placeholder="왜 이 집이 맛있는지, 주민만 아는 팁이 있다면 적어주세요."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#fff8f6] border border-[#eedfda] focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-full bg-[#faebe6] text-[#211a17] text-xs font-semibold hover:bg-[#f4e5e0] cursor-pointer"
            >
              닫기
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#ff6b35] text-white text-xs sm:text-sm font-bold shadow-md hover:brightness-105 active:scale-95 cursor-pointer"
            >
              제보하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
