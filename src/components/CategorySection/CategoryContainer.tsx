import styled from "styled-components";
import { theme } from "styles/theme";

const cards = [
  {
    title: "여행지",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=640&auto=format&fit=crop",
    bg: "#c9f1ff",
  },
  {
    title: "여행 팁",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=640&auto=format&fit=crop",
    bg: "#c9f1ff",
  },
  {
    title: "여행 계획",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=640&auto=format&fit=crop",
    bg: "#cfeeee",
  },
];

const CategoryContainer = () => {
  return (
    <Row>
      {cards.map((card) => (
        <Card key={card.title}>
          <BackgroundImage src={card.image} alt={card.title} />
          <Overlay />
          <CardTitle>{card.title}</CardTitle>
        </Card>
      ))}
    </Row>
  );
};

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.625rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: 1rem;
  }
`;

const Card = styled.div`
  position: relative;
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all ${theme.transition.normal};
  height: 8rem;

  &:hover {
    transform: translateY(-4px);
    box-shadow: rgba(0, 0, 0, 0.15) 0 8px 30px;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 9.5rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    height: 11rem;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 2;
`;

const CardTitle = styled.h3`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  margin: 0;
  color: #ffffff;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.lg};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 3;
  letter-spacing: -0.02em;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSize.xl};
    bottom: 1.25rem;
    left: 1.25rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSize.xxl};
    bottom: 1.5rem;
    left: 1.5rem;
  }
`;

export default CategoryContainer;
