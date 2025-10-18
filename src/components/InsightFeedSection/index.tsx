import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ChevronDown } from "lucide-react";
import Keywords from "./Keywords";
import { theme } from "styles/theme";
import FeedContainer from "./FeedContainer";
import FeedCard from "components/Common/FeedCard";
import { mockData, TravelCardData } from "./travelData";

const InsightFeedSection = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [cardsByCategory, setCardsByCategory] = useState<
    Record<string, TravelCardData[]>
  >({});
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );
  const [activeCategory, setActiveCategory] = useState("accommodation");

  const categories = [
    {
      id: "accommodation",
      name: "숙소 데이터",
      icon: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=200&auto=format&fit=crop",
      subtitle: "가장 좋은 장소를 찾아보세요",
    },
    {
      id: "restaurant",
      name: "맛집 데이터",
      icon: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=200&auto=format&fit=crop",
      subtitle: "최신 지역 트렌드를 발견하세요",
    },
    {
      id: "cafe",
      name: "카페 데이터",
      icon: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=200&auto=format&fit=crop",
      subtitle: "카페 할인 최대 50%",
      isNew: true,
    },
    {
      id: "attractions",
      name: "관광지 데이터",
      icon: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=200&auto=format&fit=crop",
      subtitle: "활동 할인 최대 50%",
    },
    {
      id: "shopping",
      name: "쇼핑 데이터",
      icon: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=200&auto=format&fit=crop",
      subtitle: "필수품 할인 최대 50%",
    },
    {
      id: "transport",
      name: "교통 데이터",
      icon: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=200&auto=format&fit=crop",
      subtitle: "영어로 쉽게 예약하세요",
    },
    {
      id: "culture",
      name: "문화체험 데이터",
      icon: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=200&auto=format&fit=crop",
      subtitle: "뷰티 예약 쉽게 하세요",
    },
    {
      id: "nature",
      name: "자연 데이터",
      icon: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=200&auto=format&fit=crop",
      subtitle: "커스텀 체험 즐기세요",
    },
  ];

  // 카테고리별 데이터 로딩 시뮬레이션
  useEffect(() => {
    const loadCategoryData = async (categoryId: string) => {
      if (cardsByCategory[categoryId]) return; // 이미 로드된 데이터는 다시 로드하지 않음

      setLoadingStates((prev) => ({ ...prev, [categoryId]: true }));

      // 서버 API 호출 시뮬레이션
      setTimeout(
        () => {
          setCardsByCategory((prev) => ({
            ...prev,
            [categoryId]: mockData[categoryId] || [],
          }));
          setLoadingStates((prev) => ({ ...prev, [categoryId]: false }));
        },
        1000 + Math.random() * 500
      ); // 1-1.5초 랜덤 지연
    };

    // 확장된 아이템들의 데이터 로드 (모바일용)
    expandedItems.forEach((categoryId) => {
      loadCategoryData(categoryId);
    });

    // 활성 카테고리의 데이터 로드 (데스크탑용)
    loadCategoryData(activeCategory);
  }, [expandedItems, activeCategory, cardsByCategory]);

  const handleItemClick = (categoryId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleHeartClick = (id: number, isFavorite: boolean) => {
    console.log(`Card ${id} heart clicked: ${isFavorite}`);
  };

  return (
    <Section>
      <Title> 인사이트 피드 </Title>

      {/* 데스크탑 레이아웃 */}
      <DesktopLayout>
        <Keywords
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        <FeedContainer
          activeCategory={activeCategory}
          cardsByCategory={cardsByCategory}
          loadingStates={loadingStates}
        />
      </DesktopLayout>

      {/* 모바일/태블릿 레이아웃 */}
      <MobileLayout>
        <MobileList>
          {categories.map((category) => (
            <MobileListItem key={category.id}>
              <ListItemHeader onClick={() => handleItemClick(category.id)}>
                <ThumbnailImage src={category.icon} alt={category.name} />
                <TextContent>
                  <ItemTitle>{category.name}</ItemTitle>
                  <ItemSubtitle>{category.subtitle}</ItemSubtitle>
                </TextContent>
                <ChevronIcon $isExpanded={expandedItems.has(category.id)}>
                  <ChevronDown size={16} />
                </ChevronIcon>
              </ListItemHeader>

              <CollapseContent $isExpanded={expandedItems.has(category.id)}>
                {loadingStates[category.id] ? (
                  <LoadingContainer>
                    <LoadingSpinner />
                    <LoadingText>데이터를 불러오는 중...</LoadingText>
                  </LoadingContainer>
                ) : (
                  <>
                    <FeedCardGrid>
                      {cardsByCategory[category.id]?.slice(0, 4).map((card) => (
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
                          cardWidth="100%"
                        />
                      ))}
                    </FeedCardGrid>
                    {cardsByCategory[category.id] &&
                      cardsByCategory[category.id].length > 4 && (
                        <MoreButtonContainer>
                          <MoreButton
                            onClick={() =>
                              window.open(`/category/${category.id}`, "_blank")
                            }
                          >
                            더보기
                          </MoreButton>
                        </MoreButtonContainer>
                      )}
                  </>
                )}
              </CollapseContent>
            </MobileListItem>
          ))}
        </MobileList>
      </MobileLayout>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  position: relative;
  display: inline-block;

  margin-bottom: 1.25rem;

  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: block;
    font-size: ${theme.fontSize.xxl};
    line-height: 1.625rem;
    text-align: center;
    margin: 5rem auto 0px;
  }

  margin: 0rem 1rem;
`;

const DesktopLayout = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: block;
  }
`;

const MobileLayout = styled.div`
  display: block;

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const MobileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
`;

const MobileListItem = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.colors.shadow.light};
  overflow: hidden;
`;

const ListItemHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: ${theme.transition.normal};
  gap: 1rem;

  &:hover {
    background: ${theme.colors.background.secondary};
  }
`;

const ThumbnailImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: ${theme.borderRadius.md};
  object-fit: cover;
  flex-shrink: 0;
`;

const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ItemTitle = styled.h3`
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin: 0;
`;

const ItemSubtitle = styled.p`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text.secondary};
  margin: 0;
`;

const ChevronIcon = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text.secondary};
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.$isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
  opacity: ${(props) => (props.$isExpanded ? 0.8 : 0.6)};

  &:hover {
    opacity: 1;
    transform: ${(props) =>
      props.$isExpanded
        ? "rotate(180deg) scale(1.1)"
        : "rotate(0deg) scale(1.1)"};
    color: ${theme.colors.brand.primary};
  }
`;

const CollapseContent = styled.div<{ $isExpanded: boolean }>`
  max-height: ${(props) => (props.$isExpanded ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  background: ${theme.colors.background.secondary};
`;

const FeedCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
`;

const LoadingSpinner = styled.div`
  width: 32px;
  height: 32px;
  border: 3px solid ${theme.colors.border.primary};
  border-top: 3px solid ${theme.colors.brand.primary};
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
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text.secondary};
  font-weight: ${theme.fontWeight.medium};
`;

const MoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const MoreButton = styled.button`
  background: ${theme.colors.brand.primary};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.lg};
  padding: 0.75rem 2rem;
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.semibold};
  cursor: pointer;
  transition: ${theme.transition.normal};
  box-shadow: ${theme.colors.shadow.light};

  &:hover {
    background: ${theme.colors.brand.secondary || theme.colors.brand.primary};
    transform: translateY(-2px);
    box-shadow: ${theme.colors.shadow.medium};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${theme.colors.shadow.light};
  }
`;

export default InsightFeedSection;
