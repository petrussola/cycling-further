import styled from 'styled-components'

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 1rem;

  .r2c2 {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;