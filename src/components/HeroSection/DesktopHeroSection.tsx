import styled from "styled-components";
import Carousel from "./Carousel";
import SearchOverlay from "./SearchOverlay";

const DesktopHeroSection = () => {
  return (
    <Container>
      <Carousel />
      <SearchOverlay />
    </Container>
  );
};
const Container = styled.section`
  position: relative;

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  margin-left: calc(50% - 50vw);
  width: 100vw;
  height: 25rem;
  overflow: hidden;

  margin-bottom: 2.5rem;
`;

export default DesktopHeroSection;
