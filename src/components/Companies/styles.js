import styled from "styled-components";
import {
  blockBordered,
  jc,
  justifyContentTypes,
  layoutStyles,
} from "../../styles/layout";

export const CompaniesWrapper = styled.section`
  ${layoutStyles};
  ${jc(justifyContentTypes.center)}
  padding-top: 120px;
`;

export const Company = styled.article`
  ${layoutStyles};
  ${blockBordered};
  ${jc(justifyContentTypes.around)};
  height: 120px;
  padding: 20px 40px;
`;

export const CompanyTitle = styled.h3``;

export const CompanyDescription = styled.p``;
