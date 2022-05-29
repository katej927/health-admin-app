import StepDataGraph from 'routes/detailMember/stepDataGraph';

const DetailMember = () => {
  // 리코일로 수정.
  const {
    id: selectedID,
    username,
    crt_ymdt: _,
  } = {
    id: 1,
    username: '',
    crt_ymdt: '',
  };

  return (
    <div>
      <StepDataGraph selectedID={selectedID} />
      {/* 심박수 그래프 */}
    </div>
  );
};

export default DetailMember;
