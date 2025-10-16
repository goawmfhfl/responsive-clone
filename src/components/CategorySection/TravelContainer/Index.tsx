import CategoryList from "./CategoryList";
import Banner from "./Banner";
import styled from "styled-components";
import { theme } from "styles/theme";

const TravelContainer = () => {
  return (
    <Section>
      <CategoryList />
      <Banner />
    </Section>
  );
};

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: ${theme.colors.shadow.light};
`;

export default TravelContainer;
