import styled from "@emotion/styled";
import useNewsData from "../../../hooks/useNewsData";
import Slider from "../Slider";
import Spinner from "../../common/Spinner";

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const News = () => {
  const { data, loading, error } = useNewsData();

  return (
    <>
      {loading ? (
        <SpinnerWrapper>
          <Spinner size={48} color="#907ad6" />
        </SpinnerWrapper>
      ) : (
        <SliderContainer>
          <Slider.SaraminSlider data={data.jobs} />
          <Slider.BlogSlider data={data.articles} />
          <Slider.GithubSlider data={data.projects} />
        </SliderContainer>
      )}
    </>
  );
};

export default News;
