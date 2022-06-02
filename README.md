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
5. 로그인 아이디, 비밀번호
    
    ```
    "name": "wooseong",
    "password": "1"
    ```
<br />

# 📁 폴더 구조

<details>
<summary>펼치기</summary>

📦src<br />
 ┣ 📂assets<br />
 ┃ ┗ 📂svgs<br />
 ┃ ┃ ┣ 📜calendar.svg<br />
 ┃ ┃ ┣ 📜circle_check.svg<br />
 ┃ ┃ ┣ 📜circle_exclamation.svg<br />
 ┃ ┃ ┣ 📜circle_info.svg<br />
 ┃ ┃ ┣ 📜hide_password.svg<br />
 ┃ ┃ ┣ 📜house_user_solid.svg<br />
 ┃ ┃ ┣ 📜icon-arrow-down.svg<br />
 ┃ ┃ ┣ 📜icon-arrow-left.svg<br />
 ┃ ┃ ┣ 📜icon-arrow-right.svg<br />
 ┃ ┃ ┣ 📜index.ts<br />
 ┃ ┃ ┣ 📜logout.svg<br />
 ┃ ┃ ┣ 📜show_password.svg<br />
 ┃ ┃ ┣ 📜triangle_exclamation.svg<br />
 ┃ ┃ ┣ 📜user_image.svg<br />
 ┃ ┃ ┗ 📜user_solid.svg<br />
 ┣ 📂components<br />
 ┃ ┣ 📂datePicker<br />
 ┃ ┃ ┣ 📂_shared<br />
 ┃ ┃ ┃ ┣ 📂month<br />
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┃ ┃ ┗ 📜month.module.scss<br />
 ┃ ┃ ┃ ┣ 📜constants.ts<br />
 ┃ ┃ ┃ ┣ 📜index.ts<br />
 ┃ ┃ ┃ ┣ 📜types.d.ts<br />
 ┃ ┃ ┃ ┗ 📜utils.ts<br />
 ┃ ┃ ┣ 📜datePicker.module.scss<br />
 ┃ ┃ ┗ 📜index.tsx<br />
 ┃ ┣ 📂popup<br />
 ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┗ 📜popup.module.scss<br />
 ┃ ┣ 📂sideBar<br />
 ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┗ 📜sideBar.module.scss<br />
 ┃ ┣ 📂whiteSection<br />
 ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┗ 📜whiteSection.module.scss<br />
 ┃ ┗ 📜index.ts<br />
 ┣ 📂constant<br />
 ┃ ┗ 📜key.ts<br />
 ┣ 📂data<br />
 ┃ ┣ 📂heartrate_data<br />
 ┃ ┃ ┣ 📜heartrate_136_0226_유령회원1번.json<br />
 ┃ ┃ ┣ 📜heartrate_136_0308_유령회원1번.json<br />
 ┃ ┃ ┣ 📜heartrate_136_0419_유령회원1번.json<br />
 ┃ ┃ ┣ 📜heartrate_328_0416_유령회원2번.json<br />
 ┃ ┃ ┣ 📜heartrate_328_0419_유령회원2번.json<br />
 ┃ ┃ ┣ 📜heartrate_328_0420_유령회원2번.json<br />
 ┃ ┃ ┣ 📜heartrate_380_0417_유령회원3번.json<br />
 ┃ ┃ ┣ 📜heartrate_380_0418_유령회원3번.json<br />
 ┃ ┃ ┣ 📜heartrate_380_0419_유령회원3번.json<br />
 ┃ ┃ ┗ 📜heartrate_data_total.json<br />
 ┃ ┣ 📂step_data<br />
 ┃ ┃ ┣ 📜member_data.json<br />
 ┃ ┃ ┣ 📜step_136_0226_유령회원1번.json<br />
 ┃ ┃ ┣ 📜step_136_0308_유령회원1번.json<br />
 ┃ ┃ ┣ 📜step_136_0419_유령회원1번.json<br />
 ┃ ┃ ┣ 📜step_328_0416_유령회원2번.json<br />
 ┃ ┃ ┣ 📜step_328_0419_유령회원2번.json<br />
 ┃ ┃ ┣ 📜step_328_0420_유령회원2번.json<br />
 ┃ ┃ ┣ 📜step_380_0417_유령회원3번.json<br />
 ┃ ┃ ┣ 📜step_380_0418_유령회원3번.json<br />
 ┃ ┃ ┣ 📜step_380_0419_유령회원3번.json<br />
 ┃ ┃ ┗ 📜step_data.json<br />
 ┃ ┣ 📜admin_data.json<br />
 ┃ ┗ 📜member_data.json<br />
 ┣ 📂hooks<br />
 ┃ ┣ 📜useLogin.ts<br />
 ┃ ┗ 📜useLogout.ts<br />
 ┣ 📂routes<br />
 ┃ ┣ 📂dashboard<br />
 ┃ ┃ ┣ 📜dashboard.module.scss<br />
 ┃ ┃ ┗ 📜index.tsx<br />
 ┃ ┣ 📂detailMember<br />
 ┃ ┃ ┣ 📂heartRateDataGraph<br />
 ┃ ┃ ┃ ┣ 📜GRAPH_STYLE.ts<br />
 ┃ ┃ ┃ ┣ 📜heartRateDataGraph.module.scss<br />
 ┃ ┃ ┃ ┗ 📜index.tsx<br />
 ┃ ┃ ┣ 📂stepDataGraph<br />
 ┃ ┃ ┃ ┣ 📜GRAPH_STYLE.ts<br />
 ┃ ┃ ┃ ┣ 📜formatGraphData.ts<br />
 ┃ ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┃ ┣ 📜stepDataGraph.module.scss<br />
 ┃ ┃ ┃ ┗ 📜type.d.ts<br />
 ┃ ┃ ┣ 📜detailMember.module.scss<br />
 ┃ ┃ ┗ 📜index.tsx<br />
 ┃ ┣ 📂layout<br />
 ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┗ 📜layout.module.scss<br />
 ┃ ┣ 📂login<br />
 ┃ ┃ ┣ 📜Checkbox.tsx<br />
 ┃ ┃ ┣ 📜StoreID.tsx<br />
 ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┗ 📜login.module.scss<br />
 ┃ ┣ 📂manageMember<br />
 ┃ ┃ ┣ 📂_shared<br />
 ┃ ┃ ┃ ┣ 📂searchMember<br />
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┃ ┃ ┗ 📜searchMember.module.scss<br />
 ┃ ┃ ┃ ┗ 📂showMember<br />
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┃ ┃ ┗ 📜showMember.module.scss<br />
 ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┗ 📜manageMember.module.scss<br />
 ┃ ┗ 📜index.tsx<br />
 ┣ 📂states<br />
 ┃ ┣ 📜index.ts<br />
 ┃ ┣ 📜inquiryPeriod.ts<br />
 ┃ ┣ 📜login.ts<br />
 ┃ ┣ 📜searchMemberList.ts<br />
 ┃ ┗ 📜selectMember.ts<br />
 ┣ 📂styles<br />
 ┃ ┣ 📂base<br />
 ┃ ┃ ┣ 📜_fonts.scss<br />
 ┃ ┃ ┣ 📜_more.scss<br />
 ┃ ┃ ┗ 📜_reset.scss<br />
 ┃ ┣ 📂constants<br />
 ┃ ┃ ┣ 📜_colors.scss<br />
 ┃ ┃ ┗ 📜_sizes.scss<br />
 ┃ ┣ 📂mixins<br />
 ┃ ┃ ┣ 📜_flexbox.scss<br />
 ┃ ┃ ┗ 📜_visual.scss<br />
 ┃ ┣ 📜index.js<br />
 ┃ ┗ 📜index.scss<br />
 ┣ 📂types<br />
 ┃ ┣ 📜admin.d.ts<br />
 ┃ ┗ 📜heartRate.d.ts<br />
 ┣ 📂utils<br />
 ┃ ┣ 📜getActiveBtn.ts<br />
 ┃ ┣ 📜getDatesFromStartToLast.ts<br />
 ┃ ┗ 📜login.ts<br />
 ┣ 📜declaration.d.ts<br />
 ┗ 📜index.tsx<br />

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
<details>
  <summary>펼치기</summary>
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
</details>

<br />

**로그인 UI**
<details>
  <summary>펼치기</summary>
로그인 UI 및 관련된 기능을 구현  

- validation

  - 아이디 및 비밀 번호를 미입력시 focus out 및 로그인 버튼을 누를 때 미입력된 요소에 경고 메세지를 요소 하단에 표시한다.
  - 미입력된 요소가 있다면 버튼의 스타일이 활성화되지 않으며 버튼을 누르더라도 요소 하단에 경고 메세지만 표시하고 로그인 요청을 보내지 않는다.


- 아이디 저장하기

  - 아이디 저장하기를 체크하면 로그인 로직을 통해 로그인이 성공했을 때 쿠키에 해당 아이디를 저장하고 다른 아이디로 새로 로그인할 경우 쿠키 값을 갱신한다.
  - 아이디 저장하기를 해제한다면 저장되어 있는 쿠키를 만료시킨다.
</details>

<br>

### 회원 관리
블라블라 작성하기


<br />

### 회원 관리 테이블
<details>
  <summary>펼치기</summary>

  - 검색 조건에 따른 검색 결과를 Table 태그를 사용해 출력
  
```tsx
const originMembers = useRecoilValue(searchMemberList);
const members = originMembers as IMember[];

...중략...

<p>전체 총 {members.length}명의 회원이 검색되었습니다.</p>
<div className={styles.tableWrapper}>
  <table>
    <thead>
      <tr>
        {header.map((headerName, index) => {
          const key = `${headerName}-${index}`;
          return <th key={key}>{headerName}</th>;
        })}
      </tr>
    </thead>
    <tbody>
      {members.map((member, index) => {
        const key = `${member}-${index}`;
        return (
          <tr key={key}>
            <td>{member.id}</td>
            <td>{member.crt_ymdt}</td>
            <td>{member.username}</td>
            <td>
              <Link to='/detailMember'>
                <button type='button' onClick={() => setSelectMember(member)}>
                  상세보기
                </button>
              </Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
```

  - 특정 회원의 `상세보기` 버튼을 클릭하면 해당 회원의 정보를 Recoil에 담은 후 해당 회원의 상세 정보 페이지로 이동

```tsx
export interface IMember {
  id: number;
  username: string;
  crt_ymdt: string;
}

export const selectMemberState = atom<IMember>({
  key: '#selectMemberState',
  default: {
    id: 0,
    username: '',
    crt_ymdt: '',
  },
});
```
```tsx
const [, setSelectMember] = useRecoilState(selectMemberState);
```

</details>

<br />

### 회원 상세 정보

<details>
  <summary>펼치기</summary>
- 회원 정보 테이블
    - '회원 관리'페이지에서 관리자가 선택한 회원 정보 출력

<br />

- 심박수 그래프
    - date picker로 선택된 날짜(startData,endDate) 값을 받아 해당되는 날짜의 심박수를 그래프로 표시
    - 선택한 기간이 하루일 때, 10분 단위로 심박수 표시
    - 선택한 기간이 2일 이상일 때, 일 단위로 심박수 표시
</details>


<br />


### 조회 기간 컴포넌트

<details>
<summary>펼치기</summary>

[https://user-images.githubusercontent.com/69146527/171102893-05149745-c2e8-4383-941e-f893eb60d659.mov](https://user-images.githubusercontent.com/69146527/171102893-05149745-c2e8-4383-941e-f893eb60d659.mov)

👉 [자세히 보기](https://github.com/wanted-pre-onboarding-FE-01/moa-health-admin/blob/main/report/%EC%A0%95%EC%84%A0%EB%AF%B8%20-%20%EC%A1%B0%ED%9A%8C%20%EA%B8%B0%EA%B0%84%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8.md)

- No Library

    - 직접 만든 date-range-picker
    - 이유: 최대한 기획된 디자인과 기능에 맞추기 위하여
- 3개의 퀵버튼(`오늘`, `1주일`, `전체`) 구현
- 페이지별 재사용
    - 회원 관리 페이지, 그래프 2개(심박 수, 걸음 수)
    - 개별적인 날짜 조회 가능 (컴포넌트별 state 모두 분리)
- UI와 기능의 파일 분리
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
