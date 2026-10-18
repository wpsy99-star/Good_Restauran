import React, { useState, useEffect, useMemo } from 'react';
import { Restaurant, TabType, SortOption } from './types';
import { RESTAURANTS_DATA } from './data/restaurants';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RandomBanner } from './components/RandomBanner';
import { FilterBar } from './components/FilterBar';
import { RestaurantCard } from './components/RestaurantCard';
import { RestaurantDetail } from './components/RestaurantDetail';
import { EmptyState } from './components/EmptyState';
import { RandomPickerModal } from './components/RandomPickerModal';
import { NeighborhoodGuides } from './components/NeighborhoodGuides';
import { FavoritesView } from './components/FavoritesView';
import { SuggestModal } from './components/SuggestModal';
import { PhotoGalleryModal } from './components/PhotoGalleryModal';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('explore');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedDong, setSelectedDong] = useState('ALL');
  const [currentSort, setCurrentSort] = useState<SortOption>('recommend');

  // Favorites state persisted in localStorage
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('jungnang_food_favorites');
      return saved ? JSON.parse(saved) : [2, 8]; // default includes popular spots
    } catch {
      return [2, 8];
    }
  });

  // Modals & Gallery
  const [isRouletteOpen, setIsRouletteOpen] = useState(false);
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [suggestKeyword, setSuggestKeyword] = useState('');
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  // Sync favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('jungnang_food_favorites', JSON.stringify(favoriteIds));
    } catch {
      // ignore local storage errors
    }
  }, [favoriteIds]);

  const toggleFavorite = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavoriteIds((prev) => {
      const exists = prev.includes(id);
      const target = RESTAURANTS_DATA.find((r) => r.id === id);
      if (exists) {
        showToast(`‘${target?.name || '맛집'}’ 즐겨찾기가 해제되었습니다.`);
        return prev.filter((item) => item !== id);
      } else {
        showToast(`‘${target?.name || '맛집'}’ 즐겨찾기에 저장되었습니다! ❤️`);
        return [...prev, id];
      }
    });
  };

  // Filtered & Sorted Restaurants
  const filteredRestaurants = useMemo(() => {
    return RESTAURANTS_DATA.filter((item) => {
      // Category match
      const catMatch = selectedCategory === 'ALL' || item.category === selectedCategory;
      // Dong match
      const dongMatch = selectedDong === 'ALL' || item.dong === selectedDong;
      // Search query match
      const q = searchQuery.toLowerCase().trim();
      const searchMatch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.signatureMenu.toLowerCase().includes(q) ||
        item.dong.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));

      return catMatch && dongMatch && searchMatch;
    }).sort((a, b) => {
      if (currentSort === 'rating') {
        return b.rating - a.rating;
      }
      if (currentSort === 'price') {
        return a.price - b.price;
      }
      if (currentSort === 'favorite') {
        const aFav = favoriteIds.includes(a.id) ? 1 : 0;
        const bFav = favoriteIds.includes(b.id) ? 1 : 0;
        return bFav - aFav;
      }
      return a.id - b.id; // default recommend/curated sequence
    });
  }, [searchQuery, selectedCategory, selectedDong, currentSort, favoriteIds]);

  const favoriteRestaurants = useMemo(() => {
    return RESTAURANTS_DATA.filter((r) => favoriteIds.includes(r.id));
  }, [favoriteIds]);

  const handleSelectTab = (tab: TabType) => {
    if (tab === 'random') {
      setIsRouletteOpen(true);
      return;
    }
    setCurrentTab(tab);
    setSelectedRestaurant(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDetail = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedRestaurant(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('ALL');
    setSelectedDong('ALL');
    setCurrentSort('recommend');
  };

  const handleApplyKeyword = (kw: string) => {
    setSearchQuery(kw);
    setSelectedCategory('ALL');
    setSelectedDong('ALL');
  };

  const handleOpenGallery = (images: string[], initialIndex: number) => {
    setGalleryImages(images);
    setGalleryInitialIndex(initialIndex);
    setIsGalleryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fff8f6] text-[#211a17] flex flex-col font-sans selection:bg-[#ffdbd0] selection:text-[#ab3500]">
      {/* Top Fixed Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        favoritesCount={favoriteIds.length}
        onOpenRandomRoulette={() => setIsRouletteOpen(true)}
      />

      {/* Main Container */}
      <main className="w-full pt-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Detail View */}
          {selectedRestaurant ? (
            <RestaurantDetail
              restaurant={selectedRestaurant}
              onBack={handleBackToList}
              onSelectRestaurant={handleOpenDetail}
              isFavorite={favoriteIds.includes(selectedRestaurant.id)}
              onToggleFavorite={(id) => toggleFavorite(id)}
              onShowToast={showToast}
              onOpenGallery={handleOpenGallery}
            />
          ) : currentTab === 'neighborhoods' ? (
            /* Neighborhood Guides View */
            <NeighborhoodGuides
              onSelectDong={(dong) => {
                setSelectedDong(dong);
                setCurrentTab('explore');
              }}
              onSelectRestaurant={handleOpenDetail}
            />
          ) : currentTab === 'favorites' ? (
            /* Favorites View */
            <FavoritesView
              favorites={favoriteRestaurants}
              onOpenDetail={handleOpenDetail}
              onToggleFavorite={toggleFavorite}
              onExplore={() => {
                setCurrentTab('explore');
                handleResetFilters();
              }}
            />
          ) : (
            /* Explore / Home View */
            <div className="w-full flex flex-col pb-12">
              {/* Hero Section */}
              <HeroSection
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onClearSearch={() => setSearchQuery('')}
                totalCount={RESTAURANTS_DATA.length}
              />

              {/* Random Pick Spotlight Banner */}
              <RandomBanner onOpenRoulette={() => setIsRouletteOpen(true)} />

              {/* Filter & Sort Control Strip */}
              <FilterBar
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                selectedDong={selectedDong}
                onSelectDong={setSelectedDong}
                currentSort={currentSort}
                onSelectSort={setCurrentSort}
                resultCount={filteredRestaurants.length}
              />

              {/* Restaurant Cards Grid or Empty State */}
              {filteredRestaurants.length === 0 ? (
                <EmptyState
                  searchQuery={searchQuery}
                  onApplyKeyword={handleApplyKeyword}
                  onResetSearch={handleResetFilters}
                  onOpenSuggestModal={(kw) => {
                    setSuggestKeyword(kw);
                    setIsSuggestModalOpen(true);
                  }}
                  onOpenDetail={handleOpenDetail}
                />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                  {filteredRestaurants.map((item) => (
                    <RestaurantCard
                      key={item.id}
                      restaurant={item}
                      onOpenDetail={handleOpenDetail}
                      isFavorite={favoriteIds.includes(item.id)}
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Floating Bottom Action Button ("오늘 뭐 먹지? 🎲") */}
      {!selectedRestaurant && (
        <div className="fixed bottom-6 right-6 z-30">
          <button
            onClick={() => setIsRouletteOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-[#ff6b35] to-[#ab3500] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-full shadow-[0_12px_32px_-4px_rgba(255,107,53,0.38),0_4px_12px_rgba(45,37,34,0.08)] hover:scale-105 active:scale-95 transition-all group cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-xl group-hover:rotate-45 transition-transform"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              casino
            </span>
            <span>오늘 뭐 먹지? 🎲</span>
          </button>
        </div>
      )}

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenSuggestModal={() => {
          setSuggestKeyword('');
          setIsSuggestModalOpen(true);
        }}
        onSelectDong={(dong) => {
          setSelectedDong(dong);
          setCurrentTab('explore');
        }}
        onShowToast={showToast}
      />

      {/* Random Picker Roulette Modal */}
      <RandomPickerModal
        isOpen={isRouletteOpen}
        onClose={() => setIsRouletteOpen(false)}
        candidateList={filteredRestaurants.length > 0 ? filteredRestaurants : RESTAURANTS_DATA}
        onSelectRestaurant={handleOpenDetail}
        onShowToast={showToast}
      />

      {/* Suggest Restaurant Modal */}
      <SuggestModal
        isOpen={isSuggestModalOpen}
        onClose={() => setIsSuggestModalOpen(false)}
        initialKeyword={suggestKeyword}
        onSuccess={(name) => {
          showToast(`‘${name}’ 맛집 제보가 접수되었습니다. 검토 후 등록할게요! 🙏`);
        }}
      />

      {/* Photo Gallery Modal */}
      <PhotoGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={galleryImages}
        initialIndex={galleryInitialIndex}
      />

      {/* Floating Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
