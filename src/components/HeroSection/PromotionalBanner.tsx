import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { theme } from "styles/theme";

const PromotionalBanner = () => {
  const bannerData = [
    {
      id: 1,
      image: "/src/assets/dummy/city1.jpg",
      link: "https://example.com/city1",
    },
    {
      id: 2,
      image: "/src/assets/dummy/city2.jpg",
      link: "https://example.com/city2",
    },
    {
      id: 3,
      image: "/src/assets/dummy/city3.jpg",
      link: "https://example.com/city3",
    },
  ];

  return (
    <BannerContainer>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        touchRatio={1}
        touchAngle={45}
        threshold={5}
        longSwipesRatio={0.5}
        longSwipesMs={300}
        followFinger={true}
        allowTouchMove={true}
        resistance={true}
        resistanceRatio={0.85}
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerSlide>
              <ImageContainer>
                <Link to={banner.link}>
                  <BannerImage src={banner.image} />
                </Link>
              </ImageContainer>
            </BannerSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid #10b981;
  background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
  overflow: hidden;
  position: relative;

  margin: 1rem 0px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin: 1.25rem 0px;
  }
`;

const BannerSlide = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 5rem;

  border-radius: 0.5rem;

  overflow: hidden;
  position: relative;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export default PromotionalBanner;
