import Header from "components/Common/Header";
import Footer from "components/Common/Footer";
import HeroSection from "components/HeroSection";
import CategorySection from "components/CategorySection";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyles } from "styles/GlobalStyles";
import InsightFeedSection from "components/InsightFeedSection";
import InfoSection from "components/InfoSection";
import { PolicyLink, SocialLink } from "components/Common/Footer";

function App() {
  const policyLinks: PolicyLink[] = [
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "쿠키 정책", href: "/cookies" },
    { label: "청소년 보호정책", href: "/youth" },
    { label: "고객센터", href: "/support" },
  ];

  const socialLinks: SocialLink[] = [
    {
      type: "instagram",
      href: "https://instagram.com/creatrip.global",
      ariaLabel: "인스타그램으로 이동",
    },
    {
      type: "youtube",
      href: "https://youtube.com/@creatrip",
      ariaLabel: "유튜브로 이동",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main>
        <HeroSection />
        <CategorySection />
        <InsightFeedSection />
        <InfoSection />
      </Main>
      <Footer policyLinks={policyLinks} socialLinks={socialLinks} />
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
