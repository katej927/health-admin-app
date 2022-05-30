import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { searchMemberList } from 'states/searchMemberList';
import { selectMemberState, IMember } from 'states/selectMember';

import styles from './showMember.module.scss';

const ShowMember = () => {
  const header = ['회원번호', '가입일', '로그인ID', '상세'];
  const originMembers = useRecoilValue(searchMemberList);
  const [, setSelectMember] = useRecoilState(selectMemberState);
  const members = originMembers as IMember[];

  return (
    <div className={styles.boxWrapper}>
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
    </div>
  );
};
export default ShowMember;
