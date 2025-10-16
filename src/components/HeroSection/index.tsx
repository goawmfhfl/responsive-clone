import { useMediaQuery } from "react-responsive";
import Tablet from "./TabletHeroSection";
import Desktop from "./DesktopHeroSection";
import styled from "styled-components";
import PromotionalBanner from "./PromotionalBanner";

const HeroSection = () => {
  const isTablet = useMediaQuery({ maxWidth: 920 });

  return (
    <Container>
      {isTablet ? <Tablet /> : <Desktop />}
      <PromotionalBanner />
    </Container>
  );
};

const Container = styled.div``;

export default HeroSection;
