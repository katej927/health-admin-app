import { useState } from 'react';
import { IMember } from 'types/member';
import data from '../../../../data/member_data.json';

interface IData {
  id: string | number;
  username: string;
  crt_ymdt: string;
}

interface IKeywordObj {
  [key: string]: string | number;
}
const SearchMember = () => {
  const [searchKeyword, setSearchKeyword] = useState<IKeywordObj>({
    username: '전체',
    id: '전체',
  });

  const date = { startDate: '2022-02-23 11:00:29', endDate: '2022-02-27 11:00:29' };

  const [filteredData, setFilteredData] = useState(data);
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

  // const onSubmitForm = () => {
  //   const keyArr = Object.keys(searchKeyword);
  //   let result = data;
  //   // eslint-disable-next-line no-plusplus
  //   for (let i = 0; i < keyArr.length; i++) {
  //     const key = keyArr[i];
  //     if (searchKeyword[key] === '전체') {
  //       result = result;
  //     } else if (result.length > 0) {
  //       result = result.filter((el: IKeywordObj) => el[key] == searchKeyword[key]);
  //     }
  //   }
  //   console.log(result);

  //   // return result;
  // };

  const onSubmitForm = () => {
    let filtered = data;
    if (searchKeyword.username !== '전체') {
      filtered = data.filter((el) => el.username === searchKeyword.username);
    }

    if (filtered.length !== 0 && searchKeyword.id !== '전체') {
      filtered = filtered.filter((el) => el.id === Number(searchKeyword.id));
    }
  };

  return (
    <div>
      <h1>회원 검색</h1>
      <form
      // onSubmit={onSubmitForm}
      >
        <div>
          <p>로그인 ID</p>
          <input
            name='username'
            onBlur={setDefaultInputValue}
            onFocus={resetInputValue}
            onChange={onInputChange}
            value={searchKeyword.username}
          />
        </div>
        <div>
          <p>회원 번호</p>
          <input
            name='id'
            onBlur={setDefaultInputValue}
            onFocus={resetInputValue}
            onChange={onInputChange}
            value={searchKeyword.id}
          />
        </div>
        <button onClick={onSubmitForm} type='button'>
          검색
        </button>
      </form>
    </div>
  );
};

export default SearchMember;
