import Header from "components/Common/Header";
import HeroSection from "components/HeroSection";
import CategorySection from "components/CategorySection";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyles } from "styles/GlobalStyles";
import InsightFeedSection from "components/InsightFeedSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main>
        <HeroSection />
        <CategorySection />
        <InsightFeedSection />
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  width: 100%;
  margin: 0px auto 2.5rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 60rem;
    margin-bottom: 5rem;
  }

  @media (min-width: ${theme.breakpoints.tablet}) and (max-width: ${theme
      .breakpoints.desktop}) {
    max-width: 42rem;
  }
`;

export default App;
