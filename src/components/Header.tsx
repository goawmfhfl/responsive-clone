import styled from "styled-components";
import { theme } from "styles/theme";
import { FiSearch, FiGlobe, FiHeart, FiUser, FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <LeftMenu>
          <FiMenu />
        </LeftMenu>

        <LeftNav>
          <a href="#">아이콘1</a>
          <a href="#">아이콘2</a>
        </LeftNav>

        <Logo>로고 이미지</Logo>

        <RightNav>
          <a href="#">아이콘3</a>
          <a href="#">아이콘4</a>
        </RightNav>

        <RightMenu>
          <IconButtons>
            <IconButton aria-label="Search">
              <FiSearch />
            </IconButton>
            <IconButton aria-label="Language" hideOnMobile>
              <FiGlobe />
            </IconButton>
            <IconButton aria-label="Favorites" hideOnMobile>
              <FiHeart />
            </IconButton>
            <IconButton aria-label="My Page">
              <FiUser />
            </IconButton>
          </IconButtons>
        </RightMenu>
        {/* 큰 화면 전용 네비 (예시) */}
      </HeaderWrapper>
    </Container>
  );
};
const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 3;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: grid;
  align-items: center;

  /* 모바일(기본) 3열 */
  grid-template-areas: "left-menu logo right-menu"; // 열의 이름
  grid-template-rows: 3.5rem; // 행의 높이
  grid-template-columns: 5rem 1fr 5rem; // 열의 너비

  /* 태블릿~데스크탑: 5열로 확장 */
  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-areas: "left-menu left-nav logo right-nav right-menu"; // 열의 이름
    grid-template-rows: 4.25rem;
    grid-template-columns: 7.5rem 1fr auto 1fr 7.5rem; // 열의 너비
  }
`;

const LeftMenu = styled.div`
  grid-area: left-menu; // 열의 이름

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const Logo = styled.div`
  grid-area: logo; // 열의 이름
  text-align: center;
`;

const RightMenu = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  grid-area: right-menu;
`;

const LeftNav = styled.nav`
  grid-area: left-nav; // 열의 이름
  display: none;

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    justify-content: flex-end;

    > * {
      margin-right: 2.5rem;
    }
  }
`;
const RightNav = styled.nav`
  grid-area: right-nav; // 열의 이름
  display: none;

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    justify-content: flex-start;

    > * {
      margin-left: 2.5rem;
    }
  }
`;

const IconButton = styled.button<{ hideOnMobile?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  /* 아이콘 크기 조정 */
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  ${({ hideOnMobile }) =>
    hideOnMobile &&
    `
    display: none;
    @media (min-width: ${theme.breakpoints.desktop}) {
      display: inline-flex;
    }
  `}

  @media (min-width: ${theme.breakpoints.desktop}) {
    min-width: 2.5rem;
    width: 2.5rem;
    max-width: 2.5rem;
    min-height: 2.5rem;
    height: 2.5rem;
    max-height: 2.5rem;

    /* 데스크탑에서 아이콘 크기 */
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  /* 버튼이 가지고 있는 속성 초기화 */
  border: none;
  background: none;
  cursor: pointer;
`;

const IconButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export default Header;
