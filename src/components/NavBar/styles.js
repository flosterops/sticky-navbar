import styled from "styled-components";
import {
  alignItemTypes,
  blockBordered,
  jc,
  ai,
  justifyContentTypes,
  layoutStyles,
} from "../../styles/layout";
import { colors } from "../../styles/colors";

export const StyledNavBar = styled.nav`
  ${layoutStyles};
  ${blockBordered};
  background: ${colors.white};
  height: 120px;
  position: fixed;
  transition: top 0.3s;
  top: 0;
  z-index: 1;
`;

export const TopNav = styled.div`
  ${layoutStyles};
  ${jc(justifyContentTypes.center)};
  ${ai(alignItemTypes.center)};
  height: 60px;
  background: ${colors.dark};
  color: ${colors.white};
`;

export const BottomNav = styled.div`
  ${layoutStyles};
  height: 60px;
  color: ${colors.dark};
  ${jc(justifyContentTypes.center)};
  ${ai(alignItemTypes.center)};
`;
