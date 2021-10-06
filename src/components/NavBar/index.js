import React, { useRef } from "react";
import { StyledNavBar, TopNav, BottomNav } from "./styles";
import { useNavBarHide } from "../../hooks/useNavBarHide";

const NavBar = () => {
  const ref = useRef();
  useNavBarHide(ref, "-60px", 200);

  return (
    <StyledNavBar ref={ref}>
      <TopNav>Nav bar part 1</TopNav>
      <BottomNav>Nav bar part 2</BottomNav>
    </StyledNavBar>
  );
};

export { NavBar };
