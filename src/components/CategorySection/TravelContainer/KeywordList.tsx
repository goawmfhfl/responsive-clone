import { useState, useRef } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

const keywords = [
  "HOT",
  "맛집 투어",
  "야경 명소",
  "힐링 여행",
  "액티비티",
  "문화 체험",
  "쇼핑몰",
  "카페 투어",
  "박물관",
  "테마파크",
  "해변",
  "산책로",
];

const KeywordList = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <ContainerWrapper>
      <Container
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {keywords.map((keyword) => (
          <Chip
            key={keyword}
            data-variant={keyword === "HOT" ? "hot" : undefined}
          >
            {keyword === "HOT" && <FireIcon>🔥</FireIcon>}
            {keyword}
          </Chip>
        ))}
      </Container>
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 0.375rem;
  padding: 0.5rem 0;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  /* 반응형 디자인 */
  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: 0.5rem;
    padding: 0.625rem 0;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    gap: 0.625rem;
    padding: 0.75rem 0;
  }
`;

const Chip = styled.button`
  border: 1px solid ${theme.colors.border.primary};
  background: #fff;
  color: ${theme.colors.text.primary};
  border-radius: ${theme.borderRadius.full};
  height: 1.75rem;
  padding: 0 0.625rem;
  font-size: 0.75rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all ${theme.transition.fast};
  cursor: pointer;
  flex-shrink: 0;
  font-weight: ${theme.fontWeight.medium};

  &:hover {
    border-color: ${theme.colors.border.hover};
    transform: translateY(-1px);
    box-shadow: ${theme.colors.shadow.light};
  }

  &:active {
    transform: translateY(0);
  }

  &[data-variant="hot"] {
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
    color: #fff;
    border-color: transparent;
    font-weight: ${theme.fontWeight.bold};
    box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);

    &:hover {
      background: linear-gradient(135deg, #ff5252, #ff7979);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
    }
  }

  /* 반응형 크기 조정 */
  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 1.875rem;
    padding: 0 0.75rem;
    font-size: 0.8125rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    height: 2rem;
    padding: 0 0.875rem;
    font-size: 0.875rem;
  }
`;

const FireIcon = styled.span`
  font-size: 0.625rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 0.6875rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 0.75rem;
  }
`;

export default KeywordList;
