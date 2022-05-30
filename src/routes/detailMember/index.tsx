import { useRecoilState } from 'recoil';
import { selectMemberState } from 'states/selectMember';

const DetailMember = () => {
  const [selectMember, setSelectMember] = useRecoilState(selectMemberState);
  console.log('도희님', selectMember);
  return (
    <div>
      <p>넘겨받은데이터 출력</p>
    </div>
  );
};
export default DetailMember;
