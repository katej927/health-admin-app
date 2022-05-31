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
| react-use | 리액트 편의 | 17.3.2 |
| react-use-cookie | 아이디 저장하기 | 1.4.0 |
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

<br />

- 로그아웃 훅스 (useLogout)
    - 간단하게 로그아웃 훅을 통해 이벤트가 발생하면 한 번에 로그아웃 처리를 진행
    - 로그인 정보를 로컬스토리지에서 저장하기 때문에 로컬 스토리에서 데이터를 제거
    - 이후, 로그인 상태를 변경하여 페에지가 로그인 페이지로 전환됨
        - 상태가 비로그인 상태이기 때문

<br />

**로그인 UI**

로그인 UI 및 관련된 기능을 구현  

- validation

  - 아이디 및 비밀 번호를 미입력시 focus out 및 로그인 버튼을 누를 때 미입력된 요소에 경고 메세지를 요소 하단에 표시한다.
  - 미입력된 요소가 있다면 버튼의 스타일이 활성화되지 않으며 버튼을 누르더라도 요소 하단에 경고 메세지만 표시하고 로그인 요청을 보내지 않는다.


```tsx
// login/index.tsx

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === '') {
      setUsernameAlert(true);
    }
    if (password === '') {
      setPasswordAlert(true);
    }
    if (password === '' || username === '') {
      return;
    }
    onLogin(username, password, checkValue, onFailHandler, rememberIdHandler);
  };
```


- 아이디 저장하기

  - 아이디 저장하기를 체크하면 로그인 로직을 통해 로그인이 성공했을 때 쿠키에 해당 아이디를 저장하고 다른 아이디로 새로 로그인할 경우 쿠키 값을 갱신한다.
  - 아이디에 저장하기 해제한다면 저장되어 있는 쿠키를 만료시킨다.

```tsx
// login/index.tsx

const rememberIdHandler = (rememberId: string, isRemember: boolean) => {
    if (isRemember) {
      setCookie('usernameCookie', rememberId, {
        days: 7,
      });
    } else {
      setCookie('usernameCookie', '', { days: 0 });
    }
  };
```
<br>

### 회원 관리
블라블라 작성하기

<br />

### 회원 상세 정보
- 회원 정보 테이블
    - '회원 관리'페이지에서 관리자가 선택한 회원 정보 출력

<br />

- 심박수 그래프
    - date picker로 선택된 날짜(startData,endDate) 값을 받아 해당되는 날짜의 심박수를 그래프로 표시
    - 선택한 기간이 하루일 때, 10분 단위로 심박수 표시
    - 선택한 기간이 2일 이상일 때, 일 단위로 심박수 표시

<br />


### 조회 기간 컴포넌트
<details>
  <summary>펼치기</summary>
    
https://user-images.githubusercontent.com/69146527/171102893-05149745-c2e8-4383-941e-f893eb60d659.mov

- No Library

    - 직접 만든 date-range-picker

    - 이유: 최대한 기획된 디자인과 기능에 맞추기 위하여
- 날짜 및 시간 format : `YY-MM-DD HH:MM:SS` (요구 사항 형식)
- 오늘 날짜는 `2022-04-19`로 고정
    
    이유: 데이터 확인이 가장 좋은 날짜. (데이터들의 날짜가 22년 2~4월에 몰려있음)
    
- 3개의 퀵버튼(`오늘`, `1주일`, `전체`) 구현

    - `전체` 의 시작일 기준:

        - 회원 관리 페이지 - 회원들 중 가장 오래된 가입일
        - 그래프 - 선택된 회원의 가입일
- 페이지별 재사용
    - 회원 관리 페이지, 그래프 2개(심박 수, 걸음 수)
    - 개별적인 날짜 조회 가능 (컴포넌트별 state 모두 분리)
- UI와 기능의 파일 분리
- 동작 원리

    - `validation check`

        검색 버튼을 눌렀을 때 시작/종료일 중 선택되지 않은 것이 있다면 error 표출 (border 색상 : red)
        
    - 날짜 선택
        
        시작일 선택 후, 종료일을 시작일 이전 날짜로 선택 시: 시작일을 업데이트
        
        시작일 선택 후, 종료일을 시작일 이후 날짜로 선택 시: 시작/종료일 업데이트
        
    - 정확한 날짜 표출
        - 표출되는 날짜에는 해당 날짜의 `연/월/일` 정보 보유 (단순 숫자 노출 x)
        - 코드 (한 달의 주차 별 날짜 배열 산출 방법)
            
```tsx
export const converteDate = (assignedDay: Dayjs) => {
  const firstWeek = assignedDay.startOf('month').week();

  const dates: Dayjs[] = Array.from(
    { length: assignedDay.daysInMonth() + assignedDay.startOf('month').day() },
    (v, index) => assignedDay.startOf('year').week(firstWeek).startOf('week').add(index, 'day')
  );

  const init: Dayjs[][] = [];

  let rowIdx = -1;
  return dates.reduce((acc, cur, i) => {
    if (!(i % 7)) {
      acc.push([cur]);
      rowIdx += 1;
    } else {
      acc[rowIdx].push(cur);
    }
    return acc;
  }, init);
};
```
  </details>

