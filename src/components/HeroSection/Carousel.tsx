import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styled from "styled-components";
import carousel1 from "../../assets/dummy/city1.jpg";
import carousel2 from "../../assets/dummy/city2.jpg";
import carousel3 from "../../assets/dummy/city3.jpg";
// Swiper CSS
import "swiper/css";

const Carousel = () => {
  const images = [
    carousel1, // 궁궐 이미지
    carousel2, // 다른 한국 이미지들
    carousel3,
  ];
  return (
    <SwiperContainer>
      <Swiper
        modules={[Autoplay]}
        effect="slide"
        autoplay={{
          delay: 3000, // 3초 간격
          disableOnInteraction: false,
        }}
        loop={true}
        speed={500}
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={0}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <SlideImage src={image} alt={`Hero image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Carousel;
