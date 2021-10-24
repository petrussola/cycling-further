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
    font-size: 2rem;
  }
  @media (min-width: 1050px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    padding: 0;
  }
  @media(min-width: 2000px) {
    grid-template-rows: 0.4fr 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
