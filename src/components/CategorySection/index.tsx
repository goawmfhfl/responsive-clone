import styled from "styled-components";
import TravelContainer from "./TravelContainer/CategoryList";
import { theme } from "styles/theme";
import CategoryContainer from "./CategoryContainer";
import PromotionalBanner from "components/Common/PromotionalBanner";

const CategorySection = () => {
  const banners = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  return (
    <Container>
      <TravelContainer />
      <CategoryContainer />
      <PromotionalBanner banners={banners} showPagination={true} size="s" />
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
