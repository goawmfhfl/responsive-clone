import CategoryList from "./CategoryList";
import KeywordList from "./KeywordList";
import Banner from "./Banner";
import styled from "styled-components";
import { theme } from "styles/theme";

const TravelContainer = () => {
  return (
    <Section>
      <CategoryList />
      <KeywordList />
      <Banner />
    </Section>
  );
};

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: ${theme.colors.shadow.light};
  padding: 1rem;
`;

export default TravelContainer;
