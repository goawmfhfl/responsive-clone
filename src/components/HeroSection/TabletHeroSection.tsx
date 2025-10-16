import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FiSearch } from "react-icons/fi";

const TabletHeroSection = () => {
  const [currentSearchIndex, setCurrentSearchIndex] = useState(0);

  const searchSuggestions = [
    "첫번째 키워드",
    "두번째 키워드",
    "세번째 키워드",
    "네번째 키워드",
    "다섯번째 키워드",
    "여섯번째 키워드",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSearchIndex(
        (prevIndex) => (prevIndex + 1) % searchSuggestions.length
      );
    }, 2000); // 2초마다 변경

    return () => clearInterval(interval);
  }, []);

  return (
    <TabletContainer>
      <SearchInput>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <SearchTextContainer>
          <SearchText>
            Search for
            <AnimatedText key={currentSearchIndex}>
              "{searchSuggestions[currentSearchIndex]}"
            </AnimatedText>
          </SearchText>
        </SearchTextContainer>
      </SearchInput>
    </TabletContainer>
  );
};

const TabletContainer = styled.section`
  position: relative;
  overflow: hidden;
`;

// 애니메이션 키프레임 정의
const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  90% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const SearchInput = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  height: 2.5rem;
  padding: 0 1rem;
  margin: 0.5rem 0px 1rem;
  border-radius: 1.25rem;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0.75rem;
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0.75rem;
  }
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  color: #9ca3af;
  font-size: 1rem;
`;

const SearchTextContainer = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  height: 1.5rem;
`;

const SearchText = styled.div`
  color: #9ca3af;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

const AnimatedText = styled.span`
  display: inline-block;
  animation: ${slideUp} 2s ease-in-out infinite;
  color: #6b7280;
  font-weight: 500;
`;

export default TabletHeroSection;
