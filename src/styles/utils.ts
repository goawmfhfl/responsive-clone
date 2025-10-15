import { css } from "styled-components";
import { theme } from "./theme";

// 백그라운드 컬러 유틸리티
export const backgroundColors = {
  primary: css`
    background-color: ${theme.colors.background.primary};
  `,
  secondary: css`
    background-color: ${theme.colors.background.secondary};
  `,
  tertiary: css`
    background-color: ${theme.colors.background.tertiary};
  `,
  dark: css`
    background-color: ${theme.colors.background.dark};
  `,
  overlay: css`
    background-color: ${theme.colors.background.overlay};
  `,
};

// 텍스트 컬러 유틸리티
export const textColors = {
  primary: css`
    color: ${theme.colors.text.primary};
  `,
  secondary: css`
    color: ${theme.colors.text.secondary};
  `,
  tertiary: css`
    color: ${theme.colors.text.tertiary};
  `,
  inverse: css`
    color: ${theme.colors.text.inverse};
  `,
  link: css`
    color: ${theme.colors.text.link};
  `,
};

// 스페이싱 유틸리티
export const spacing = {
  xs: css`
    padding: ${theme.spacing.xs};
  `,
  sm: css`
    padding: ${theme.spacing.sm};
  `,
  md: css`
    padding: ${theme.spacing.md};
  `,
  lg: css`
    padding: ${theme.spacing.lg};
  `,
  xl: css`
    padding: ${theme.spacing.xl};
  `,
  xxl: css`
    padding: ${theme.spacing.xxl};
  `,
  xxxl: css`
    padding: ${theme.spacing.xxxl};
  `,
};

// 마진 유틸리티
export const margin = {
  xs: css`
    margin: ${theme.spacing.xs};
  `,
  sm: css`
    margin: ${theme.spacing.sm};
  `,
  md: css`
    margin: ${theme.spacing.md};
  `,
  lg: css`
    margin: ${theme.spacing.lg};
  `,
  xl: css`
    margin: ${theme.spacing.xl};
  `,
  xxl: css`
    margin: ${theme.spacing.xxl};
  `,
  xxxl: css`
    margin: ${theme.spacing.xxxl};
  `,
};

// 그림자 유틸리티
export const shadows = {
  light: css`
    box-shadow: ${theme.colors.shadow.light};
  `,
  medium: css`
    box-shadow: ${theme.colors.shadow.medium};
  `,
  heavy: css`
    box-shadow: ${theme.colors.shadow.heavy};
  `,
};

// 보더 라디우스 유틸리티
export const borderRadius = {
  sm: css`
    border-radius: ${theme.borderRadius.sm};
  `,
  md: css`
    border-radius: ${theme.borderRadius.md};
  `,
  lg: css`
    border-radius: ${theme.borderRadius.lg};
  `,
  xl: css`
    border-radius: ${theme.borderRadius.xl};
  `,
  full: css`
    border-radius: ${theme.borderRadius.full};
  `,
};

// 트랜지션 유틸리티
export const transitions = {
  fast: css`
    transition: ${theme.transition.fast};
  `,
  normal: css`
    transition: ${theme.transition.normal};
  `,
  slow: css`
    transition: ${theme.transition.slow};
  `,
};

// 폰트 사이즈 유틸리티
export const fontSizes = {
  xs: css`
    font-size: ${theme.fontSize.xs};
  `,
  sm: css`
    font-size: ${theme.fontSize.sm};
  `,
  base: css`
    font-size: ${theme.fontSize.base};
  `,
  lg: css`
    font-size: ${theme.fontSize.lg};
  `,
  xl: css`
    font-size: ${theme.fontSize.xl};
  `,
  xxl: css`
    font-size: ${theme.fontSize.xxl};
  `,
  xxxl: css`
    font-size: ${theme.fontSize.xxxl};
  `,
};

// 폰트 웨이트 유틸리티
export const fontWeights = {
  light: css`
    font-weight: ${theme.fontWeight.light};
  `,
  normal: css`
    font-weight: ${theme.fontWeight.normal};
  `,
  medium: css`
    font-weight: ${theme.fontWeight.medium};
  `,
  semibold: css`
    font-weight: ${theme.fontWeight.semibold};
  `,
  bold: css`
    font-weight: ${theme.fontWeight.bold};
  `,
};

// 공통 믹스인들
export const mixins = {
  // 중앙 정렬
  centerContent: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  // 수직 중앙 정렬
  centerVertical: css`
    display: flex;
    align-items: center;
  `,

  // 수평 중앙 정렬
  centerHorizontal: css`
    display: flex;
    justify-content: center;
  `,

  // 절대 위치 중앙 정렬
  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  // 텍스트 말줄임
  textEllipsis: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  // 다중 줄 텍스트 말줄임
  textEllipsisMultiline: (lines: number) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,

  // 버튼 기본 스타일
  buttonBase: css`
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    transition: ${theme.transition.fast};

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `,

  // 입력 필드 기본 스타일
  inputBase: css`
    border: 1px solid ${theme.colors.border.primary};
    border-radius: ${theme.borderRadius.md};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-family: inherit;
    font-size: ${theme.fontSize.base};
    transition: ${theme.transition.fast};

    &:focus {
      outline: none;
      border-color: ${theme.colors.border.focus};
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }

    &:disabled {
      background-color: ${theme.colors.background.secondary};
      cursor: not-allowed;
    }
  `,
};
