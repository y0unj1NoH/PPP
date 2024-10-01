import styled from "@emotion/styled";
import Image from "../../common/Image";
import Tag from "./Tag";
import Text from "../../common/Text";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  width: 300px;
  padding: 12px;

  border-radius: 9px;
  border: 1px solid #e8e8ea;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 6px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 6px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

// TODO: date 처리 함수들 정리 필요
const dateToStr = (published_date) => {
  const dateObj = new Date(published_date);

  const date = `${dateObj.toLocaleString("en-US", { month: "short" })} ${dateObj
    .getDate()
    .toString()
    .padStart(2, "0")}, ${dateObj.getFullYear()}`;
  return date;
};

const parseBlogData = (data) => {
  const image = data.cover_image.replace(
    "width=1000,height=420",
    "width=300,height=180"
  );
  const date = dateToStr(data.published_timestamp);

  return {
    url: data.url,
    image,
    tags: data.tag_list,
    title: data.title,
    user: {
      profile: data.user.profile_image_90,
      name: data.user.name
    },
    date
  };
};

const BlogCard = ({ data }) => {
  const { url, image, tags, title, user, date } = parseBlogData(data);

  const imageStyle = {
    width: "100%",
    borderRadius: "22px"
  };

  const profileStyle = {
    borderRadius: "50%"
  };

  // TODO: 지저분한 컨테이너 정리하기
  return (
    <CardContainer onClick={() => window.open(url)}>
      <Image
        lazy
        src={image}
        block
        height={180}
        alt={title}
        mode="cover"
        style={{ ...imageStyle }}
      />
      <ContentContainer>
        <TitleContainer>
          <TagContainer>
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </TagContainer>
          <Text size="large" strong color="#181A2A">
            {title}
          </Text>
        </TitleContainer>
        <FooterContainer>
          <AuthorContainer>
            <Image
              lazy
              src={user.profile}
              width={27}
              height={27}
              alt={user.name}
              mode="cover"
              style={{ ...profileStyle }}
            />
            <Text size="small" color="#97989F">
              {user.name}
            </Text>
          </AuthorContainer>
          <Text size="small" color="#97989F">
            {date}
          </Text>
        </FooterContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default BlogCard;

