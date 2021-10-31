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
  place-self: end center;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  .arrow {
    height: 0;
    width: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid white;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  @media (min-width: 400px) {
    .arrow {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
  @media (min-width: 1050px) {
    grid-column: 3/7;
    grid-row: 1/2;
    font-size: 1.5rem;
  }
`;

const StyledIcon = styled.a`
  background: url(${bikeIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 0.5rem;
  @media (min-width: 1050px) {
    grid-column: 4/6;
    grid-row: 2/3;
  }
`;

const StyledTitle = styled.div`
  background: url(${cyclingFurther});
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  @media (min-width: 1050px) {
    grid-column: 3/7;
    grid-row: 3/4;
    margin-top: 2rem;
    margin-bottom: 0rem;
  }
`;

const StyledBookCover = styled.div`
  background: url(${bookCover});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 1rem;
  @media (min-width: 1050px) {
    grid-column: 3/7;
    grid-row: 4/9;
    margin-top: 2rem;
  }
`;

const StyledOrderNow = styled.div`
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  .arrow {
    height: 0;
    width: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid white;
    margin-top: 1rem;
  }
  @media (min-width: 400px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    .arrow {
      margin-top: 0.5rem;
    }
  }
  @media (min-width: 750px) and (max-width: 1050px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1050px) {
    grid-column: 7/9;
    grid-row: 6/7;
  }
`;

const StyledUlule = styled.a`
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
    <StyledHeader>
      <div>BLOG</div>
      <div className="arrow"></div>
    </StyledHeader>
  );
};

const Icon = () => {
  return <StyledIcon href="https://cyclingfurther.com/" target="_blank" />;
};

const Title = () => {
  return <StyledTitle />;
};

const BookCover = () => {
  return <StyledBookCover />;
};

const OrderNow = () => {
  return (
    <StyledOrderNow>
      <div>PRE-ORDER THE BOOK</div>
      <div className="arrow"></div>
    </StyledOrderNow>
  );
};

const Ulule = () => {
  return (
    <StyledUlule
      href="https://www.ulule.com/cycling-further/"
      target="_blank"
    />
  );
};
