import styled from "styled-components";
import TravelContainer from "./TravelContainer/CategoryList";
import { theme } from "styles/theme";
import CategoryContainer from "./CategoryContainer";

const CategorySection = () => {
  return (
    <Container>
      <TravelContainer />
      <CategoryContainer />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 1.25rem;
    padding: 1.5rem 0px 1.5rem;
    gap: 1.25rem;
  }

  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1.25rem 0px 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0.75rem 0px;
  border-radius: 0.75rem;
`;

export default CategorySection;
