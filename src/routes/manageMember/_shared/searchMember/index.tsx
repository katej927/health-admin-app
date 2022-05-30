import { useState } from 'react';
import data from '../../../../data/member_data.json';
import styles from './searchMember.module.scss';
import { useSetRecoilState } from 'recoil';
import { searchMemberList } from '../../../../states/searchMemberList';

interface IKeywordObj {
  [key: string]: string | number;
}
const SearchMember = () => {
  const [searchKeyword, setSearchKeyword] = useState<IKeywordObj>({
    username: '전체',
    id: '전체',
  });

  const setMemberListState = useSetRecoilState(searchMemberList);

  // 선미님꺼 컴포넌트 import하면 삭제할것
  const date = { startDate: '2022-02-23 11:00:29', endDate: '2022-02-27 11:00:29' };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchKeyword({ ...searchKeyword, [name]: value });
  };

  const resetInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setSearchKeyword({ ...searchKeyword, [name]: '' });
  };

  const setDefaultInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value === '') setSearchKeyword({ ...searchKeyword, [name]: '전체' });
  };

  const onSubmitForm = () => {
    let filteredArr = data;
    if (searchKeyword.username !== '전체') {
      filteredArr = data.filter((el) => el.username === searchKeyword.username);
    }

    if (filteredArr.length !== 0 && searchKeyword.id !== '전체') {
      filteredArr = filteredArr.filter((el) => el.id === Number(searchKeyword.id));
    }

    if (filteredArr.length !== 0) {
      filteredArr = filteredArr.filter(
        (el) => new Date(el.crt_ymdt) > new Date(date.startDate) && new Date(el.crt_ymdt) < new Date(date.endDate)
      );
    }

    setMemberListState(filteredArr);
  };

  return (
    <div className={styles.searchWrapper}>
      <h1>회원 검색</h1>
      <form className={styles.searchForm} onSubmit={onSubmitForm}>
        <div className={styles.inputWrapper}>
          <p>로그인 ID</p>
          <input
            name='username'
            onBlur={setDefaultInputValue}
            onFocus={resetInputValue}
            onChange={onInputChange}
            value={searchKeyword.username}
          />
        </div>
        <div className={styles.inputWrapper}>
          <p>회원 번호</p>
          <input
            name='id'
            onBlur={setDefaultInputValue}
            onFocus={resetInputValue}
            onChange={onInputChange}
            value={searchKeyword.id}
          />
        </div>
        <button className={styles.submitBtn} onClick={onSubmitForm} type='button'>
          검색
        </button>
      </form>
    </div>
  );
};

export default SearchMember;
