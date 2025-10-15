import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background-color: ${theme.colors.background.primary};
    color: ${theme.colors.text.primary};
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* 기본 링크 스타일 */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* 기본 버튼 스타일 리셋 */
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  /* 기본 입력 필드 스타일 리셋 */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* 이미지 최적화 */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* 스크롤바 스타일링 (웹킷 브라우저) */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.border.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.border.hover};
  }

  /* 포커스 스타일 */
  :focus-visible {
    outline: 2px solid ${theme.colors.accent.primary};
    outline-offset: 2px;
  }

  /* 선택 텍스트 스타일 */
  ::selection {
    background-color: ${theme.colors.accent.primary};
    color: ${theme.colors.text.inverse};
  }
`;
