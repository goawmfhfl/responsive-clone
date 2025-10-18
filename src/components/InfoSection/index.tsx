import React from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import { InfoCard } from "components/Common";
import { infoCardsData } from "./infoData";

const InfoSection = () => {
  const handleCardClick = (id: number) => {
    console.log(`Info card ${id} clicked`);
    // 여기에 카드 클릭 시 동작을 추가할 수 있습니다
  };

  return (
    <Container>
      <Title>유용한 한국 여행 정보</Title>
      <CardGrid>
        {infoCardsData.map((card) => (
          <InfoCard
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
            onClick={handleCardClick}
          />
        ))}
      </CardGrid>
    </Container>
  );
};

const Container = styled.section`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: ${theme.spacing.xxxl} ${theme.spacing.xl};
  }
`;

const Title = styled.h2`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSize.xxl};
    margin-bottom: ${theme.spacing.xxl};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSize.xxxl};
    margin-bottom: 3rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.xl};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.xl};
  }
`;

export default InfoSection;
