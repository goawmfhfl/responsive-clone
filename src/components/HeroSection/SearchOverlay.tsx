import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const SearchOverlay = () => {
  return (
    <OverlayContainer>
      <TextOverlay>
        <Title>검색창 입니다</Title>
      </TextOverlay>

      <SearchContainer>
        <SearchInput type="text" />
        <SearchButton>
          <FiSearch />
        </SearchButton>
      </SearchContainer>
    </OverlayContainer>
  );
};

const OverlayContainer = styled.div`
  cursor: pointer;

  position: absolute;
  top: 0;
  left: 50%;

  transform: translateX(-50%);
  width: 800px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  z-index: 2;
`;

const TextOverlay = styled.div``;

const Title = styled.h1`
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: rgba(0, 0, 0, 0.15) 0px 2px 16px;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;

  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 47.5rem;
  padding: 0.375rem 0.5rem 0.375rem 2.5rem;
  margin: 0.5rem 0px 1rem;
  border-radius: 2.625rem;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0.75rem 0px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 2rem;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: #999;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0.5rem;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #059669;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export default SearchOverlay;
