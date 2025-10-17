import React from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showPrevNext = true,
  maxVisiblePages = 5,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getVisiblePages = () => {
    const pages: number[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // 끝에서 시작점 조정
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <PaginationContainer>
      {showPrevNext && (
        <PageButton
          onClick={handlePrevious}
          disabled={currentPage === 1}
          $isDisabled={currentPage === 1}
        >
          <ArrowIcon>‹</ArrowIcon>
        </PageButton>
      )}

      {visiblePages.map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          $isActive={page === currentPage}
          $isDisabled={false}
        >
          {page}
        </PageButton>
      ))}

      {showPrevNext && (
        <PageButton
          onClick={handleNext}
          disabled={currentPage === totalPages}
          $isDisabled={currentPage === totalPages}
        >
          <ArrowIcon>›</ArrowIcon>
        </PageButton>
      )}
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin: 2.5rem 0 4rem;
`;

const PageButton = styled.button<{
  $isActive?: boolean;
  $isDisabled?: boolean;
}>`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.full};
  border: 1px solid ${theme.colors.border.secondary};
  background: ${(props) =>
    props.$isActive ? theme.colors.brand.primary : "white"};
  color: ${(props) =>
    props.$isActive
      ? "white"
      : props.$isDisabled
        ? theme.colors.text.tertiary
        : theme.colors.text.primary};
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.medium};
  cursor: ${(props) => (props.$isDisabled ? "not-allowed" : "pointer")};
  transition: ${theme.transition.fast};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: ${(props) =>
      props.$isActive
        ? theme.colors.brand.primary
        : theme.colors.background.secondary};
    border-color: ${(props) =>
      props.$isActive ? theme.colors.brand.primary : theme.colors.border.hover};
    transform: ${(props) => (props.$isActive ? "none" : "scale(1.05)")};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const ArrowIcon = styled.span`
  font-size: 18px;
  font-weight: ${theme.fontWeight.bold};
`;

export default Pagination;
