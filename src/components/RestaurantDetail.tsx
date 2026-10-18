import React, { useState } from 'react';
import { Restaurant, Review } from '../types';
import { RESTAURANTS_DATA } from '../data/restaurants';

interface RestaurantDetailProps {
  restaurant: Restaurant;
  onBack: () => void;
  onSelectRestaurant: (restaurant: Restaurant) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onShowToast: (msg: string) => void;
  onOpenGallery: (images: string[], initialIndex: number) => void;
}

export const RestaurantDetail: React.FC<RestaurantDetailProps> = ({
  restaurant,
  onBack,
  onSelectRestaurant,
  isFavorite,
  onToggleFavorite,
  onShowToast,
  onOpenGallery
}) => {
  const [reviews, setReviews] = useState<Review[]>(restaurant.reviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewDong, setNewReviewDong] = useState(restaurant.dong);
  const [newReviewContent, setNewReviewContent] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Other recommendations from nearby or same dong
  const nearbyRecommendations = RESTAURANTS_DATA.filter((r) => r.id !== restaurant.id).slice(0, 3);

  const allImages = restaurant.images.all || [
    restaurant.images.hero,
    restaurant.images.sub1,
    restaurant.images.sub2,
    restaurant.images.sub3
  ];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(restaurant.roadAddress || restaurant.address);
    onShowToast('도로명 주소가 클립보드에 복사되었습니다! 📋');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      onShowToast('식당 링크가 클립보드에 복사되었습니다! ✨');
    }
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewContent.trim()) {
      onShowToast('작성자와 리뷰 내용을 입력해주세요.');
      return;
    }

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: newReviewAuthor.trim(),
      userBadge: `${newReviewDong} 주민 (방금 작성)`,
      rating: newReviewRating,
      content: newReviewContent.trim(),
      date: '방금 전',
      orderInfo: '현장 방문 리뷰'
    };

    setReviews([newRev, ...reviews]);
    setNewReviewAuthor('');
    setNewReviewContent('');
    setShowReviewForm(false);
    onShowToast('소중한 동네 후기가 등록되었습니다! 감사합니다. ⭐');
  };

  return (
    <div className="w-full flex flex-col gap-6 pb-16">
      {/* Top Navigation & Breadcrumbs Bar */}
      <div className="w-full pt-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#594139] font-medium">
            <button
              onClick={onBack}
              className="flex items-center gap-1 hover:text-[#ab3500] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">home</span>
              <span>홈</span>
            </button>
            <span className="text-[#e1bfb5]">/</span>
            <button
              onClick={onBack}
              className="hover:text-[#ab3500] transition-colors cursor-pointer"
            >
              중랑구 맛집 탐방
            </button>
            <span className="text-[#e1bfb5]">/</span>
            <span className="text-[#ab3500] font-semibold">{restaurant.dong}</span>
            <span className="text-[#e1bfb5]">/</span>
            <span className="text-[#211a17] font-bold truncate max-w-[200px] sm:max-w-none">
              {restaurant.name}
            </span>
          </nav>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 bg-[#f4e5e0] hover:bg-[#eedfda] text-[#211a17] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-xs cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>목록으로 돌아가기</span>
          </button>
        </div>
      </div>

      {/* Hero Photo Mosaic Section */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 rounded-2xl overflow-hidden bg-[#faebe6] p-2 border border-[#eedfda]">
          {/* Main Highlight Image (7 cols) */}
          <div
            onClick={() => onOpenGallery(allImages, 0)}
            className="lg:col-span-7 relative min-h-[280px] sm:min-h-[400px] rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src={restaurant.images.hero}
              alt={restaurant.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
              <span className="bg-[#ff6b35] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">local_fire_department</span>
                대표 시그니처 35년 전통
              </span>
              <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
                매일 아침 신선한 재료 공수
              </span>
            </div>
          </div>

          {/* Secondary Image Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-2.5 h-full">
            <div
              onClick={() => onOpenGallery(allImages, 1)}
              className="relative h-[140px] lg:h-[125px] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={restaurant.images.sub1}
                alt={`${restaurant.name} 서브 1`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded backdrop-blur-xs">
                {restaurant.menuItems[1]?.name || '인기 메뉴'}
              </div>
            </div>

            <div
              onClick={() => onOpenGallery(allImages, 2)}
              className="relative h-[140px] lg:h-[125px] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={restaurant.images.sub2}
                alt={`${restaurant.name} 서브 2`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded backdrop-blur-xs">
                {restaurant.menuItems[2]?.name || '추천 사이드'}
              </div>
            </div>

            <div
              onClick={() => onOpenGallery(allImages, 0)}
              className="relative col-span-2 lg:col-span-1 h-[140px] lg:h-[125px] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={restaurant.images.sub3}
                alt={`${restaurant.name} 매장 풍경`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <span className="text-white text-sm font-bold flex items-center gap-1.5 drop-shadow-md">
                  <span className="material-symbols-outlined text-base">photo_library</span>
                  사진 전체보기 ({allImages.length})
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Title & Action Bar Banner */}
      <section className="w-full bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#eedfda] flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#ffdbd0]/80 text-[#ab3500] text-xs font-bold px-2.5 py-0.5 rounded-full">
              {restaurant.dong} · {restaurant.subArea || '로컬 맛집'}
            </span>
            <span className="bg-[#ffd167] text-[#765900] text-xs font-bold px-2.5 py-0.5 rounded-full">
              {restaurant.category}
            </span>
            <span className="bg-[#faebe6] text-[#594139] text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-[#eedfda]">
              <span className="material-symbols-outlined text-sm text-[#ab3500]">verified</span>
              중랑구 주민 검증 안심식당
            </span>
          </div>

          <div className="flex flex-wrap items-baseline gap-3 mt-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#211a17]">
              {restaurant.name}
            </h1>
            <div className="flex items-center gap-1 bg-[#faebe6] px-3 py-1 rounded-full border border-[#eedfda]">
              <span className="text-[#785a00] font-bold text-sm">★</span>
              <span className="text-sm font-extrabold text-[#211a17]">
                {restaurant.rating.toFixed(1)}
              </span>
              <span className="text-xs text-[#594139]">(주민 리뷰 {restaurant.reviewCount}건)</span>
            </div>
          </div>

          <p className="text-sm text-[#594139] mt-0.5 max-w-2xl leading-relaxed">
            {restaurant.desc}
          </p>
        </div>

        {/* Quick Action CTAs */}
        <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
          <a
            href={restaurant.naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#ff6b35] hover:bg-[#ff5a1f] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-base">explore</span>
            <span>네이버 지도로 보기 ↗</span>
          </a>

          <a
            href={restaurant.kakaoMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 bg-[#ffdf9b] text-[#251a00] text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full hover:brightness-95 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-base">pin_drop</span>
            <span>카카오맵</span>
          </a>

          <button
            onClick={() => onToggleFavorite(restaurant.id)}
            className={`inline-flex items-center justify-center gap-1 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full transition-all active:scale-95 cursor-pointer border ${
              isFavorite
                ? 'bg-[#ff6b35] text-white border-[#ff6b35] shadow-xs'
                : 'bg-[#faebe6] hover:bg-[#f4e5e0] text-[#211a17] border-[#eedfda]'
            }`}
          >
            <span
              className={`material-symbols-outlined text-base leading-none ${
                isFavorite ? 'text-white' : 'text-[#ab3500]'
              }`}
              style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
            <span>{isFavorite ? '저장됨' : '저장'}</span>
          </button>

          <button
            onClick={handleShare}
            className="p-2.5 bg-[#faebe6] hover:bg-[#f4e5e0] text-[#594139] hover:text-[#211a17] rounded-full transition-all border border-[#eedfda] cursor-pointer"
            title="공유하기"
          >
            <span className="material-symbols-outlined text-base">share</span>
          </button>
        </div>
      </section>

      {/* 2-Column Content Layout (70% Left Main, 30% Right Sticky Sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (8 cols on desktop) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* 1. Menu & Price Table */}
          <section className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#eedfda]">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#eedfda]/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-6 bg-[#ff6b35] rounded-full" />
                <h2 className="text-lg sm:text-xl font-bold text-[#211a17]">대표 메뉴 및 가격표</h2>
              </div>
              <span className="text-xs bg-[#faebe6] px-3 py-1 rounded-full text-[#594139] font-medium border border-[#eedfda]">
                가격 기준: 2025년 최신 등록
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {restaurant.menuItems.map((menu, idx) => (
                <div
                  key={idx}
                  className="bg-[#fff1ec]/60 rounded-xl p-4 flex gap-3.5 items-center hover:bg-[#faebe6] transition-colors border border-[#eedfda]/50"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-[#eedfda]">
                    <img
                      src={menu.image}
                      alt={menu.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80';
                      }}
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm sm:text-base text-[#211a17] truncate">
                          {menu.name}
                        </span>
                        <span className="font-extrabold text-sm text-[#ab3500] flex-shrink-0 tabular-nums">
                          {menu.priceFormatted}
                        </span>
                      </div>
                      <p className="text-xs text-[#594139] mt-0.5 line-clamp-1">{menu.desc}</p>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                      {menu.tag && (
                        <span className="text-[11px] font-bold bg-[#ffdbd0] text-[#832600] px-1.5 py-0.2 rounded">
                          {menu.tag}
                        </span>
                      )}
                      {menu.origin && (
                        <span className="text-[11px] text-[#8d7168]">{menu.origin}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Menu Notice */}
            <div className="mt-4 p-3 bg-[#faebe6] rounded-xl flex items-center justify-between text-[#594139] text-xs border border-[#eedfda]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-[#ab3500]">info</span>
                <span>포장 주문 가능 (국물 넉넉히 포장 요청 시 무료 제공)</span>
              </div>
              <span className="font-bold text-[#ab3500]">1인 식사 환영</span>
            </div>
          </section>

          {/* 2. Local Editor & Resident Secret Tip Banner */}
          <section className="bg-gradient-to-br from-[#fff1ec] via-[#faebe6] to-[#ffd167]/20 rounded-2xl p-5 sm:p-6 shadow-sm border border-[#eedfda] relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ff6b35] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="material-symbols-outlined text-2xl">tips_and_updates</span>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-base text-[#ab3500]">
                    중랑구 토박이 에디터의 솔직 꿀팁 💡
                  </span>
                  <span className="text-xs bg-[#f4e5e0] px-2.5 py-0.5 rounded-full text-[#594139] font-medium border border-[#eedfda]">
                    {restaurant.editorName} ({restaurant.editorTenure})
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#211a17] leading-relaxed font-medium">
                  “{restaurant.tip}”
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-[#594139]">
                  <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-xs border border-[#eedfda]">
                    <span className="material-symbols-outlined text-xs text-[#785a00]">
                      check_circle
                    </span>
                    단맛과 매운맛의 완벽한 밸런스
                  </span>
                  <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-xs border border-[#eedfda]">
                    <span className="material-symbols-outlined text-xs text-[#785a00]">
                      check_circle
                    </span>
                    1인 방문 시 대표 세트 추천
                  </span>
                  <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-xs border border-[#eedfda]">
                    <span className="material-symbols-outlined text-xs text-[#785a00]">
                      check_circle
                    </span>
                    서울페이(중랑사랑상품권) 결제 가능
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Location, Transit & Walking Guidance */}
          <section className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#eedfda]">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#eedfda]/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-6 bg-[#ff6b35] rounded-full" />
                <h2 className="text-lg sm:text-xl font-bold text-[#211a17]">위치 및 찾아오시는 길</h2>
              </div>
              <span className="text-xs font-bold text-[#ab3500] bg-[#ffdbd0]/60 px-2.5 py-1 rounded-full">
                {restaurant.subwayWalkTime}
              </span>
            </div>

            {/* Simulated Map Visual Card */}
            <div
              className="w-full h-64 sm:h-72 rounded-xl bg-cover bg-center relative overflow-hidden shadow-inner flex items-end p-4 border border-[#eedfda]"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCLK-DuVw2fOkG_cooVjaBLyWzFWlpb1GYrc18T4XM1k-nawCiCoHLPy5dh_PXNUDdqVJ_UYfq0-Tou5KXJ8mXtGVlrTnDum2dhC4epHuKOsxpF8NvbeWYVmoAVfHjtGmaIv6XHockQ3l1ffeO-mTa7OUAUrjYKc5xWTAP73YJ3tLaqASLs8IZHk3dcc-fLP6lSFPqs7aNAleaAJ0P5LvVRMlHFI1eMXlpCYo6hC6QaIdmf3f44VD6')`
              }}
            >
              <div className="bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-md flex items-center gap-3 max-w-md border border-[#eedfda]">
                <span className="material-symbols-outlined text-[#ab3500] text-2xl flex-shrink-0">
                  location_on
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-sm text-[#211a17] truncate">{restaurant.name}</span>
                  <span className="text-xs text-[#594139] truncate">{restaurant.address}</span>
                </div>
              </div>
            </div>

            {/* Detailed Directions Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-1">
              <div className="bg-[#fff1ec]/70 rounded-xl p-4 flex flex-col gap-1 border border-[#eedfda]/60">
                <div className="flex items-center gap-1.5 text-[#ab3500] font-bold text-xs sm:text-sm">
                  <span className="material-symbols-outlined text-base">directions_subway</span>
                  <span>지하철 안내</span>
                </div>
                <p className="text-xs text-[#211a17] leading-relaxed font-medium">
                  {restaurant.subwayGuide}
                </p>
                {restaurant.secondarySubway && (
                  <p className="text-xs text-[#8d7168] mt-1">{restaurant.secondarySubway}</p>
                )}
              </div>

              <div className="bg-[#fff1ec]/70 rounded-xl p-4 flex flex-col gap-1 border border-[#eedfda]/60">
                <div className="flex items-center gap-1.5 text-[#785a00] font-bold text-xs sm:text-sm">
                  <span className="material-symbols-outlined text-base">local_parking</span>
                  <span>주차 안내</span>
                </div>
                <p className="text-xs text-[#211a17] leading-relaxed font-medium">
                  {restaurant.parking}
                </p>
              </div>

              <div className="bg-[#fff1ec]/70 rounded-xl p-4 flex flex-col justify-between gap-2.5 border border-[#eedfda]/60">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-[#211a17]">상세 도로명 주소</span>
                  <span className="text-xs text-[#594139] select-all font-medium">
                    {restaurant.roadAddress}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="w-full inline-flex items-center justify-center gap-1 bg-[#faebe6] hover:bg-[#f4e5e0] text-[#211a17] px-3 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 border border-[#eedfda] cursor-pointer shadow-xs"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  <span>주소 복사하기</span>
                </button>
              </div>
            </div>
          </section>

          {/* 4. Resident Reviews & Real Highlights */}
          <section className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#eedfda] flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#eedfda]/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-6 bg-[#ff6b35] rounded-full" />
                <h2 className="text-lg sm:text-xl font-bold text-[#211a17]">
                  방문자 솔직 후기 하이라이트
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#785a00] bg-[#ffd167]/40 px-2.5 py-1 rounded-full">
                  로컬 인증 방문자 만족도 98%
                </span>
                <button
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="text-xs font-bold bg-[#ff6b35] text-white px-3 py-1 rounded-full hover:bg-[#ff5a1f] transition-colors cursor-pointer"
                >
                  {showReviewForm ? '작성 닫기' : '+ 리뷰 작성'}
                </button>
              </div>
            </div>

            {/* Keyword Filter Badges */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                '#가성비최고 (384)',
                '#국물떡볶이성지 (291)',
                '#옛날추억의맛 (245)',
                '#야끼만두필수 (210)',
                '#사장님이친절해요 (188)'
              ].map((tag) => {
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(isSelected ? null : tag)}
                    className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#ab3500] text-white shadow-xs'
                        : 'bg-[#faebe6] text-[#594139] hover:bg-[#f4e5e0] border border-[#eedfda]'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            {/* Write Review Form */}
            {showReviewForm && (
              <form
                onSubmit={handleAddReview}
                className="bg-[#fff1ec] p-4 rounded-xl border border-[#eedfda] flex flex-col gap-3 animate-[fadeIn_0.2s_ease-out]"
              >
                <div className="font-bold text-sm text-[#211a17]">새로운 로컬 리뷰 남기기</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="작성자 닉네임"
                    value={newReviewAuthor}
                    onChange={(e) => setNewReviewAuthor(e.target.value)}
                    className="p-2 text-xs bg-white rounded-lg border border-[#eedfda] focus:outline-none focus:ring-1 focus:ring-[#ff6b35]"
                    required
                  />
                  <select
                    value={newReviewDong}
                    onChange={(e) => setNewReviewDong(e.target.value as any)}
                    className="p-2 text-xs bg-white rounded-lg border border-[#eedfda] focus:outline-none focus:ring-1 focus:ring-[#ff6b35]"
                  >
                    <option value="면목동">면목동 거주</option>
                    <option value="상봉동">상봉동 거주</option>
                    <option value="망우동">망우동 거주</option>
                    <option value="묵동">묵동 거주</option>
                    <option value="중화동">중화동 거주</option>
                    <option value="신내동">신내동 거주</option>
                    <option value="타지역">타지역 방문객</option>
                  </select>
                  <div className="flex items-center gap-1 bg-white px-2 py-1.5 rounded-lg border border-[#eedfda]">
                    <span className="text-xs text-[#594139] mr-1">별점:</span>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReviewRating(star)}
                        className={`text-sm ${
                          star <= newReviewRating ? 'text-[#ff6b35]' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  rows={3}
                  placeholder="식당 분위기, 맛, 추천 팁 등을 솔직하게 남겨주세요."
                  value={newReviewContent}
                  onChange={(e) => setNewReviewContent(e.target.value)}
                  className="w-full p-2.5 text-xs bg-white rounded-lg border border-[#eedfda] focus:outline-none focus:ring-1 focus:ring-[#ff6b35]"
                  required
                />

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="px-3 py-1.5 rounded-lg bg-gray-200 text-xs font-semibold text-gray-700"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-[#ff6b35] text-white text-xs font-bold hover:brightness-105"
                  >
                    후기 등록
                  </button>
                </div>
              </form>
            )}

            {/* Reviews List */}
            <div className="grid grid-cols-1 gap-3.5 mt-1">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-[#fff1ec]/50 rounded-xl p-4 flex flex-col gap-1.5 border border-[#eedfda]/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#ffdbd0] text-[#832600] flex items-center justify-center font-bold text-xs">
                        {rev.author.slice(0, 2)}
                      </div>
                      <div>
                        <span className="font-bold text-sm text-[#211a17]">{rev.author}</span>
                        <span className="text-xs text-[#8d7168] ml-1.5">· {rev.userBadge}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-[#785a00] text-xs font-bold">
                      <span>★</span>
                      <span className="ml-1 text-[#211a17]">{rev.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#211a17] mt-1 leading-relaxed">
                    {rev.content}
                  </p>
                  <span className="text-[11px] text-[#8d7168] mt-0.5">
                    {rev.date} · {rev.orderInfo}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Side Panel (30% Sticky Column - 4 cols on desktop) */}
        <aside className="lg:col-span-4 flex flex-col gap-5 lg:sticky lg:top-20">
          {/* Sticky Card 1: Operating Hours & Status */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#eedfda] flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#eedfda]/50">
              <span className="font-bold text-base text-[#211a17]">영업 운영 정보</span>
              <span className="inline-flex items-center gap-1.5 bg-[#ffdbd0]/60 text-[#ab3500] text-xs px-2.5 py-1 rounded-full font-bold">
                <span className="w-2 h-2 rounded-full bg-[#ab3500] animate-pulse" />
                지금 영업 중
              </span>
            </div>

            <div className="flex flex-col gap-2.5 text-xs">
              <div className="flex items-start justify-between py-1 border-b border-[#eedfda]/30">
                <span className="text-[#594139] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-[#ab3500]">
                    schedule
                  </span>
                  오늘 영업시간
                </span>
                <span className="font-bold text-[#211a17] tabular-nums">
                  {restaurant.todayHours}
                </span>
              </div>

              {restaurant.breakTime && (
                <div className="flex items-start justify-between py-1 border-b border-[#eedfda]/30">
                  <span className="text-[#594139] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-[#8d7168]">
                      bedtime
                    </span>
                    브레이크타임
                  </span>
                  <span className="text-[#211a17] font-medium">{restaurant.breakTime}</span>
                </div>
              )}

              <div className="flex items-start justify-between py-1 border-b border-[#eedfda]/30">
                <span className="text-[#594139] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-[#ba1a1a]">
                    event_busy
                  </span>
                  정기 휴무
                </span>
                <span className="font-bold text-[#ba1a1a]">{restaurant.holiday}</span>
              </div>

              <div className="flex items-start justify-between py-1">
                <span className="text-[#594139] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-[#8d7168]">call</span>
                  매장 문의 전화
                </span>
                <a
                  href={`tel:${restaurant.phone}`}
                  className="font-bold text-[#ab3500] hover:underline"
                >
                  {restaurant.phone}
                </a>
              </div>
            </div>

            {/* Quick Notice Box */}
            <div className="bg-[#faebe6] p-3 rounded-xl flex items-center gap-2 text-[#211a17] text-xs border border-[#eedfda]">
              <span className="material-symbols-outlined text-base text-[#785a00]">info</span>
              <span>재료 조기 소진 시 마감될 수 있습니다.</span>
            </div>
          </div>

          {/* Sticky Card 2: Neighborhood Recommendations */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#eedfda] flex flex-col gap-3.5">
            <div className="flex items-center justify-between pb-1 border-b border-[#eedfda]/50">
              <span className="font-bold text-sm text-[#211a17]">이 동네 다른 추천 맛집 🍜</span>
              <button
                onClick={onBack}
                className="text-xs text-[#ab3500] font-semibold hover:underline cursor-pointer"
              >
                더보기
              </button>
            </div>

            <div className="flex flex-col gap-2.5">
              {nearbyRecommendations.map((mini) => (
                <div
                  key={mini.id}
                  onClick={() => onSelectRestaurant(mini)}
                  className="group bg-[#fff1ec]/60 hover:bg-[#faebe6] p-2.5 rounded-xl flex items-center gap-3 transition-all cursor-pointer border border-[#eedfda]/50"
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-[#faebe6]">
                    <img
                      src={mini.images.hero}
                      alt={mini.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm text-[#211a17] truncate group-hover:text-[#ab3500] transition-colors">
                        {mini.name}
                      </span>
                      <span className="text-xs text-[#785a00] font-bold flex-shrink-0">
                        ★ {mini.rating.toFixed(1)}
                      </span>
                    </div>
                    <span className="text-xs text-[#594139] truncate">
                      {mini.dong} · {mini.signatureMenu}
                    </span>
                    <span className="text-[11px] text-[#8d7168] mt-0.5">{mini.subwayWalkTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
