import React, { useState, useRef, useEffect } from 'react';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
  totalCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  onClearSearch,
  totalCount
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState<string>('./taereung_drone.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const posterImage = '/src/assets/images/taereung_royal_tomb_drone_1792308027780.jpg';

  // Toggle video play / pause safely
  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error: Error) => {
            if (error.name !== 'AbortError') {
              console.warn('Playback error:', error);
            }
          });
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Toggle audio mute / unmute
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Optional custom video file replacement
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setIsPlaying(true);
    }
  };

  // Attempt initial autoplay safely on mount or when source changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error: Error) => {
          if (error.name !== 'AbortError') {
            console.warn('Initial autoplay error:', error);
          }
          setIsPlaying(false);
        });
    }
  }, [videoSrc]);

  return (
    <section className="relative w-full rounded-2xl bg-gradient-to-br from-[#FFF5EC] via-[#FFF9F3] to-[#FEEDE2] p-5 sm:p-7 lg:p-8 shadow-[0_4px_24px_-6px_rgba(255,107,53,0.12)] overflow-hidden border border-[#ffdbd0]/60">
      {/* Decorative Warm Radial Accents */}
      <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#ff6b35]/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-[#ffd167]/20 blur-2xl pointer-events-none" />

      {/* 2-Column Responsive Grid: Left Half = Hero Content, Right Half = Video Showcase */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column (Left Half: 6 cols on desktop) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Catchphrase Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white shadow-xs text-[#ab3500] text-xs sm:text-sm font-semibold border border-[#ffdbd0]">
            <span className="text-base">🍜</span>
            <span>중랑구민 & 로컬 미식가 실시간 추천</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#211a17] mt-3 mb-2 tracking-tight leading-tight">
            중랑구에서{' '}
            <span className="text-[#ff6b35] underline decoration-[#ffd167] decoration-wavy decoration-2">
              맛집을 추천합니다
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-[#594139] leading-relaxed max-w-xl">
            상봉동부터 면목동, 망우동까지! 골목 구석구석 숨어있는 찐로컬 맛집 10곳을 발견하고,
            결정이 어려울 땐 오늘의 추천 룰렛을 돌려보세요.
          </p>

          {/* Live Search Bar */}
          <div className="w-full mt-5 relative flex items-center">
            <div className="absolute left-4 flex items-center pointer-events-none text-[#ab3500]">
              <span className="material-symbols-outlined text-2xl">search</span>
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="식당명, 대표메뉴 (예: 닭한마리, 떡볶이, 파스타) 검색..."
              className="w-full pl-11 pr-20 py-3 rounded-full bg-white text-[#211a17] text-xs sm:text-sm placeholder-[#8d7168] shadow-[0_4px_18px_-2px_rgba(90,77,74,0.08)] border border-[#eedfda] focus:outline-none focus:ring-2 focus:ring-[#ff6b35] transition-all"
            />

            {searchQuery && (
              <button
                onClick={onClearSearch}
                className="absolute right-12 flex items-center justify-center text-[#8d7168] hover:text-[#211a17] p-1 transition-colors cursor-pointer"
                title="검색어 지우기"
              >
                <span className="material-symbols-outlined text-xl">cancel</span>
              </button>
            )}

            <button
              onClick={() => {}}
              className="absolute right-2 px-3 py-1 rounded-full bg-[#ff6b35] text-white text-xs font-bold hover:brightness-105 transition-all shadow-xs cursor-pointer"
            >
              검색
            </button>
          </div>

          {/* Quick Search Tag Suggestions */}
          <div className="flex items-center gap-1.5 flex-wrap mt-2.5 text-xs text-[#594139]">
            <span className="text-[#8d7168] font-medium text-[11px]">인기 키워드:</span>
            {['망우동 떡볶이', '상봉역 노포', '묵동 브런치', '사가정 닭갈비'].map((tag) => (
              <button
                key={tag}
                onClick={() => onSearchChange(tag)}
                className="px-2 py-0.5 rounded-md bg-white/90 hover:bg-[#ff6b35] hover:text-white transition-colors border border-[#eedfda]/60 cursor-pointer text-[11px]"
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Metric Counter Badges */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-5 w-full">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl py-2.5 px-2 text-center shadow-xs border border-[#eedfda]">
              <div className="text-lg sm:text-xl font-black text-[#ab3500] tabular-nums">
                {totalCount}
              </div>
              <div className="text-[11px] text-[#594139] font-medium">엄선된 로컬 맛집</div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl py-2.5 px-2 text-center shadow-xs border border-[#eedfda]">
              <div className="text-lg sm:text-xl font-black text-[#785a00] tabular-nums">6개 동</div>
              <div className="text-[11px] text-[#594139] font-medium">중랑구 전역 커버</div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl py-2.5 px-2 text-center shadow-xs border border-[#eedfda]">
              <div className="text-lg sm:text-xl font-black text-[#ff6b35] flex items-center justify-center gap-0.5 tabular-nums">
                <span>4.8</span>
                <span className="text-xs">★</span>
              </div>
              <div className="text-[11px] text-[#594139] font-medium">주민 검증 평점</div>
            </div>
          </div>
        </div>

        {/* Right Column (Right Half: 6 cols on desktop) - Video Showcase */}
        <div className="lg:col-span-6 w-full flex flex-col items-center">
          <div
            onClick={() => togglePlay()}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_12px_32px_-6px_rgba(45,37,34,0.2)] border-2 border-white/80 bg-black group cursor-pointer"
          >
            {/* HTML5 Video Element with Actual Taereung Drone Video */}
            <video
              ref={videoRef}
              src={videoSrc}
              poster={posterImage}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            />

            {/* Gradient Scrim for Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold border border-white/15">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>LIVE 항공 뷰 · 태릉 & 망우역사문화공원</span>
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ff6b35] text-white text-[11px] font-bold shadow-xs">
                UNESCO 세계유산
              </span>
            </div>

            {/* Center Play/Pause Indicator (Only shows when paused or on hover) */}
            <button
              type="button"
              onClick={(e) => togglePlay(e)}
              className={`absolute inset-0 m-auto w-14 h-14 rounded-full bg-black/50 hover:bg-[#ff6b35] text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-xl border border-white/30 ${
                isPlaying ? 'opacity-0 group-hover:opacity-90' : 'opacity-100 scale-105'
              }`}
              aria-label={isPlaying ? '일시정지' : '재생'}
            >
              <span className="material-symbols-outlined text-3xl leading-none">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>

            {/* Bottom Info Bar & Controls */}
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 text-white">
              <div className="flex flex-col pointer-events-none">
                <span className="text-xs font-extrabold text-white flex items-center gap-1 drop-shadow-sm">
                  <span>조선왕릉 태릉 전경 (항공 촬영 드론 영상)</span>
                </span>
                <span className="text-[11px] text-white/80 line-clamp-1 drop-shadow-sm">
                  중랑구 묵동·신내동 인근 푸른 솔숲과 왕릉 둘레길
                </span>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center gap-1.5 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={(e) => toggleMute(e)}
                  className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm transition-colors text-xs border border-white/15 cursor-pointer"
                  title={isMuted ? '음소거 해제' : '음소거'}
                >
                  <span className="material-symbols-outlined text-sm">
                    {isMuted ? 'volume_off' : 'volume_up'}
                  </span>
                </button>

                {/* Optional Custom Video File Upload Button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center gap-1 backdrop-blur-sm transition-colors text-[10px] font-semibold border border-white/20 cursor-pointer"
                  title="다른 영상 파일로 교체하기"
                >
                  <span className="material-symbols-outlined text-xs">upload_file</span>
                  <span>영상 교체</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/mp4,video/webm,video/quicktime"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* Subtitle Caption under Video */}
          <div className="w-full flex items-center justify-between mt-2 px-1 text-[11px] text-[#8d7168]">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-[#ab3500]">park</span>
              식사 후 가벼운 산책 코스로 추천하는 중랑구 숲길
            </span>
            <span className="font-medium text-[#ab3500]">화면 클릭 시 재생 / 일시정지</span>
          </div>
        </div>
      </div>
    </section>
  );
};
