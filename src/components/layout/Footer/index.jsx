import styled from "@emotion/styled";
import Icon from "../../common/Icon";
import Text from "../../common/Text";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  // width: 100% 하니까 오버플로우 됐는데 보니까 부모값이 fix라서 그런 것이었다.
  width: calc(100% - 32px);
  padding: 0 16px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <IconContainer>
        <Icon.Github />
        <Icon.Default name="mail" size={60} color="#2C2A4A" />
      </IconContainer>
      <Text size="small" color="#2C2A4A">
        copyrightⓒ 2024 All rights reserved
      </Text>
    </FooterContainer>
  );
};

export default Footer;

