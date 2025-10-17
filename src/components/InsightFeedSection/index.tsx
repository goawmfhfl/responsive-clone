import styled from "styled-components";
import Keywords from "./Keywords";
import { theme } from "styles/theme";
import FeedContainer from "./FeedContainer";

const InsightFeedSection = () => {
  return (
    <Section>
      <Title> 인사이트 피드 </Title>
      <Keywords />
      <FeedContainer />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  position: relative;
  display: inline-block;

  margin-bottom: 1.25rem;

  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};

  @media (min-width: ${theme.breakpoints.desktop}) {
    display: block;
    font-size: ${theme.fontSize.xxl};
    line-height: 1.625rem;
    text-align: center;
    margin: 5rem auto 0px;
  }
`;

export default InsightFeedSection;
