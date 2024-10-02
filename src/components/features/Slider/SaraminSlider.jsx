// Test
import LabelSlider from "../../common/LabelSlider";
import Card from "../Card";

// TODO: 하드 코딩 수정
const SaraminSlider = () => {
  const data = {
    url: "http://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=27614114&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
    company: {
      name: "(주)사람인"
    },
    position: {
      title: "(주)사람인 사무보조·문서작성 경력 채용합니다",
      location: {
        name: "서울 > 관악구"
      },
      "experience-level": {
        name: "신입"
      },
      "required-education-level": {
        name: "대학교졸업(4년)이상"
      }
    },
    "expiration-date": "2019-06-29T23:59:59+0900"
  };
  return (
    <LabelSlider label="어머, 이건 꼭 봐야돼! 채용 정보" slidesPerView={3}>
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
    </LabelSlider>
  );
};

export default SaraminSlider;

