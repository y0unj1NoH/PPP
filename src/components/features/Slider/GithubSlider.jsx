import LabelSlider from "../../common/LabelSlider";
import Card from "../Card";

// TODO: 하드 코딩 수정
const GithubSlider = ({ data }) => {
  // const data = {
  //   name: "aws-ai-stack",
  //   private: false,
  //   owner: {
  //     login: "serverless",
  //     avatar_url: "https://avatars.githubusercontent.com/u/13742415?v=4"
  //   },
  //   html_url: "https://github.com/serverless/aws-ai-stack",
  //   description:
  //     "AWS AI Stack – A ready-to-use, full-stack boilerplate project for building serverless AI applications on AWS"
  // };
  return (
    <LabelSlider label="매력적인 리포지토리" slidesPerView={4}>
      {data.map((item, index) => (
        <Card.GithubCard key={index} data={item} />
      ))}
    </LabelSlider>
  );
};

export default GithubSlider;

