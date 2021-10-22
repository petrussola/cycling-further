import * as React from "react";
import bikeIcon from "../images/icon-bike.png";
import bookCover from "../images/book-cover.png";
import cyclingFurther from '../images/cyclingfurther.png'
import ulule from '../images/ulule.png'
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
  grid-column: 3/7;
  grid-row: 1/2;
  place-self: end center;
  text-align: center;
  color: white;
  font-size: 1.5rem;
`;

const StyledIcon = styled.div`
  grid-column: 4/6;
  grid-row: 2/3;
  /* border: 5px solid red; */
  background: url(${bikeIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  `;

const StyledTitle = styled.div`
  grid-column: 3/7;
  grid-row: 3/4;
  background: url(${cyclingFurther});
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  `;

const StyledBookCover = styled.div`
  /* border: 5px solid blue; */
  grid-column: 3/7;
  grid-row: 4/9;
  background: url(${bookCover});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledUlule = styled.div`
  grid-column: 7/8;
  grid-row: 7/8;
  background: url(${ulule});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const StyledOrderNow = styled.div`
  grid-column: 7/8;
  grid-row: 6/7;
  place-self: end center;
  text-align: center;
  color: white;
  /* font-size: 1.5rem; */
`

const Header = () => {
  return <StyledHeader>NEW WEBSITE COMING UP SOON</StyledHeader>;
};

const Icon = () => {
  return <StyledIcon />;
};

const Title = () => {
  return <StyledTitle/>;
};

const BookCover = () => {
  return <StyledBookCover />;
};

const Ulule = () => {
  return <StyledUlule />
}

const OrderNow = () => {
  return <StyledOrderNow>PRE-ORDER THE BOOK</StyledOrderNow>
}
