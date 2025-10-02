import { useMediaQuery } from "react-responsive";
import Tablet from "./TabletHeroSection";
import Desktop from "./DesktopHeroSection";

const HeroSection = () => {
  const isTablet = useMediaQuery({ maxWidth: 920 });

  if (isTablet) {
    return <Tablet />;
  }

  return <Desktop />;
};

export default HeroSection;
