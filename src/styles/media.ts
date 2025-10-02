import { css } from "styled-components";
import { theme } from "./theme";

export const media = {
  tablet: (styles: any) => css`
    @media (min-width: ${theme.breakpoints.tablet}) {
      ${styles}
    }
  `,
  desktop: (styles: any) => css`
    @media (min-width: ${theme.breakpoints.desktop}) {
      ${styles}
    }
  `,
};
