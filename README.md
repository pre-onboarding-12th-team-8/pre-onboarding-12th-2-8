# 프리온보딩 2주차 과제

## 팀원
강석규, 박진영, 백민석

## 배포 주소
https://pre-onboarding-12th-2-8-deploy.vercel.app/

## 실행 방법
- `git clone https://github.com/pre-onboarding-12th-team-8/pre-onboarding-12th-2-8.git ./` : 프로젝트 내려받기
- `npm install` : 패키지 설치
- `npm start` : 애플리케이션 실행 (브라우저가 자동으로 실행되어 홈페이지로 이동합니다.)

## 프로젝트 디렉토리 설명:
- `src / api`: api 요청 함수 관리
- `src / context`: 이슈 목록 관련 컴포넌트에서 공통적으로 사용되는 데이터, 함수 관리
- `src / hooks`: 무한 스크롤을 위한 기능이 추후 issues 관련 기능 뿐만 아니라 다른 곳에서도 재활용될 것이라고 판단하여 이를 위한 커스텀 훅 관리
- `src / pages`: 페이지를 렌더링하는 컴포넌트 관리
- `src / reducer` : 이슈 목록 관련 컴포넌트에서 공통적으로 사용되는 상태 값의 변화를 관리

## 구현 사항
- axios 인스턴스를 생성함으로써 서버 요청시 공통적으로 적용되는 로직을 한 파일에서 관리하여 추후 axios 요청 로직 수정 시 유지보수면에서 용이
- reducer를 사용하여 상태 업데이트의 의도를 쉽게 파악할 수 있으며 추후 해당 리듀서를 다른 컴포넌트에서도 재활용할 수 있는 장점이 있음
- API
  - /repos/facebook/react/issues?page=0&per_page=30 : 이슈 목록 요청
  - /repos/facebook/react/issues/:issue_number : 특정 이슈의 상세 정보 요청
- styled-components 사용
  - 컴포넌트 개발할 때마다 css파일을 따로 생성하지 않아도 되는 이점
  - props에 따라 스타일을 유연하게 변경할 수 있는 이점
  - css-in-js를 지원하는 라이브러리 중에서 해당 라이브러리가 다운로드 수도 높고
    상대적으로 오래 유지보수 되어 안정감이 있다고 생각하여 styled-components 채택
- 이슈 목록 페이지
  - API 요청 시 dispatch를 인자로 받아 비동기 요청 상태를 state로 관리해 줌으로서 비동기 작업 중 상태 관리의 명료성과 일관성을 향상
  - 이슈 목록 요청 시 parameter에 sort=comments를 추가하여 코멘트가 많은 순으로 정렬
  - Intl 객체를 사용함으로써 간단한 코드로 날짜 포맷팅을 특정 국가에 맞게 유연하고 다양하게 표시 가능 
  - intersection observer 객체를 통해 무한 스크롤 기능 구현
    - 관찰 대상이 되는 요소가 뷰포트에 교차되었을 때 비동기로 동작하여 퍼포먼스면에서 이점
    - 커스텀 훅으로 분리함으로써 다른 곳에서도 사용 가능하도록 재사용성 도모
- 이슈 상세 페이지
  - 이슈 상세 페이지의 경우 ‘/issues/:id’로 설정, 요청한 이슈가 없는 등의 예상치 못한 상황에 그에 따른 UI를 보여주도록 구현함으로서 사용자 경험과 애플리케이션 안정성 도모
  - 상단의 이슈 번호, 이슈 제목 등의 표시에 이슈 목록 컴포넌트인 IssueItem를 재사용하여 구현함으로써 코드 경량화
  - 이슈 상세 정보 페이지의 마크다운을 해석하여 렌더링하기 위해 다음 라이브러리 사용
    - react-markdown : react에서 string을 props로 받아 마크다운 문법을 해석하여 렌더링해주는 컴포넌트를 제공해주는 라이브러리 
    - remark-gfm : table, link 등 기존 마크다운의 추가 문법을 해석할 수 있도록 지원해주는 라이브러리
 - 공통 헤더
  - 여러 페이지에서 공통적으로 적용되는 레이아웃은 Layout 컴포넌트를 이용해 배치함으로써 개발 편의성 향상
 
## Tech Stack

<div>
  
Area| Tech Stack|
:--------:|:------------------------------:|
**Frontend** | <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245.svg?&style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?&style=for-the-badge&logo=styledcomponents&logoColor=white">
</div>

기타 라이브러리
- react-markdown
- remark-gfm
