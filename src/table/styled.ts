import styled from "styled-components";

export const Grade = styled.div<{
  value: number;
}>`
  background: ${({ value }) => {
    if (0 <= value && value <= 2.4) {
      return "#FF7777";
    } else if (2.5 <= value && value <= 4.9) {
      return "#FFBEB8";
    } else if (5 <= value && value <= 7.4) {
      return "#DBF2E3";
    } else if (7.5 <= value && value <= 10) {
      return "#9BE7B7";
    }
  }};
`