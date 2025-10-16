import styled from "styled-components";
import { media } from "styles/media";
import { theme } from "styles/theme";

const Banner = () => {
  return (
    <Card>
      <Left>
        <Heading>Explore K beauty</Heading>
        <Sub>한국의 뷰티 트렌드를 한눈에</Sub>
      </Left>
      <Right>
        <Thumb
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=640&auto=format&fit=crop"
          alt="banner"
        />
      </Right>
    </Card>
  );
};

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(90deg, rgba(124, 212, 204, 0.15), #fff);
  border-radius: 0.75rem;
  margin: 0.75rem 1rem;
  padding: 0.75rem 1rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 1rem 1.25rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    gap: 1rem;
    padding: 1rem 1.5rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Heading = styled.h3`
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.semibold};
`;

const Sub = styled.p`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

const Right = styled.div`
  width: 4rem;
  height: 4rem;
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${theme.borderRadius.lg};
`;

export default Banner;
