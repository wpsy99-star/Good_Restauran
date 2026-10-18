# 중랑구 맛집 탐방 (Jungnang Food Guide) 🍜

중랑구 골목 곳곳의 찐로컬 맛집 10곳을 엄선 큐레이션하고, 오늘 뭐 먹을지 고민될 때 돌리는 랜덤 룰렛 추천 기능을 갖춘 프론트엔드 웹 애플리케이션입니다.

## ✨ 주요 특징 및 기술 스택
- **HTML, CSS, JavaScript (React + TypeScript + Tailwind CSS)**: 100% 클라이언트 사이드 동작
- **노 백엔드 / 노 데이터베이스**: 서버나 별도 DB 없이 브라우저 단독 실행 및 `localStorage`로 즐겨찾기 영구 보관
- **GitHub Pages 완벽 호환**: Vite의 `base: './'` 설정으로 상대 경로 정적 파일 빌드 (`dist/index.html`, `./assets/`)
- **실시간 반응형 UX**:
  - 실시간 검색 & 키워드 바로가기
  - 음식 카테고리 & 동네별 필터
  - 추천순 / 평점순 / 낮은가격순 / 저장순 정렬
  - 상세 정보 페이지 (대표 메뉴판, 에디터 꿀팁, 찾아오는 길, 주소 복사, 주민 후기)
  - 결정장애 해결 랜덤 룰렛 모달 (다시 뽑기, 네이버 길찾기, 공유하기)
  - 동네별 미식 가이드 및 즐겨찾기 보관함

---

## 🚀 GitHub Pages 배포 방법

### 방법 1: `dist` 폴더를 gh-pages 브랜치에 배포 (권장)

1. **프로젝트 정적 빌드 실행**:
   ```bash
   npm run build
   ```
   빌드가 완료되면 루트에 순수 정적 웹사이트인 `dist/` 폴더가 생성됩니다.

2. **gh-pages 패키지로 간편 배포**:
   ```bash
   # gh-pages 패키지 설치
   npm install -D gh-pages

   # package.json scripts에 아래 항목 추가
   # "predeploy": "npm run build",
   # "deploy": "gh-pages -d dist"

   # 배포 실행
   npm run deploy
   ```

3. **GitHub 저장소 설정**:
   - 저장소 `Settings` > `Pages` 이동
   - **Source**를 `Deploy from a branch`로 선택하고, Branch를 `gh-pages` / `/ (root)`로 저장하면 수 분 내에 사이트가 공개됩니다!

---

### 방법 2: GitHub Actions 자동 배포 (.github/workflows/deploy.yml)

저장소 루트에 `.github/workflows/deploy.yml` 파일을 만들고 아래 내용을 입력하면, `main` 브랜치에 푸시할 때마다 GitHub Pages에 자동으로 배포됩니다:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 💻 로컬 개발 환경 실행
```bash
npm install
npm run dev
```
브라우저에서 `http://localhost:3000`으로 접속하여 확인하실 수 있습니다.
