// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// TODO: 모바일 버전에서 페이지네이션 기능 추가
// import "swiper/css/pagination";

import styled from "@emotion/styled";
import Text from "../../common/Text";

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 16px;

  position: relative;

  // 너비를 안주면 왜 오른쪽으로 쭉 늘어나는지 모르겠음
  width: 100%;

  // border: 1px solid red;

  & .swiper {
    position: static;
    width: 100%;
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
    transform: translateY(20%);

    background-color: transparent;

    &::after {
      font-size: 15px;
      font-weight: 900;
      color: #2a2a37;
    }
  }

  & .swiper-button-prev {
    right: 30px ;
  }
  }
`;

const LabelSlider = ({ children, label, slidesPerView = 3 }) => {
  const perView = slidesPerView;
  return (
    <SliderContainer>
      <Text size="large" strong color="#252525">
        {label}
      </Text>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          1910: {
            slidesPerView: perView + 1,
            spaceBetween: 30
          },

          // 내 마음대로 고쳤는데 괜찮나..?
          // 기존 view: 1200
          1500: {
            slidesPerView: perView,
            spaceBetween: 30
          },
          // 블로그 포스팅 크기 조절로 임의로 삽입
          1100: {
            slidesPerView: perView - 1,
            spaceBetween: perView === 4 ? 20 : 30
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }}
        navigation={true}
        // pagination={{
        //   clickable: true
        // }}
        // modules={[Pagination]}
        modules={[Navigation]}
        className="mySwiper"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>
            <div>{child}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default LabelSlider;

