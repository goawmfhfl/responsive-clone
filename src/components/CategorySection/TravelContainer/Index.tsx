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
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default TravelContainer;
