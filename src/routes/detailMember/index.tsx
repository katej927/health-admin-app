import WhiteSection from 'components/whiteSection';
import HeartRateDataGraph from 'routes/detailMember/heartRateDataGraph';
// import StepDataGraph from "routes/detailMember/stepDataGraph"

const DetailMember = () => {
  return (
    <WhiteSection>
      <div>
        <HeartRateDataGraph />
        {/* <StepDataGraph/> */}
      </div>
    </WhiteSection>
  );
};

export default DetailMember;
