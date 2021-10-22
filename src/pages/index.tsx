import * as React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/reset";
import backgroundBig from "../images/background-big.png";
import GridWrapper from "../components/grid-wrapper";
import Content from "../components/content";

const StyledWrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

const StyledContent = styled.div`
  background: url(${backgroundBig});
  height: 100%;
  background-size: cover;
`;



const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <StyledContent>
          <GridWrapper>
            <Content />
          </GridWrapper>
        </StyledContent>
      </StyledWrapper>
    </>
  );
};

export default IndexPage;
