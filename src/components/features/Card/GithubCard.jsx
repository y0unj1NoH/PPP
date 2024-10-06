import styled from "@emotion/styled";
import Image from "../../common/Image";
import Icon from "../../common/Icon";
import Text from "../../common/Text";

const CardContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  width: 100%;

  padding: 12px;

  background-color: #0e2234;
  border-radius: 10px;

  cursor: pointer;
`;

const ImageBackground = styled.div`
  position: relative;

  width: 50%;
  padding-top: 50%;

  background-color: #000;

  border-radius: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 50%;
  text-align: center;
`;

const parseGithubData = (data) => {
  return {
    url: data.html_url,
    title: data.name,
    description: data.description,
    owner: {
      profile: data.owner.avatar_url,
      name: data.owner.login
    }
  };
};

const GithubCard = ({ data }) => {
  const { url, title, description, owner } = parseGithubData(data);

  const githubImageStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    width: "90%"
  };

  const profileStyle = {
    position: "absolute",
    right: "5%",
    bottom: "5%",
    zIndex: 10,
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
          <Icon.Github size="100%" color="#fff" />
        </div>
        <Image
          lazy
          src={owner.profile}
          width={34}
          height={34}
          alt={owner.name}
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
