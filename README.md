# 🚩 프로젝트 상세

> 🚀 **[Deploy Link](https://dashboard-app-1a.netlify.app/)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/7b4f22e0-2eb5-4fb2-b8f2-1913259f1746/deploy-status)](https://app.netlify.com/sites/fancy-toffee-b37d4a/deploys)

>  🚀 **[Server Link](https://github.com/solchan98/wanted-madup-dashboard-app-1A-backend)**



매드업 선발 과제로 그래프를 이용한 마케팅 데이터 시각화 프로젝트입니다.

# ☑️ 요구 사항

1. 제시 된 [Figma ](https://www.figma.com/file/4LvAWqkU4ZMcI14MEZzJTx/Madup-X-Wanted-FE-PJT)디자인과 코멘트에 따른 화면 및 기능 구현
2. 임의적으로 Fetch 타임을 만들어 로딩화면 지원
3. 화면 이동 후 복귀 시 마지막 상태 유지

# 👤 팀원, 기간

- 팀원 : 박솔찬 신가은 이다슬 정선미 홍선영
- 기간 : 2022 / 05 / 22 ~ 2022 / 05 / 26

# ⚒️ 사용 기술, 라이브러리

- react , typescript, scss
- react-query
- recoil (전역 상태 관리)
- victory
- react-datepicker
- react-loading
- dayjs

<details>
  <summary>
<h1>💡실행 방법
</h1>
</summary>
  <div markdown="1">

   1. repository clone

        ```bash
        git clone https://github.com/wanted-pre-onboarding-FE-01/dashboard-app-1A.git
        ```
    
2. 해당 프로젝트 폴더로 이동
    
    ```bash
    cd dashboard-app-1A
    ```
    
3. 필요 package들 설치
    
    ```bash
    npm intall 
    or 
    yarn install
    ```
    
4. 프로젝트 실행
    
    ```bash
    npm start
    ```
  </div>
</details>

# 구현 기능

## 대시보드 페이지

### 1. **date picker**

- 구현사항
    - react-datepicker 라이브러리를 활용하여 커스텀
    - customHeader를 추가하여 현재 선택한(시작~끝) 날짜 표시
    - 선택한 날짜 적용 시 recoil 전역 상태로 저장

### 2. 통합 광고 현황

**2.1. 광고 현황**

- 구현사항
  - 선택된 날짜의 통합 상태를 제공
  - 선택된 날짜의 데이터와 이전 날짜의 데이터를 통해 노출 데이터 계산
      - 비교를 통해 증감여부를 표현
  - 값의 단위에 따른 Unit 변환
      - 예로 메인 값이 ‘억'단위 일 때, 증감 여부의 값 단위가 ‘만'인 경우 0.1억 이런 식으로 치환
- 어려웠던 점
  - 값의 단위를 통일시키기 위한 유틸 작성을 위해 공통의 케이스를 찾기가 어려웠음
  - 선택된 날짜의 데이터를 계산하는 부분이 비교적 깔금하지 못함

**2.2. 통합 광고 현황 그래프**

1.  드롭 다운

<details>
  <summary>주간/일별 로 선택가능</summary>
  
- 주간
    - 선택 가능한 경우
        
        7일 이하의 기간 선택 시, 기간을 선택하는 드롭다운을 비활성화 시켜 주간 선택 불가
        
    - 구현 방법
        
        > 동일 주차의 평균을 구하여 주차 별로 반환
        > 
        
        1. 선택한 날짜들이 해당하는 월의 주차(n월 n주)를 구함

        2. 동일한 주에 해당하는 날짜들의 갯수를 구하고 데이터는 모두 더한 후 `해당 주차의 데이터 총합/해당 주차의 날짜 총 갯수`를 반환하여 주차별 평균을 반환
- 일별
    
    선택한 기간의 모든 데이터를 일별로 보여주되 x축은 기본적으로 `tickCount` 가 7로 설정되어 실제 사이트와 동일한 x축의 갯수 출현

</details>

<details>
  <summary>선택 시 반환할 데이터 계산</summary>
<br/>
  
> 3가지의 드롭다운에서 옵션을 선택하면 해당 옵션에 대하여 그래프에 그려줄 데이터  가공
> 
  
단위 값 (%, 원, 회), 그래프에 보여줄 데이터 배열, y축 값 (y값 중의 최대값) 등
  
```tsx
const formatReturnData = (unitVal: string, integratedAdInfo: IDay[], btn: Btn, periodOption: PeriodOptions) => {
  const formatedData =
    periodOption === '일간' ? convertDailyData(integratedAdInfo, btn) : convertWeeklyData(integratedAdInfo, btn);
  return {
    unit: unitVal,
    formatedData,
    maxValue: formatedData && Math.max(...formatedData.map((obj: IFormatedData) => obj.y)),
  };
};

export const convertData = (integratedAdInfo: IDay[], btnOption: PrimaryOptions, periodOption: PeriodOptions) => {
  if (btnOption === 'ROAS') return formatReturnData('%', integratedAdInfo, 'roas', periodOption);
  if (btnOption === '광고비') return formatReturnData('원', integratedAdInfo, 'cost', periodOption);
  if (btnOption === '클릭 수') return formatReturnData('회', integratedAdInfo, 'click', periodOption);
  if (btnOption === '노출 수') return formatReturnData('회', integratedAdInfo, 'imp', periodOption);
  if (btnOption === '매출') return formatReturnData('원', integratedAdInfo, 'convValue', periodOption);
  if (btnOption === '전환 수') return formatReturnData('회', integratedAdInfo, ['cvr', 'click'], periodOption);
  return undefined;
};
```
</details>

<details>
  <summary>첫 번째 드롭다운에서 선택한 지표를 두번째 드롭다운(옵셔널)에서 선택 불가</summary>

`filter` 를 활용해서 제작
  
</details>

<details>
  <summary>2가지 드롭다운이 모두 선택될 경우, 그래프 우측에 y2 눈금자 제공</summary>

y2축에 할당할 `VictoryAxis`와 `VictoryLine` 를 key로 연결하여 출현시킴
</details>

2. 그래프
<details>
  <summary>숫자 단위 변환</summary>

- 값이 1만 이하일 경우
    
    반올림으로 소수점 제거 후, 천 단위마다 콤마(`,`) 형성
    
- 값이 1만~1조 일 경우
    
    한글 단위로 변환 (ex. 5백만원)
```tsx
export const convertNumToUnit = (num: number) => {
  if (num < 10000) {
    return Math.round(num)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const transUnit = [
    { value: 1e12, symbol: '조' },
    { value: 1e11, symbol: '천억' },
    { value: 1e10, symbol: '백억' },
    { value: 1e9, symbol: '십억' },
    { value: 1e8, symbol: '억' },
    { value: 1e7, symbol: '천만' },
    { value: 1e6, symbol: '백만' },
    { value: 1e5, symbol: '십만' },
    { value: 1e4, symbol: '만' },
    { value: 1e3, symbol: '천' },
  ];
  let i;
  for (i = 0; i < transUnit.length; i += 1) {
    if (num >= transUnit[i].value) {
      return (num / transUnit[i].value).toFixed(1).replace(/\.?0+$/, '') + transUnit[i].symbol;
    }
  }
  return num;
};
```
</details>
        
<details>
  <summary>툴팁 제공</summary>

그래프의 선을 hover하면 툴팁 확인 가능
</details>

### 3. 매체 현황

**3.1. 매체 현황 그래프**

[https://user-images.githubusercontent.com/79626675/170167392-a557045c-2612-4e9a-a3b2-2b96f94e690e.mov](https://user-images.githubusercontent.com/79626675/170167392-a557045c-2612-4e9a-a3b2-2b96f94e690e.mov)

- 구현 사항
  - `service/fetchMediaChannelData` : 선택된 날짜에 해당하는 데이터 api 호출
  - `util/formatMediaChannelGraph` : 반환된 데이터를 그래프 형식에 맞게 계산하여 반환
  - 소수점 3자리버림
  - 각 항목 별 값 tooltip에 표시
  - 그래프 렌더링 시 애니메이션
    
- 어려웠던 점
  - y축 항목들의 누적 값을 구한 후 전체 데이터에 해당하는 비율을 계산하는 것,
  - 툴팁에는 비율이 아닌 실제 데이터 값을 넣는 것이 복잡했다.

**3.2. 매체 현황 테이블 차트** 

- 구현 사항
  - `util/formatMediaChannelTableData` 로부터 전달받은 데이터를 렌더링
  - 모니터 크기에 따른 횡스크롤 삽입

## 광고관리 페이지
### 1. 광고 데이터 렌더링
https://user-images.githubusercontent.com/71131248/170404198-9055927d-e6c7-4297-997e-1c4f067ec4e3.mov
- 구현 사항
  - react-query를 이용해 데이터를 받아온 후, 해당 데이터 렌더링.
  - 받아 온 데이터를 드롭다운의 클릭한 item 값에 맞게 필터링.
