import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

// 이미지 로딩 실패 시 사용할 더미 이미지 (Unsplash)
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format";

export interface InfoCardProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  imageHeight?: string;
  cardWidth?: string;
  onClick?: (id: number) => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  id,
  image,
  title,
  subtitle,
  imageHeight = "200px",
  cardWidth = "100%",
  onClick,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleCardClick = () => {
    onClick?.(id);
  };

  const currentImage = imageError ? FALLBACK_IMAGE : image;

  return (
    <CardContainer $cardWidth={cardWidth} onClick={handleCardClick}>
      <ImageContainer $imageHeight={imageHeight}>
        <CardImage
          src={currentImage}
          alt={title}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
        {imageLoading && (
          <ImageLoadingOverlay>이미지 로딩 중...</ImageLoadingOverlay>
        )}
        {imageError && (
          <ImageErrorOverlay>이미지가 존재하지 않습니다</ImageErrorOverlay>
        )}
      </ImageContainer>

      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div<{ $cardWidth: string }>`
  background: ${theme.colors.background.primary};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.colors.shadow.medium};
  transition: ${theme.transition.normal};
  cursor: pointer;
  width: ${(props) => props.$cardWidth};

  &:hover {
    transform: translateY(-4px);
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

const CardContent = styled.div`
  padding: ${theme.spacing.lg};
`;

const CardTitle = styled.h3`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  line-height: 1.4;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSize.xl};
  }
`;

const CardSubtitle = styled.p`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text.secondary};
  line-height: 1.5;
  margin: 0;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSize.base};
  }
`;

const ImageLoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.text.secondary};
  font-weight: ${theme.fontWeight.medium};
`;

const ImageErrorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSize.sm};
  color: white;
  font-weight: ${theme.fontWeight.medium};
  text-align: center;
  padding: ${theme.spacing.md};
`;

export default InfoCard;
