# 프리온보딩 2주차 과제

## 팀원
강석규, 박진영, 백민석

## 배포 주소
https://pre-onboarding-12th-2-8-deploy.vercel.app/

## 실행 방법
1. 프로젝트 내려받기: `git clone <https://github.com/pre-onboarding-12th-team-8/pre-onboarding-12th-2-8.git> ./`
2. 패키지 설치: `npm install`
3. 애플리케이션 실행: `npm start` (브라우저가 자동으로 실행되어 홈페이지로 이동)

## 프로젝트 디렉토리 구조:
- **src/api**: API 요청 함수 관리
- **src/context**: 이슈 목록 공통 데이터, 함수 관리
- **src/hooks**: 무한 스크롤 및 재활용 가능한 커스텀 훅 관리
- **src/pages**: 페이지 렌더링 컴포넌트 관리
- **src/reducer**: 공통 상태 변화 관리

## 구현 사항
- **axios 인스턴스**: 서버 요청시 공통 로직 한 파일에서 관리
- **reducer 사용**: 상태 업데이트 의도 파악 및 재활용 가능성

**API**:

- **`/repos/facebook/react/issues?page=0&per_page=30`** : 이슈 목록 요청
- **`/repos/facebook/react/issues/:issue_number`** : 특정 이슈 상세 정보 요청

### **styled-components 사용**

- CSS 파일 생성 없이 컴포넌트 개발 가능
- props를 통한 유연한 스타일 변경 가능
- 안정적이고 다운로드 수가 많은 CSS-in-JS 라이브러리 선택

### **이슈 목록 페이지**

- API 요청 시 비동기 요청 상태를 state로 관리하여 상태 관리 향상
- 코멘트가 많은 순서로 정렬
- 날짜 포맷팅을 위한 Intl 객체 사용
- intersection observer를 통한 무한 스크롤 구현

### **이슈 상세 페이지**

- 예외 상황에 따른 UI 표시
- IssueItem 컴포넌트 재사용
- 마크다운 렌더링 라이브러리 사용 (react-markdown, remark-gfm)

### **공통 헤더**

- 여러 페이지 공통 레이아웃: Layout 컴포넌트 사용
 
## Tech Stack

<div>
  
Area| Tech Stack|
:--------:|:------------------------------:|
**Frontend** | <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245.svg?&style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?&style=for-the-badge&logo=styledcomponents&logoColor=white">
</div>

기타 라이브러리
- react-markdown
- remark-gfm
