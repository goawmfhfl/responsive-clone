import styled from "styled-components";

const TabletHeroSection = () => {
  return (
    <TabletContainer>
      <SearchInput>dasd</SearchInput>
    </TabletContainer>
  );
};

const TabletContainer = styled.section`
  position: relative;
  margin-left: calc(50% - 50vw);
  width: 100vw;
  overflow: hidden;
`;

const SearchInput = styled.div`
  display: flex;
  overflow: hidden;
  -webkit-box-align: center;
  align-items: center;
  height: 2.5rem;
  padding-left: 1rem;
  margin: 0.5rem 0px 1rem;
  border-radius: 1.25rem;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0.75rem;
`;

export default TabletHeroSection;
