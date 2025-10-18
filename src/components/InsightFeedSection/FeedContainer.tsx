import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeedCard from "components/Common/FeedCard";
import { Pagination } from "components/Common";
import { theme } from "styles/theme";
import {
  travelCardData,
  getTotalPages,
  getPaginatedData,
  TravelCardData,
} from "./travelData";

interface FeedContainerProps {
  activeCategory?: string;
  cardsByCategory?: Record<string, TravelCardData[]>;
  loadingStates?: Record<string, boolean>;
}

const FeedContainer: React.FC<FeedContainerProps> = ({
  activeCategory = "accommodation",
  cardsByCategory = {},
  loadingStates = {},
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleHeartClick = (id: number, isFavorite: boolean) => {
    console.log(`Card ${id} heart clicked: ${isFavorite}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 카테고리 변경 시 페이지를 1로 리셋
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // 현재 카테고리의 데이터 가져오기
  const currentCategoryData = cardsByCategory[activeCategory] || travelCardData;
  const isCategoryLoading = loadingStates[activeCategory] || false;

  const totalPages = getTotalPages(currentCategoryData.length);
  const paginatedData = getPaginatedData(currentCategoryData, currentPage);

  return (
    <Container>
      {isCategoryLoading ? (
        <LoadingContainer>
          <LoadingSpinner />
          <LoadingText>데이터를 불러오는 중...</LoadingText>
        </LoadingContainer>
      ) : (
        <>
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
        </>
      )}
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

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${theme.colors.border.primary};
  border-top: 4px solid ${theme.colors.brand.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.div`
  font-size: ${theme.fontSize.base};
  color: ${theme.colors.text.secondary};
  font-weight: ${theme.fontWeight.medium};
`;

export default FeedContainer;
