import styled from "styled-components";
import FeedCard from "components/Common/FeedCard";
import { theme } from "styles/theme";
import { travelCardData } from "./travelData";

const FeedContainer = () => {
  const handleHeartClick = (id: number, isFavorite: boolean) => {
    console.log(`Card ${id} heart clicked: ${isFavorite}`);
  };

  return (
    <Container>
      <CardGrid>
        {travelCardData.map((card) => (
          <FeedCard
            key={card.id}
            id={card.id}
            image={card.image}
            location={card.location}
            title={card.title}
            originalPrice={card.originalPrice}
            salePrice={card.salePrice}
            hasSaleBadge={card.hasSaleBadge}
            rating={card.rating}
            additionalBadge={card.additionalBadge}
            onHeartClick={handleHeartClick}
          />
        ))}
      </CardGrid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default FeedContainer;
