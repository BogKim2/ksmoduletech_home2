# KS Module Tech — Static Website

케이에스모듈텍 주식회사 공식 웹사이트

**Stack:** React + Vite + TypeScript + Tailwind CSS + shadcn/ui  
**Hosting:** GitHub Pages

---

## 개발 환경

```bash
npm install
npm run dev       # http://localhost:5173
```

## 빌드

```bash
npm run build     # dist/ 폴더 생성
npm run preview   # 빌드 결과 미리보기
```

## GitHub Pages 배포

### 1. GitHub 저장소 설정

```bash
git init
git remote add origin https://github.com/<your-username>/ksmoduletech_home2.git
git add .
git commit -m "feat: initial commit"
git push -u origin main
```

### 2. 배포

```bash
npm run deploy    # gh-pages 브랜치로 자동 배포
```

### 3. GitHub 설정

- Repository → **Settings** → **Pages**
- **Build and deployment** → Source: **Deploy from a branch**
- Branch: **`gh-pages`** / folder: **`/ (root)`** → Save

**배포 URL:** [https://bogkim2.github.io/ksmoduletech_home2/](https://bogkim2.github.io/ksmoduletech_home2/)  
(저장소 소유자 GitHub 사용자명에 따라 주소가 달라질 수 있습니다.)

### Windows에서 `npm run deploy`가 실패할 때

`gh-pages`가 캐시 클론에서 Git “dubious ownership” 오류를 내면, 한 번만 실행합니다:

```bash
git config --global --add safe.directory "*"
```

---

## 데이터 수정

`src/data/` 폴더의 JSON 파일을 직접 수정합니다:

| 파일 | 내용 |
|------|------|
| `company.json` | 회사 기본 정보 |
| `business.json` | 사업 분야 및 서비스 |
| `shareholders.json` | 주주 현황 |

---

## 폴더 구조

```
src/
├── components/
│   ├── layout/    # Navbar, Footer, Container
│   └── ui/        # shadcn/ui 컴포넌트
├── pages/         # 각 페이지 컴포넌트
├── data/          # JSON 데이터 파일
├── lib/           # 유틸리티 함수
└── styles/        # 전역 CSS
```
