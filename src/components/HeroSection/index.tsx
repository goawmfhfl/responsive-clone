import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import Tablet from "./TabletHeroSection";
import Desktop from "./DesktopHeroSection";
import PromotionalBanner from "../common/PromotionalBanner";

const HeroSection = () => {
  const isTablet = useMediaQuery({ maxWidth: 920 });
  const banners = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <Container>
      {isTablet ? <Tablet /> : <Desktop />}
      <PromotionalBanner banners={banners} showPagination={true} size="l" />
    </Container>
  );
};

const Container = styled.div``;

export default HeroSection;
