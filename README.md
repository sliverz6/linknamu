# 링크나무

내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 Link-in-Bio 서비스입니다.

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- MongoDB Atlas (클릭 수 저장)
- Vercel (배포)

## 주요 기능

- 프로필 표시 (이름, 소개, 사진)
- 링크 카드 목록
- 다크모드 토글
- 링크 클릭 수 집계

## 시작하기

의존성 설치:

```bash
npm install
```

개발 서버 실행:

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 확인합니다.

## 프로젝트 구조

- `src/app` — 라우트 및 페이지
- `src/components` — 재사용 컴포넌트
- `.env.local` — 환경 변수 (커밋되지 않음)

## 참고 문서

- [PRD.md](./PRD.md) — 제품 요구사항
- [CLAUDE.md](./CLAUDE.md) — 코드 규칙 및 프로젝트 개요
