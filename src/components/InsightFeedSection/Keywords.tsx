import React from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  isNew?: boolean;
}

const Keywords = () => {
  const [activeCategory, setActiveCategory] = React.useState("accommodation");

  const categories: CategoryItem[] = [
    {
      id: "accommodation",
      name: "숙소",
      icon: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "restaurant",
      name: "맛집",
      icon: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "cafe",
      name: "카페",
      icon: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=200&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: "attractions",
      name: "관광지",
      icon: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "shopping",
      name: "쇼핑",
      icon: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "transport",
      name: "교통",
      icon: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "culture",
      name: "문화체험",
      icon: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "nature",
      name: "자연",
      icon: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "nightlife",
      name: "야경",
      icon: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <KeywordsContainer>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          $isActive={activeCategory === category.id}
          onClick={() => setActiveCategory(category.id)}
        >
          <IconContainer>
            <CategoryIcon src={category.icon} alt={category.name} />
          </IconContainer>
          <TextContainer>
            <CategoryName>{category.name}</CategoryName>
            {category.isNew && (
              <NewBadge>
                <NewText>New</NewText>
              </NewBadge>
            )}
          </TextContainer>
        </CategoryItem>
      ))}
    </KeywordsContainer>
  );
};

const KeywordsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  padding: 1rem 0;
  max-width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CategoryItem = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 1.25rem;
  background: ${(props) =>
    props.$isActive ? theme.colors.brand.primary : "white"};
  color: ${(props) => (props.$isActive ? "white" : theme.colors.text.primary)};
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid
    ${(props) =>
      props.$isActive
        ? theme.colors.brand.primary
        : theme.colors.border.primary};
  box-shadow: ${(props) =>
    props.$isActive ? theme.colors.shadow.medium : theme.colors.shadow.light};

  &:hover {
    background: ${(props) =>
      props.$isActive
        ? theme.colors.brand.primary
        : theme.colors.background.secondary};
    transform: translateY(-1px);
    box-shadow: ${theme.colors.shadow.medium};
    border-color: ${(props) =>
      props.$isActive ? theme.colors.brand.primary : theme.colors.border.hover};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${theme.colors.shadow.light};
  }
`;

const IconContainer = styled.div`
  position: relative;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: ${theme.colors.shadow.light};
`;

const CategoryIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  display: block;
  filter: brightness(1.1) contrast(1.1);
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const CategoryName = styled.h2`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.medium};
  margin: 0;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const NewBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #10b981;
  border-radius: 0.5rem;
  padding: 0.0625rem 0.1875rem;
  margin-left: 0.25rem;
  box-shadow: ${theme.colors.shadow.light};
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const NewText = styled.span`
  color: white;
  font-size: 0.625rem;
  font-weight: ${theme.fontWeight.medium};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

export default Keywords;
