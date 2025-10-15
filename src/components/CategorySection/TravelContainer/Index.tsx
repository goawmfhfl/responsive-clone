import CategoryList from "./CategoryList";
import KeywordList from "./KeywordList";
import Banner from "./Banner";
import styled from "styled-components";
import { media } from "styles/media";
import { theme } from "styles/theme";

const TravelContainer = () => {
  return (
    <Section>
      <Inner>
        <CategoryList />
        <KeywordList />
        <Banner />
      </Inner>
    </Section>
  );
};

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: ${theme.colors.shadow.light};
  padding: 1rem;
  ${media.tablet(`
    padding: 1.25rem;
  `)}
  ${media.desktop(`
    padding: 1.5rem;
  `)}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${media.tablet(`
    gap: 1.25rem;
  `)}
  ${media.desktop(`
    gap: 1.5rem;
  `)}
`;

export default TravelContainer;
