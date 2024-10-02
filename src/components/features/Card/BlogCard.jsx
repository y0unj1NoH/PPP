import styled from "@emotion/styled";
import Image from "../../common/Image";
import Tag from "./Tag";
import Text from "../../common/Text";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  width: 100%;
  padding: 12px;

  border-radius: 9px;
  border: 1px solid #e8e8ea;

  cursor: pointer;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 100%;

  padding: 6px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 100%;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 4px;

  width: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
    `width=${1000},height="auto"`
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
    maxWidth: "100%",
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
        alt={title}
        mode="cover"
        style={{ ...imageStyle }}
      />
      <ContentContainer>
        <TitleContainer>
          <TagContainer>
            {tags.slice(0, 3).map((tag, index) => (
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

