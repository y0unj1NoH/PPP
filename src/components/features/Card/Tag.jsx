import styled from "@emotion/styled";
import Text from "../../common/Text";

const colorStyle = {
  default: "#9574FF",
  html: "#FF6827",
  css: "#487FFF",
  javascript: "#FFE02F",
  react: "#61DAFB"
};

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 4px 6px;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Tag = ({ tag }) => {
  return (
    <Wrapper backgroundColor={colorStyle[tag] || colorStyle.default}>
      {/* TODO: Text 컴포넌트 props.style 쓰면 기존 params 적용안되는 버그 확인 */}
      <Text size={1.5} color="white">
        {tag}
      </Text>
    </Wrapper>
  );
};

export default Tag;
