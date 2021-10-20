import * as React from "react";
import bikeIcon from "../images/icon-bike.png";
import styled from "styled-components";

const Content = () => {
  return (
    <>
      <Header />
      <Icon />
    </>
  );
};

export default Content;

const Header = () => {
  return <header className="r2c2">NEW WEBSITE COMING UP SOON</header>;
};

const StyledIcon = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  .image {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;;
    img {
      height: 100%;
    }
  }
`;

const Icon = () => {
  return (
    <StyledIcon>
      <div className="image">
        <img src={bikeIcon} />
      </div>
    </StyledIcon>
  );
};
