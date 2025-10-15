import { useMediaQuery } from "react-responsive";
import Tablet from "./TabletHeroSection";
import Desktop from "./DesktopHeroSection";
import styled from "styled-components";
import { theme } from "styles/theme";

const HeroSection = () => {
  const isTablet = useMediaQuery({ maxWidth: 920 });

  return <Container>{isTablet ? <Tablet /> : <Desktop />}</Container>;
};

const Container = styled.div`
  @media (max-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 4.25rem;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0px 1rem;
  }
`;

export default HeroSection;
