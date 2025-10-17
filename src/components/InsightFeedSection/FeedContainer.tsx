import React, { useState } from "react";
import styled from "styled-components";
import FeedCard from "components/Common/FeedCard";
import { Pagination } from "components/Common";
import { theme } from "styles/theme";
import { travelCardData, getTotalPages, getPaginatedData } from "./travelData";

const FeedContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleHeartClick = (id: number, isFavorite: boolean) => {
    console.log(`Card ${id} heart clicked: ${isFavorite}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = getTotalPages(travelCardData.length);
  const paginatedData = getPaginatedData(travelCardData, currentPage);

  return (
    <Container>
      <CardGrid>
        {paginatedData.map((card) => (
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        showPrevNext={true}
        maxVisiblePages={5}
      />
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
