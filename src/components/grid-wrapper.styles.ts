import styled from 'styled-components'

export const StyledGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 1rem;
`;