import styled from "styled-components";
import { theme } from "styles/theme";
import {
  FaRunning,
  FaCamera,
  FaPlane,
  FaUtensils,
  FaTooth,
  FaCut,
  FaHeart,
  FaBus,
  FaWifi,
  FaShoppingBag,
} from "react-icons/fa";

const CategoryList = () => {
  const categories = [
    { name: "활동", icon: FaRunning },
    { name: "사진", icon: FaCamera },
    { name: "투어", icon: FaPlane },
    { name: "음식", icon: FaUtensils },
    { name: "뷰티", icon: FaTooth },
    { name: "헤어", icon: FaCut },
    { name: "K‑팝", icon: FaHeart },
    { name: "교통", icon: FaBus },
    { name: "WIFI", icon: FaWifi },
    { name: "필수품", icon: FaShoppingBag },
  ];

  return (
    <Container>
      <HeaderRow>
        <Title>Travel</Title>
      </HeaderRow>
      <Grid>
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Card key={category.name}>
              <IconWrapper>
                <IconComponent />
              </IconWrapper>
              <CardText>{category.name}</CardText>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: 1.25rem;
  }
  @media (min-width: ${theme.breakpoints.desktop}) {
    gap: 1.5rem;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h2`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semibold};
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;

  overflow: visible;
  row-gap: 1rem;
  margin: 0px 1rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: 0.5rem;
    grid-template-columns: repeat(10, 1fr);
  }
`;

const Card = styled.li`
  height: 4.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0.75rem;
  background: ${theme.colors.background.secondary};
  font-size: ${theme.fontSize.sm};
  padding: 0.5rem;
  position: relative;

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 3.5rem;
    padding: 0.375rem;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.brand.primary};
  font-size: 1.25rem;
  @media (min-width: ${theme.breakpoints.tablet}) {
    top: 0.5rem;
    font-size: 1.125rem;
  }
`;

const CardText = styled.span`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 1rem);
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.2;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSize.xs};
    bottom: 0.375rem;
  }
`;

export default CategoryList;
