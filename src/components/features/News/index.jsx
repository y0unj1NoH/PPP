import styled from "@emotion/styled";
import Slider from "../Slider";

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  width: 100%;
`;

const News = () => {
  return (
    <SliderContainer>
      <Slider.SaraminSlider />
      <Slider.BlogSlider />
      <Slider.GithubSlider />
    </SliderContainer>
  );
};

export default News;

