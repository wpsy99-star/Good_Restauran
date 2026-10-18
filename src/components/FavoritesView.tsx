import React from 'react';
import { Restaurant } from '../types';
import { RestaurantCard } from './RestaurantCard';

interface FavoritesViewProps {
  favorites: Restaurant[];
  onOpenDetail: (restaurant: Restaurant) => void;
  onToggleFavorite: (id: number, e: React.MouseEvent) => void;
  onExplore: () => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  favorites,
  onOpenDetail,
  onToggleFavorite,
  onExplore
}) => {
  return (
    <div className="w-full flex flex-col gap-6 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-5 sm:p-6 rounded-2xl border border-[#eedfda] shadow-xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-[#ff6b35] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              favorite
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#211a17]">
              내가 찜한 중랑구 맛집
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#594139]">
            마음에 드는 맛집을 하트 아이콘으로 저장하고 언제든 꺼내보세요.
          </p>
        </div>

        <div className="text-xs sm:text-sm font-bold text-[#ab3500] bg-[#ffdbd0]/60 px-3.5 py-1.5 rounded-full self-start sm:self-auto">
          총 {favorites.length}곳 저장됨
        </div>
      </div>

      {favorites.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 sm:p-14 text-center flex flex-col items-center border border-[#eedfda] shadow-xs">
          <div className="w-16 h-16 rounded-full bg-[#faebe6] flex items-center justify-center text-3xl mb-3 text-[#ab3500]">
            🤍
          </div>
          <h3 className="text-lg font-bold text-[#211a17]">아직 저장된 맛집이 없습니다</h3>
          <p className="text-xs sm:text-sm text-[#594139] mt-1 max-w-sm">
            중랑구의 골목 맛집을 둘러보고 하트(저장) 버튼을 눌러 나만의 맛집 리스트를 만들어보세요!
          </p>
          <button
            onClick={onExplore}
            className="mt-6 px-6 py-2.5 rounded-full bg-[#ff6b35] text-white text-xs sm:text-sm font-bold shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
          >
            맛집 탐방하러 가기
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {favorites.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onOpenDetail={onOpenDetail}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};
