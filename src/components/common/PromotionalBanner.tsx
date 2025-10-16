import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { theme } from "styles/theme";
import { useState } from "react";

interface BannerData {
  id: number;
  image: string;
  link?: string;
}

interface PromotionalBannerProps {
  banners: BannerData[];
  autoPlay?: boolean;
  showPagination?: boolean;
  onPlusClick?: () => void;
  size?: "s" | "m" | "l";
}

const PromotionalBanner = ({
  banners,
  autoPlay = true,
  showPagination = true,
  onPlusClick,
  size = "m",
}: PromotionalBannerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <BannerContainer $size={size}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={
            autoPlay
              ? {
                  delay: 3000,
                  disableOnInteraction: false,
                }
              : false
          }
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
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <BannerSlide>
                {banner.link ? (
                  <Link to={banner.link}>
                    <BannerImage
                      src={banner.image}
                      alt={`Banner ${banner.id}`}
                    />
                  </Link>
                ) : (
                  <BannerImage src={banner.image} alt={`Banner ${banner.id}`} />
                )}
              </BannerSlide>
            </SwiperSlide>
          ))}
        </Swiper>

        {showPagination && (
          <FixedPaginationWrapper>
            <PaginationIndicator>
              <CurrentPage>{activeIndex + 1}</CurrentPage>
              <Separator />
              <TotalPages>{banners.length}</TotalPages>
              <PlusButton onClick={onPlusClick}>+</PlusButton>
            </PaginationIndicator>
          </FixedPaginationWrapper>
        )}
      </BannerContainer>
    </>
  );
};

const BannerContainer = styled.div<{ $size: "s" | "m" | "l" }>`
  width: 100%;
  border-radius: 0.75rem;
  overflow: hidden;
  position: relative;
  margin: 1rem 0px;
  padding: 0px 1rem;
  height: ${(p) =>
    p.$size === "s" ? "4rem" : p.$size === "m" ? "6rem" : "8rem"};

  .swiper {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: ${(p) =>
      p.$size === "s" ? "4rem" : p.$size === "m" ? "6rem" : "8rem"};
    padding: 0px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    height: ${(p) =>
      p.$size === "s" ? "6rem" : p.$size === "m" ? "8rem" : "12rem"};
    padding: 0px;
  }
`;

const BannerSlide = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  border-radius: inherit;
  overflow: hidden;
`;

const BannerImage = styled.img`
  transition: transform 0.3s ease;
  border-radius: inherit;

  &:hover {
    transform: scale(1.02);
  }
`;

const FixedPaginationWrapper = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 1.5rem;
  z-index: 1000;
  pointer-events: none;

  @media (min-width: ${theme.breakpoints.tablet}) {
    bottom: 0.75rem;
    right: 0.75rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    bottom: 1rem;
    right: 1rem;
  }
`;

const PaginationIndicator = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  gap: 0.25rem;
  color: white;
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight.medium};
  pointer-events: auto;
  backdrop-filter: blur(8px);

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0.375rem 0.625rem;
    font-size: ${theme.fontSize.sm};
  }
`;

const CurrentPage = styled.span`
  font-weight: ${theme.fontWeight.bold};
`;

const Separator = styled.div`
  width: 1px;
  height: 0.75rem;
  background: rgba(255, 255, 255, 0.5);
`;

const TotalPages = styled.span`
  font-weight: ${theme.fontWeight.normal};
`;

const PlusButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.bold};
  cursor: pointer;
  padding: 0;
  margin-left: 0.25rem;
  transition: opacity ${theme.transition.fast};

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSize.base};
  }
`;

export default PromotionalBanner;
