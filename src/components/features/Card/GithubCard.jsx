import styled from "@emotion/styled";
import Image from "../../common/Image";
import Icon from "../../common/Icon";
import Text from "../../common/Text";

const CardContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  max-width: 280px;

  padding: 12px;

  background-color: #0e2234;
  border-radius: 10px;
`;

const ImageBackground = styled.div`
  position: relative;

  width: 130px;
  height: 130px;

  // 모바일 150px, 데스크탑 130px

  background-color: #000;

  border-radius: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 130px;
  text-align: center;
`;

const GithubCard = ({ data }) => {
  const { html_url: url, name: title, description, owner } = data;

  const ownerProfile = owner.avatar_url;
  const ownerName = owner.login;

  const githubImageStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1
  };

  const profileStyle = {
    position: "absolute",
    right: "5%",
    bottom: "5%",
    zIndex: 10,
    // transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    // TODO: 이미지가 검은 색일 수도 있어서 보더 스타일 정해야 할듯
    border: "1px solid #fff"
  };

  const descriptionStyle = {
    fontSize: "12px",
    color: "#fff",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical"
  };
  return (
    <CardContainer onClick={() => window.open(url)}>
      <ImageBackground>
        <div style={{ ...githubImageStyle }}>
          <Icon.Github size={120} color="#fff" />
        </div>
        <Image
          lazy
          src={ownerProfile}
          width={34}
          height={34}
          alt={ownerName}
          mode="cover"
          style={{ ...profileStyle }}
        />
      </ImageBackground>
      <TextContainer>
        <Text size="large" color="#fff" strong>
          {title}
        </Text>
        {/* TODO: 말줄임 스타일 적용하니까 props가 안먹어서 개선 필요함 */}
        <Text size="small" color="#fff" style={{ ...descriptionStyle }}>
          {description}
        </Text>
      </TextContainer>
    </CardContainer>
  );
};

export default GithubCard;

