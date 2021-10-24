import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 0.2fr 0.2fr 1fr 0.2fr 0.25fr;
  gap: 0.5rem;
  height: 100%;
  width: 100%;
  padding: 1rem 0;
  font-size: 1rem;
  @media (min-width: 400px) {
    font-size: 1.25rem;
  }
  @media (min-width: 750px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1050px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    padding: 0;
  }
`;
