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

const dateToStr = (published_date) => {
  const dateObj = new Date(published_date);

  const date = `${dateObj.toLocaleString("en-US", { month: "short" })} ${dateObj
    .getDate()
    .toString()
    .padStart(2, "0")}, ${dateObj.getFullYear()}`;
  return date;
};

const BlogCard = ({ data }) => {
  const { url, cover_image, tag_list, title, user, published_timestamp } = data;

  const image = cover_image.replace(
    "width=1000,height=420",
    "width=300,height=180"
  );

  const userProfile = user.profile_image_90;
  const userName = user.name;

  const date = dateToStr(published_timestamp);

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
            {tag_list.map((tag, index) => (
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
              src={userProfile}
              width={27}
              height={27}
              alt={userName}
              mode="cover"
              style={{ ...profileStyle }}
            />
            <Text size="small" color="#97989F">
              {userName}
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

