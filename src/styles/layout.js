import { css } from "styled-components";
import { colors } from "./colors";

export const alignItemTypes = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
};

export const justifyContentTypes = {
  stretch: "stretch",
  center: "center",
  start: "flex-start",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

const flexDirectionTypes = {
  row: "row",
  column: "column",
};

export const ai = (type) => css`
  align-items: ${type};
`;

export const jc = (type) => css`
  justify-content: ${type};
`;

export const direction = (type) => css`
  flex-direction: ${type};
`;

export const layoutStyles = css`
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  ${ai(alignItemTypes.start)};
  ${jc(justifyContentTypes.stretch)};
  ${direction(flexDirectionTypes.column)}
`;

export const blockBordered = css`
  border-bottom: 1px solid ${colors.borderGrey};
  justify-content: space-between;
`;
