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
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <ArrowRight>
          <FaArrowRight />
        </ArrowRight>
      </HeaderRow>
      <Grid>
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Card key={category.name}>
              <Link to={`/category/${category.name}`}>
                <IconContainer>
                  <IconWrapper>
                    <IconBox>
                      <IconComponent />
                    </IconBox>
                    <CardText>{category.name}</CardText>
                  </IconWrapper>
                </IconContainer>
              </Link>
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
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px 1rem;
`;

const ArrowRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.desktop}) {
    svg {
      min-width: 1.25rem;
      width: 1.25rem;
      max-width: 1.25rem;
      min-height: 1.25rem;
      height: 1.25rem;
      max-height: 1.25rem;
    }
  }

  svg {
    min-width: 1rem;
    width: 1rem;
    max-width: 1rem;
    min-height: 1rem;
    height: 1rem;
    max-height: 1rem;
  }
`;
const Title = styled.h2`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semibold};
`;

const Grid = styled.ul`
  overflow: visible;
  display: grid;
  row-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  margin: 0px 1rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    column-gap: 0px;
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
  font-size: ${theme.fontSize.sm};
  padding: 0.5rem;
  position: relative;

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 3.5rem;
    padding: 0.375rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: center;

  @media (min-width: ${theme.breakpoints.desktop}) {
    gap: 0.5rem;
    min-width: 3rem;
    width: 3rem;
    max-width: 3rem;
    min-height: 3rem;
    height: 3rem;
    max-height: 3rem;
  }
`;

const IconBox = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${theme.colors.background.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardText = styled.span`
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.2;

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
    line-height: 1.125rem;
  }

  font-size: 0.625rem;
  line-height: 0.9375rem;
`;

export default CategoryList;
