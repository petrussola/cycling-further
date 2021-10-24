import * as React from "react";
import bikeIcon from "../images/icon-bike.png";
import bookCover from "../images/book-cover.png";
import cyclingFurther from "../images/cyclingfurther.png";
import ulule from "../images/ulule.png";
import styled from "styled-components";

const Content = () => {
  return (
    <>
      <Header />
      <Icon />
      <Title />
      <BookCover />
      <OrderNow />
      <Ulule />
    </>
  );
};

export default Content;

const StyledHeader = styled.header`
  color: white;
  place-self: center;

  @media (min-width: 1050px) {
    grid-column: 3/7;
    grid-row: 1/2;
    place-self: end center;
    text-align: center;
  }
`;

const StyledIcon = styled.div`
  background: url(${bikeIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 1050px) {
    grid-column: 4/6;
    grid-row: 2/3;
  }
`;

const StyledTitle = styled.div`
  background-color: red;
  background: url(${cyclingFurther});
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 1050px) {
    grid-column: 3/7;
    grid-row: 3/4;
  }
`;

const StyledBookCover = styled.div`
  background: url(${bookCover});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 1050px) {
    grid-column: 3/7;
    grid-row: 4/9;
  }
`;

const StyledOrderNow = styled.div`
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 1.25rem;
  .arrow {
    height: 0;
    width: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid white;
  }
  @media (min-width: 400px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1050px) {
    grid-column: 7/9;
    grid-row: 6/7;
    place-self: center;
    text-align: center;
    height: 100%;
  }
`;

const StyledUlule = styled.a`
  background-color: blue;
  background: url(${ulule});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 1050px) {
    grid-column: 7/9;
    grid-row: 7/8;
  }
`;

const Header = () => {
  return (
    <StyledHeader className="content-section">
      NEW WEBSITE COMING UP SOON
    </StyledHeader>
  );
};

const Icon = () => {
  return <StyledIcon className="content-section" />;
};

const Title = () => {
  return <StyledTitle className="content-section" />;
};

const BookCover = () => {
  return <StyledBookCover className="content-section" />;
};

const OrderNow = () => {
  return (
    <StyledOrderNow className="content-section">
      <div>PRE-ORDER THE BOOK</div>
      <div className="arrow"></div>
    </StyledOrderNow>
  );
};

const Ulule = () => {
  return (
    <StyledUlule
      href="https://www.ulule.com/cycling-further-the-book-/coming-soon/"
      target="_blank"
      className="content-section"
    />
  );
};
