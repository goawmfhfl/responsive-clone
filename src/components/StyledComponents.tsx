import styled from "styled-components";
import {
  theme,
  backgroundColors,
  textColors,
  spacing,
  shadows,
  borderRadius,
  transitions,
  mixins,
} from "styles";

// 기본 컨테이너 컴포넌트
export const Container = styled.div`
  ${backgroundColors.primary}
  ${spacing.lg}
  ${borderRadius.lg}
  ${shadows.medium}
  ${transitions.normal}
`;

// 카드 컴포넌트
export const Card = styled.div`
  ${backgroundColors.secondary}
  ${spacing.md}
  ${borderRadius.md}
  ${shadows.light}
  ${transitions.fast}
  
  &:hover {
    ${shadows.medium}
    transform: translateY(-2px);
  }
`;

// 버튼 컴포넌트
export const Button = styled.button`
  ${mixins.buttonBase}
  ${backgroundColors.primary}
  ${textColors.primary}
  ${spacing.sm}
  ${borderRadius.md}
  ${shadows.light}
  ${transitions.fast}
  
  &:hover {
    ${backgroundColors.secondary}
    ${shadows.medium}
  }

  &:active {
    transform: translateY(1px);
  }
`;

// 입력 필드 컴포넌트
export const Input = styled.input`
  ${mixins.inputBase}
  ${backgroundColors.primary}
  ${textColors.primary}
`;

// 텍스트 컴포넌트들
export const Heading = styled.h1`
  ${textColors.primary}
  font-size: ${theme.fontSize.xxl};
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
`;

export const SubHeading = styled.h2`
  ${textColors.secondary}
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.semibold};
  margin-bottom: ${theme.spacing.sm};
`;

export const BodyText = styled.p`
  ${textColors.primary}
  font-size: ${theme.fontSize.base};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.sm};
`;

export const Caption = styled.span`
  ${textColors.tertiary}
  font-size: ${theme.fontSize.sm};
`;

// 레이아웃 컴포넌트들
export const FlexContainer = styled.div`
  ${mixins.centerContent}
  gap: ${theme.spacing.md};
`;

export const GridContainer = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 1}, 1fr);
  gap: ${theme.spacing.md};
`;

// 백그라운드 컬러 예시 컴포넌트들
export const PrimaryBackground = styled.div`
  ${backgroundColors.primary}
  ${spacing.lg}
  ${borderRadius.lg}
`;

export const SecondaryBackground = styled.div`
  ${backgroundColors.secondary}
  ${spacing.lg}
  ${borderRadius.lg}
`;

export const TertiaryBackground = styled.div`
  ${backgroundColors.tertiary}
  ${spacing.lg}
  ${borderRadius.lg}
`;

export const DarkBackground = styled.div`
  ${backgroundColors.dark}
  ${textColors.inverse}
  ${spacing.lg}
  ${borderRadius.lg}
`;
