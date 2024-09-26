import styled from "@emotion/styled";
import Icon from "../../common/Icon";
import Text from "../../common/Text";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  padding: 16px 0;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <IconContainer>
        <Icon.Github />
        <Icon name="mail" size={60} color="#2C2A4A" />
      </IconContainer>
      <Text color="#2C2A4A">copyrightⓒ 2024 All rights reserved</Text>
    </FooterContainer>
  );
};

export default Footer;

