import styled from "styled-components";
import { media } from "styles/media";
import { theme } from "styles/theme";

const keywords = [
  "HOT",
  "Color Analysis",
  "Scalp Treatment",
  "Color & Perm",
  "Photo & Outfit",
];

const KeywordList = () => {
  return (
    <Container>
      {keywords.map((k) => (
        <Chip key={k} data-variant={k === "HOT" ? "hot" : undefined}>
          {k}
        </Chip>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 0.5rem;
  padding-bottom: 0.25rem;
  -webkit-overflow-scrolling: touch;
  ${media.tablet(`
    flex-wrap: wrap;
    overflow: visible;
    gap: 0.5rem;
  `)}
`;

const Chip = styled.button`
  border: 1px solid ${theme.colors.border.primary};
  background: #fff;
  color: ${theme.colors.text.primary};
  border-radius: ${theme.borderRadius.full};
  height: 2rem;
  padding: 0 0.75rem;
  font-size: ${theme.fontSize.sm};
  white-space: nowrap;

  &[data-variant="hot"] {
    background: ${theme.colors.brand.primary};
    color: #fff;
    border-color: ${theme.colors.brand.primary};
    font-weight: ${theme.fontWeight.bold};
  }
`;

export default KeywordList;
