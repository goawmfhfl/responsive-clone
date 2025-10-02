import Header from "components/Header";
import HeroSection from "components/HeroSection";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HeroSection />
    </ThemeProvider>
  );
}

export default App;
