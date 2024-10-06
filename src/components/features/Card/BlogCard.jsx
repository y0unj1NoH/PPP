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
  height: 350px;
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

  .blog-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    min-height: 4rem;
  }
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

const BlogCard = ({ data }) => {
  const { url, image, tags, title, user, date } = data;

  const imageStyle = {
    maxWidth: "100%",
    borderRadius: "22px"
  };

  const nameStyle = {
    fontSize: user.name.length > 10 ? "1.6rem" : "1.8rem", // 10자 이상이면 글씨 크기 줄임
    color: "#97989F"
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
        width="100%"
        height="100%"
        alt={title}
        mode="cover"
        style={{ ...imageStyle }}
      />
      <ContentContainer>
        <TitleContainer>
          <TagContainer>
            {tags
              .filter((tag) => tag.length <= 10)
              .slice(0, 3)
              .map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
          </TagContainer>
          <Text className="blog-title" block size={2} strong color="#181A2A">
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
            <Text size="large" color="#97989F" style={{ ...nameStyle }}>
              {user.name}
            </Text>
          </AuthorContainer>
          <Text size={1.6} color="#97989F">
            {date}
          </Text>
        </FooterContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default BlogCard;
