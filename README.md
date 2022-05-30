# ⛳ Health Admin Web

(TODO :: 추후에 사진 추가하기 !)

- **배포 URL** <br /> [https://moa-health-admin.netlify.app/](https://moa-health-admin.netlify.app/)

<br />

# 🗂 프로젝트 소개

- **개발 기간** 22.05.28 - 22.05.30
- **팀원** 강도희, 김민효, 박솔찬, 신가은, 이다슬, 이우성, 정규재, 정선미, 홍선영
- **프로젝트 개요** <br />
본 프로젝트는 모아데이타 선발 과제로 회원의 헬스 데이터를 볼 수 있는 관리자 웹페이지입니다.

<br />

# 💡 실행 방법

1. repository clone
    
    ```
    git clone <https://github.com/wanted-pre-onboarding-FE-01/moa-health-admin.git>
    
    ```
    
2. 해당 프로젝트 폴더로 이동
    
    ```
    cd moa-health-admin
    
    ```
    
3. 필요 package들 설치
    
    ```
    yarn intall
    
    ```
    
4. 프로젝트 실행
    
    ```
    yarn start
    
    ```
    

<br />

# 📁 폴더 구조

<details>
<summary>펼치기</summary>

(TODO :: 추후에 추가)

</details>

<br />

# 🔨 기술 스택

<div align="center">
<img src="[https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white)"/>
<img src="[https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white)"/>
<img src="[https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)"/>
<img src="[https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)"/>
<img src="[https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white)"/>
<img src="[https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Recoil&logoColor=white](https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Recoil&logoColor=white)"/>

<br />

|라이브러리|내용|버전|
|:---:|:---:|:---:|
| classnames | styles 관련 | 2.3.1 |
| dayjs | 날짜 관련 | 1.11.2 |
| framer-motion | 애니메이션 관련 | 6.3.3 |
| react-datepicker | 날짜 관련 | 4.4.1 |
| react-icons | 아이콘 관련 | 4.3.1 |
| react-use | 리액트 편의 | 17.3.2 |
| store | localStorage 편의 | 2.0.12 |
| victory | 차트 라이브러리 | 36.4.0 |

<br />
</div>

<br />

# 🏞 기능 설명

### 로그인

**로그인 유틸**

로그인 로그아웃을 간단하게 훅스를 사용하는 방식으로 사용할 수 있도록 훅을 작성하여 사용

- 로그인 훅스 (useLogin)
    - 기본적으로 로그인을 수행하는 util을 작성
    - 로그인 훅스에서 로그인 util을 사용하여 결과에 따라 로그인 상태를 변경하는 로직을 수행
    - 아이디, 비밀번호, 실패 핸들러 총 3개의 인자를 전달받아 로그인 유틸의 수행 결과에 따라 진행됨
- 로그아웃 훅스 (useLogout)
    - 간단하게 로그아웃 훅을 통해 이벤트가 발생하면 한 번에 로그아웃 처리를 진행
    - 로그인 정보를 로컬스토리지에서 저장하기 때문에 로컬 스토리에서 데이터를 제거
    - 이후, 로그인 상태를 변경하여 페에지가 로그인 페이지로 전환됨
        - 상태가 비로그인 상태이기 때문

<br />

### 회원 관리
블라블라 작성하기

<br />

### 회원 상세 정보
- 심박수 그래프
    - date picker로 선택된 날짜(startData,endDate) 값을 받아 해당되는 날짜의 심박수를 그래프로 표시
    - 선택한 기간이 하루일 때, 10분 단위로 심박수 표시
    - 선택한 기간이 2일 이상일 때, 일 단위로 심박수 표시

<br />
