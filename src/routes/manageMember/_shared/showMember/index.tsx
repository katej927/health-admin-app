import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { selectMemberState } from 'states/selectMember';

const ShowMember = () => {
  const header = ['회원번호', '가입일', '로그인ID', '상세'];
  // const members = getMemberData(검색조건);
  const members = [
    {
      id: 1,
      username: 'dohee',
      crt_ymdt: '2022-02-26 11:00:29',
    },
    {
      id: 2,
      username: 'daseul',
      crt_ymdt: '2022-04-16 06:11:40',
    },
    {
      id: 3,
      username: 'minhyo',
      crt_ymdt: '2022-04-17 00:21:10',
    },
  ];

  const [, setSelectMember] = useRecoilState(selectMemberState);

  return (
    <div>
      <p>
        전체 총 <span>{members.length}명의 회원이 검색되었습니다.</span>
      </p>
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
                  <Link to='detailMember'>
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
  );
};
export default ShowMember;
