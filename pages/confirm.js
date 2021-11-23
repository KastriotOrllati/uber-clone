import React from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

const Confirm = (props) => {
  return (
    <Wrapper>
      <Map />
      <RideContainer>RideSelector ConfirmButton</RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`flex flex-col h-screen`;
const RideContainer = tw.div`flex-1`;
