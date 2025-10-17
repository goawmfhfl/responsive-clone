import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

export interface FeedCardProps {
  id: number;
  image: string;
  location: string;
  title: string;
  originalPrice?: number;
  salePrice?: number;
  hasSaleBadge?: boolean;
  saleBadgeText?: string;
  rating?: number;
  additionalBadge?: string;
  onHeartClick?: (id: number, isFavorite: boolean) => void;
  initialFavorite?: boolean;
  showHeart?: boolean;
  imageHeight?: string;
  cardWidth?: string;
}

const FeedCard: React.FC<FeedCardProps> = ({
  id,
  image,
  location,
  title,
  originalPrice,
  salePrice,
  hasSaleBadge = false,
  saleBadgeText = "최고 세일",
  rating,
  additionalBadge,
  onHeartClick,
  initialFavorite = false,
  showHeart = true,
  imageHeight = "200px",
  cardWidth = "100%",
}) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const handleHeartClick = () => {
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    onHeartClick?.(id, newFavoriteState);
  };

  const displayPrice = salePrice || originalPrice;

  return (
    <CardContainer $cardWidth={cardWidth}>
      <ImageContainer $imageHeight={imageHeight}>
        <CardImage src={image} alt={title} />
        {showHeart && (
          <HeartButton onClick={handleHeartClick} $isFavorite={isFavorite}>
            <HeartIcon $isFavorite={isFavorite}>
              {isFavorite ? "❤️" : "🤍"}
            </HeartIcon>
          </HeartButton>
        )}
      </ImageContainer>

      <CardContent>
        <LocationText>{location}</LocationText>
        <TitleText>{title}</TitleText>

        <PriceContainer>
          {hasSaleBadge && <SaleBadge>{saleBadgeText}</SaleBadge>}
          <PriceWrapper $hasBadge={hasSaleBadge}>
            {salePrice && originalPrice && (
              <OriginalPrice>${originalPrice.toFixed(2)}</OriginalPrice>
            )}
            <CurrentPrice>${displayPrice?.toFixed(2)}</CurrentPrice>
          </PriceWrapper>
        </PriceContainer>

        {rating && (
          <RatingContainer>
            <StarIcon>⭐</StarIcon>
            <RatingText>{rating.toFixed(1)}</RatingText>
          </RatingContainer>
        )}

        {additionalBadge && (
          <AdditionalBadge>{additionalBadge}</AdditionalBadge>
        )}
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div<{ $cardWidth: string }>`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.colors.shadow.medium};
  overflow: hidden;
  transition: ${theme.transition.normal};
  cursor: pointer;
  width: ${(props) => props.$cardWidth};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.colors.shadow.heavy};
  }
`;

const ImageContainer = styled.div<{ $imageHeight: string }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.$imageHeight};
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${theme.transition.normal};

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const HeartButton = styled.button<{ $isFavorite: boolean }>`
  position: absolute;
  top: ${theme.spacing.sm};
  right: ${theme.spacing.sm};
  border: none;
  border-radius: ${theme.borderRadius.full};
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${theme.transition.fast};
  backdrop-filter: blur(4px);

  &:hover {
    transform: scale(1.1);
  }
`;

const HeartIcon = styled.span<{ $isFavorite: boolean }>`
  font-size: 18px;
  transition: ${theme.transition.fast};
`;

const CardContent = styled.div`
  padding: ${theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const LocationText = styled.div`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text.secondary};
  font-weight: ${theme.fontWeight.medium};
`;

const TitleText = styled.div`
  font-size: ${theme.fontSize.base};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.fontWeight.semibold};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const SaleBadge = styled.div`
  background: ${theme.colors.accent.danger};
  color: white;
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight.bold};
  padding: 2px 6px;
  border-radius: ${theme.borderRadius.sm};
  width: fit-content;
`;

const PriceWrapper = styled.div<{ $hasBadge: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const OriginalPrice = styled.div`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text.tertiary};
  text-decoration: line-through;
`;

const CurrentPrice = styled.div`
  font-size: ${theme.fontSize.lg};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.fontWeight.bold};
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

const StarIcon = styled.span`
  font-size: 14px;
`;

const RatingText = styled.div`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text.secondary};
  font-weight: ${theme.fontWeight.medium};
`;

const AdditionalBadge = styled.div`
  background: ${theme.colors.brand.primary};
  color: white;
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight.medium};
  padding: 4px 8px;
  border-radius: ${theme.borderRadius.sm};
  width: fit-content;
`;

export default FeedCard;
