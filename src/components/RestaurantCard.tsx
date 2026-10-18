import React from 'react';
import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onOpenDetail: (restaurant: Restaurant) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: number, e: React.MouseEvent) => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onOpenDetail,
  isFavorite,
  onToggleFavorite
}) => {
  return (
    <article
      onClick={() => onOpenDetail(restaurant)}
      className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_-2px_rgba(90,77,74,0.06),0_4px_16px_-4px_rgba(255,107,53,0.04)] hover:shadow-[0_12px_28px_-4px_rgba(90,77,74,0.12),0_4px_12px_rgba(255,107,53,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer border border-[#eedfda]/60"
    >
      <div>
        {/* Thumbnail Image Area */}
        <div className="relative w-full h-48 bg-[#faebe6] overflow-hidden">
          <img
            src={restaurant.images.hero}
            alt={restaurant.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={(e) => {
              // fallback image if remote url fails
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80';
            }}
          />

          {/* Category & Dong Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="bg-white/95 backdrop-blur-md text-[#211a17] text-xs font-bold px-2.5 py-1 rounded-full shadow-xs border border-[#eedfda]">
              {restaurant.dong}
            </span>
            <span className="bg-[#ff6b35] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
              {restaurant.category}
            </span>
          </div>

          {/* Star Rating Badge & Heart Button */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <button
              type="button"
              onClick={(e) => onToggleFavorite(restaurant.id, e)}
              className={`w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-xs cursor-pointer ${
                isFavorite
                  ? 'bg-[#ff6b35] text-white scale-110'
                  : 'bg-white/90 text-[#8d7168] hover:text-[#ab3500]'
              }`}
              title={isFavorite ? '즐겨찾기 해제' : '즐겨찾기 추가'}
            >
              <span
                className="material-symbols-outlined text-base leading-none"
                style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}
              >
                favorite
              </span>
            </button>

            <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1 text-[#211a17] text-xs border border-[#eedfda]">
              <span className="text-[#785a00] font-bold">★</span>
              <span className="font-extrabold tabular-nums">{restaurant.rating.toFixed(1)}</span>
              <span className="text-[#8d7168] text-[10px] tabular-nums">
                ({restaurant.reviewCount})
              </span>
            </div>
          </div>

          {/* Floating Emoji Icon */}
          <div className="absolute bottom-2 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center text-lg border border-[#eedfda]">
            {restaurant.emoji}
          </div>
        </div>

        {/* Body Card Content */}
        <div className="p-4 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-[#211a17] group-hover:text-[#ab3500] transition-colors truncate">
              {restaurant.name}
            </h3>
          </div>

          {/* Signature Menu */}
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-xs font-bold text-[#ab3500] bg-[#ffdbd0]/60 px-1.5 py-0.2 rounded">
              대표
            </span>
            <span className="text-xs sm:text-sm text-[#211a17] font-medium truncate">
              {restaurant.signatureMenu}
            </span>
          </div>

          {/* Hash Tags */}
          <div className="flex items-center gap-1 flex-wrap mt-1">
            {restaurant.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-[#594139] bg-[#faebe6] px-2 py-0.5 rounded-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Strip */}
      <div className="px-4 pb-4 pt-1 flex items-center justify-between mt-auto border-t border-[#eedfda]/40">
        <div className="flex flex-col">
          <span className="text-[11px] text-[#8d7168]">평균 1인 기준</span>
          <span className="text-sm font-extrabold text-[#ff6b35] tabular-nums">
            {restaurant.priceLabel}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetail(restaurant);
          }}
          className="px-3.5 py-1.5 rounded-full bg-[#faebe6] text-[#211a17] group-hover:bg-[#ff6b35] group-hover:text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-xs"
        >
          <span>상세 & 지도</span>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>
    </article>
  );
};
