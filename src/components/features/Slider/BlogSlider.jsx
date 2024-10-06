// Test
import LabelSlider from "../../common/LabelSlider";
import Card from "../Card";

// TODO: 하드 코딩 수정
const BlogSlider = ({ data }) => {
  //   const data = {
  //     title:
  //       "Frontend Dev + Data Structures & Algorithms: How DSA Can Power Your React App ⚡",
  //     url: "https://dev.to/jayantbh/frontend-dev-data-structures-algorithms-how-dsa-can-power-your-react-app-491a",
  //     published_timestamp: "2024-09-08T09:01:48Z",
  //     cover_image:
  //       "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fivfpbxw46rklqj40wtqy.png",
  //     tag_list: ["webdev", "javascript", "beginners", "react"],
  //     user: {
  //       name: "Jayant Bhawal",
  //       profile_image:
  //         "https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F254865%2F9eaccf4b-b8b4-4761-9040-bc986853a276.png",
  //       profile_image_90:
  //         "https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F254865%2F9eaccf4b-b8b4-4761-9040-bc986853a276.png"
  //     }
  //   };

  return (
    <LabelSlider label="MZ세대를 홀린 인기 포스팅" slidesPerView={4}>
      {data.map((item, index) => (
        <Card.BlogCard key={index} data={item} />
      ))}
    </LabelSlider>
  );
};
export default BlogSlider;

