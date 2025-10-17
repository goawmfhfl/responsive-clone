import styled from "styled-components";
import { theme } from "styles/theme";
import { FiSearch, FiGlobe, FiHeart, FiUser, FiMenu } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [elevated, setElevated] = useState(false);
  const lastScrollRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const isScrollingDown = currentY > lastScrollRef.current;

          const threshold = 64;
          if (currentY > threshold) {
            setIsHidden(isScrollingDown);
            setElevated(true);
          } else {
            setIsHidden(false);
            setElevated(false);
          }

          lastScrollRef.current = currentY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Container data-hidden={isHidden} data-elevated={elevated}>
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
      </HeaderWrapper>
    </Container>
  );
};
const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 3;
  width: 100%;
  background: #fff;
  transition:
    transform ${theme.transition.normal},
    box-shadow ${theme.transition.normal};
  will-change: transform;
  transform: translateY(0);

  &[data-hidden="true"] {
    transform: translateY(-100%);
  }

  &[data-elevated="true"] {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  }
`;

const HeaderWrapper = styled.div`
  display: grid;
  align-items: center;

  grid-template-areas: "left-menu logo right-menu"; // 열의 이름
  grid-template-rows: 3.5rem; // 행의 높이
  grid-template-columns: 5rem 1fr 5rem; // 열의 너비

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
  border: none;
  background: none;
  cursor: pointer;

  /* 기본: 모바일 사이즈 */
  min-width: 2rem;
  width: 2rem;
  max-width: 2rem;
  min-height: 2rem;
  height: 2rem;
  max-height: 2rem;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  /* 태블릿 */
  @media (min-width: ${theme.breakpoints.tablet}) {
    min-width: 2.25rem;
    width: 2.25rem;
    max-width: 2.25rem;
    min-height: 2.25rem;
    height: 2.25rem;
    max-height: 2.25rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  /* 데스크탑 */
  @media (min-width: ${theme.breakpoints.desktop}) {
    min-width: 2.375rem;
    width: 2.375rem;
    max-width: 2.375rem;
    min-height: 2.375rem;
    height: 2.375rem;
    max-height: 2.375rem;

    svg {
      width: 1.625rem;
      height: 1.625rem;
    }
  }

  ${({ hideOnMobile }) =>
    hideOnMobile &&
    `
    display: none;
    @media (min-width: ${theme.breakpoints.desktop}) {
      display: inline-flex;
    }
  `}
`;

const IconButtons = styled.div`
  display: flex;
  gap: 0.375rem; /* 모바일 */
  align-items: center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: 0.5rem; /* 태블릿 */
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    gap: 0.625rem; /* 데스크탑 */
  }
`;

export default Header;
