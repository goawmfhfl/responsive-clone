import Header from "components/Header";
import HeroSection from "components/HeroSection";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyles } from "styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main>
        <HeroSection />
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
