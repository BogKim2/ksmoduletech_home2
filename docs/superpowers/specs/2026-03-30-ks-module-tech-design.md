# KS Module Tech Static Website — Design Spec

**Date:** 2026-03-30  
**Status:** Approved  
**Stack:** React + Vite + TypeScript + Tailwind CSS + shadcn/ui  
**Hosting:** GitHub Pages  

---

## 1. 목표 및 핵심 컨셉

GitHub Pages 기반 제로-백엔드 정적 웹사이트. 사업 소개 및 회사 정보 중심.

> "신뢰 + 기술 + 심플"

---

## 2. 결정된 아키텍처

### 접근법 선택: Option A — Vite + React + shadcn/ui

| 비교 | Option A (채택) | Option B | Option C |
|------|----------------|----------|----------|
| 스택 | Vite + React + shadcn | Next.js Static | Plain HTML |
| 라우팅 | HashRouter | BrowserRouter | 없음 |
| 배포 | gh-pages 패키지 | 동일 | 동일 |
| SEO | 기본 meta 태그 | SSG로 더 유리 | 수동 |
| 확장성 | CMS/i18n 용이 | 동일 | 어려움 |

**채택 이유:** TRD 일치, shadcn/ui 컴포넌트 활용, 추후 확장 용이

### 라우팅

- **방식:** HashRouter (`/#/path`)
- **이유:** GitHub Pages 추가 설정 없이 동작, 404.html 리다이렉트 불필요

---

## 3. 폴더 구조

```
E:\03llmstudy\ksmoduletech_home2\
├── docs/superpowers/specs/          # 이 파일
├── public/
│   └── og-image.png
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   └── ui/                      # shadcn 생성
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── BusinessPage.tsx
│   │   ├── ShareholdersPage.tsx
│   │   └── ContactPage.tsx
│   ├── data/
│   │   ├── company.json
│   │   ├── business.json
│   │   └── shareholders.json
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 4. 데이터 스키마

### `company.json`

```json
{
  "name": "케이에스모듈텍 주식회사",
  "nameEn": "KS Module Tech Co., Ltd.",
  "established": "2024",
  "location": "부산광역시 금정구",
  "address": "부산광역시 금정구 부산대학로 63번길 2 부산대학교 물리학과 307호",
  "email": "ksmodule@gmail.com",
  "description": "PCB 제조 및 AI/AX 기술 기업"
}
```

### `business.json`

```json
[
  {
    "id": "pcb",
    "title": "PCB 사업",
    "icon": "cpu",
    "summary": "전기전자 제조 / PCB 설계·제작",
    "items": ["전기전자 제조", "PCB 설계", "PCB 제작"]
  },
  {
    "id": "ai-ax",
    "title": "AI / AX 사업",
    "icon": "brain",
    "summary": "AI 컨설팅 / 교육 / 장비 / 소프트웨어",
    "items": ["AI 컨설팅", "AX 교육", "AI 장비 구축", "AI 소프트웨어"]
  }
]
```

### `shareholders.json`

```json
[
  { "name": "김복기", "shares": 9500, "percentage": 95.0, "role": "대표이사" },
  { "name": "부산대학교 산학협력단", "shares": 500, "percentage": 5.0, "role": "기관 주주" }
]
```

---

## 5. 주요 컴포넌트

| 컴포넌트 | 위치 | shadcn | 설명 |
|---------|------|--------|------|
| `Navbar` | layout/ | - | 로고 + 네비 링크, 모바일 햄버거 |
| `Footer` | layout/ | - | 주소, 이메일, 저작권 |
| `Container` | layout/ | - | max-w-6xl 래퍼 |
| `BusinessCard` | pages/ | Card | 사업 분야 카드 |
| `ShareholdersTable` | pages/ | Table | 지분 구조 |

---

## 6. 스타일 시스템

```ts
// tailwind.config.ts
colors: {
  primary: "#0A2540",  // Deep Blue
  accent: "#00C2FF",   // Cyan
  background: "#FFFFFF"
}
```

- shadcn 테마: Light
- 폰트: 시스템 폰트 (Pretendard 옵션)

---

## 7. 빌드 & 배포

```ts
// vite.config.ts
base: "/ksmoduletech_home2/"
```

```json
// package.json scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

- Branch: `gh-pages`
- Root: `/dist`

---

## 8. SEO

- `<title>KS Module Tech | PCB · AI · AX</title>`
- `<meta name="description" content="부산 기반 PCB 제조 및 AI/AX 기술 기업">`
- Open Graph: og:title, og:description, og:image

---

## 9. 구현 순서 (MVP 우선)

1. Vite + Tailwind + shadcn 세팅
2. Layout + HashRouter
3. Home → Business
4. JSON 데이터 연결
5. About / Shareholders / Contact (후순위)
6. SEO + 배포

---

## 10. 성공 기준

- Lighthouse 90+ (Performance, Accessibility, Best Practices, SEO)
- 모바일 대응 (Tailwind responsive)
- GitHub Pages 인덱싱
