import Slider from "../../components/features/Slider";

export default {
  title: "Features/Slider",
  component: Slider
};

import Card from "../../components/features/Card";

export const Default = () => {
  return (
    <Slider>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </Slider>
  );
};

export const Saramin = () => {
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
    <Slider>
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
      <Card.SaraminCard data={data} />
    </Slider>
  );
};

export const Blog = () => {
  const data = {
    title:
      "Frontend Dev + Data Structures & Algorithms: How DSA Can Power Your React App ⚡",
    url: "https://dev.to/jayantbh/frontend-dev-data-structures-algorithms-how-dsa-can-power-your-react-app-491a",
    published_timestamp: "2024-09-08T09:01:48Z",
    cover_image:
      "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fivfpbxw46rklqj40wtqy.png",
    tag_list: ["webdev", "javascript", "beginners", "react"],
    user: {
      name: "Jayant Bhawal",
      profile_image:
        "https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F254865%2F9eaccf4b-b8b4-4761-9040-bc986853a276.png",
      profile_image_90:
        "https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F254865%2F9eaccf4b-b8b4-4761-9040-bc986853a276.png"
    }
  };

  console.log(data);
  return (
    <Slider slidesPerView={4}>
      <Card.BlogCard data={data} />
      <Card.BlogCard data={data} />
      <Card.BlogCard data={data} />
      <Card.BlogCard data={data} />
      <Card.BlogCard data={data} />
      <Card.BlogCard data={data} />
      <Card.BlogCard data={data} />
      <Card.BlogCard data={data} />
      <Card.BlogCard data={data} />
    </Slider>
  );
};

export const Github = () => {
  const data = {
    name: "aws-ai-stack",
    private: false,
    owner: {
      login: "serverless",
      avatar_url: "https://avatars.githubusercontent.com/u/13742415?v=4"
    },
    html_url: "https://github.com/serverless/aws-ai-stack",
    description:
      "AWS AI Stack – A ready-to-use, full-stack boilerplate project for building serverless AI applications on AWS"
  };

  return (
    <Slider slidesPerView={4}>
      <Card.GithubCard data={data} />
      <Card.GithubCard data={data} />
      <Card.GithubCard data={data} />
      <Card.GithubCard data={data} />
      <Card.GithubCard data={data} />
      <Card.GithubCard data={data} />
      <Card.GithubCard data={data} />
      <Card.GithubCard data={data} />
      <Card.GithubCard data={data} />
    </Slider>
  );
};

