# Health Admin Web


![HealthAdminWeb](https://github.com/katej927/Algorithm/assets/69146527/bd2138ce-fd12-4d99-852f-46da5ac6a5bb)

## 1️⃣ 프로젝트 개요

> 회원들의 건강 데이터를 조회하는 관리자 웹앱
> 
- 프론트엔드 9명
- 구현한 부분 : 공용 date-range-picker 구현 (library 없이)
- 기간 : ‘22.5.28 ~ 5.30

## 2️⃣ Links

👉 화면 확인 : [배포 링크](https://moa-health-admin.netlify.app/)

👉 코드 확인 : [내가 구현한 코드](https://github.com/wanted-pre-onboarding-FE-01/moa-health-admin/tree/main/src/components/datePicker), [팀 전체 코드](https://github.com/wanted-pre-onboarding-FE-01/moa-health-admin)

## 3️⃣ Techs

※ 제가 사용하지 않은 기술들은 생략했습니다.

- React, Typescript, scss + classnames
- Recoil
- dayjs
- react-use

## 4️⃣ 구현 내용

※ 팀원분들이 구현하신 것들은 생략했습니다.

1. No Library
	<details>
        <summary>자세히 보기</summary>

	- 직접 만든 date-range-picker
	- 이유: 최대한 기획된 디자인과 기능에 맞추기 위하여
	</details>

 2. 3개의 퀵버튼(`오늘`, `1주일`, `전체`) 구현
	<details>
        <summary>자세히 보기</summary>

	- UI
            
       ![ㅁㄴㅇㄹ](https://github.com/katej927/Algorithm/assets/69146527/f583d540-7168-4f61-bf4a-36ab22ef45d5)
    - 오늘 날짜는 `2022-04-19`로 고정

      이유: 데이터 확인이 가장 좋은 날짜. (데이터들의 날짜가 22년 2~4월에 몰려있음)
    
	- `전체` 의 시작일 기준
  
   	  - 회원 관리 페이지 - 회원들 중 가장 오래된 가입일
      - 회원 상세 정보 페이지 - 선택된 회원의 가입일
    - 코드
  
      `./src/components/datePicker/_shared/utils.ts`
            
       ```tsx
            export const onClickQuickBtn = (
              { currentTarget }: SyntheticEvent<EventTarget>,
              setInquiryPeriod: SetterOrUpdater<IInquiryPeriodState>,
              fixedToday: string,
              registrationDate: string
            ) => {
              if (!(currentTarget instanceof HTMLButtonElement)) return;
            
              const { name } = currentTarget.dataset;
              if (name === '오늘')
                setInquiryPeriod({
                  startDate: dayjs(fixedToday).format('YYYY-MM-DD'),
                  endDate: dayjs(fixedToday).format('YYYY-MM-DD'),
                });
              if (name === '일주일')
                setInquiryPeriod({
                  startDate: dayjs(fixedToday).subtract(6, 'day').format('YYYY-MM-DD'),
                  endDate: dayjs(fixedToday).format('YYYY-MM-DD'),
                });
              if (name === '전체')
                setInquiryPeriod({
                  startDate: dayjs(registrationDate).format('YYYY-MM-DD'),
                  endDate: dayjs(fixedToday).format('YYYY-MM-DD'),
                });
            };
       ```
	</details>
    
3. 정확한 날짜 표출 방식
	<details>
        <summary>자세히 보기</summary>

	- 표출되는 날짜에는 해당 날짜의 `연/월/일` 정보 보유 (단순 숫자 노출 x)
  
    - 코드 (한 달의 주차 별 날짜 배열 산출 방법)
    
     `./src/components/datePicker/_shared/utils.ts`
    
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

4. 페이지마다 재사용
	<details>
        <summary>자세히 보기</summary>

	- UI
    
      ![asdf](https://github.com/katej927/Algorithm/assets/69146527/273b42b4-42e4-4e35-9b89-eb0dcbf34fc3)
    
	- 회원 관리 페이지, 회원 상세 정보 페이지의 2가지 그래프 (심박 수, 걸음 수)
	- 이 컴포넌트를 사용하는 곳마다 개별적으로 날짜 조회 가능
    
       구현 방법: 컴포넌트별 state 모두 분리
    
	- 코드
    
     `./src/states/inquiryPeriod.ts`
    
     ```tsx
     import { atom } from 'recoil';
    
      export interface IInquiryPeriodState {
      startDate: string;
      endDate: string;
    }
    
      export const inquiryPeriodMemberState = atom<IInquiryPeriodState>({
      key: '#inquiryPeriodMemberState',
      default: { startDate: '', endDate: '' },
    });
    
      export const inquiryPeriodHeartState = atom<IInquiryPeriodState>({
      key: '#inquiryPeriodHeartState',
      default: { startDate: '', endDate: '' },
    });
    
      export const inquiryPeriodStepState = atom<IInquiryPeriodState>({
      key: '#inquiryPeriodStepState',
      default: { startDate: '', endDate: '' },
    });
    
      export const todayState = atom({
      key: '#todayState',
      default: '2022-04-19',
    });
     ```
	</details>

5. UI, 기능 파일 분리
