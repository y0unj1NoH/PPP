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

  padding: 4px 10px;
  border-radius: 6px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Tag = ({ tag }) => {
  return (
    <Wrapper backgroundColor={colorStyle[tag] || colorStyle.default}>
      <Text size={12} color="white">
        {tag}
      </Text>
    </Wrapper>
  );
};

export default Tag;

