import { flex, font, theme } from "@/styles";
import styled from "styled-components";

export const Container = styled.div<{ color: string }>`
  width: 100%;
  ${flex.COLUMN_FLEX}
  ${font.Caption}
  background-color: ${(props) =>
    props.color === "black" ? `${theme.grey900}` : `${theme.grey100}`};
  color: ${(props) =>
    props.color === "black" ? `${theme.grey100}` : `${theme.grey900}`};
  padding: 38px 140px 27px 140px;
`;

export const Info = styled.p`
  padding: 32px 0 55px 0;
  gap: 4px;
  ${flex.COLUMN_FLEX}
`;

export const Line = styled.div`
  border: 0.5px solid
    ${(props) =>
      props.color === "black" ? `${theme.grey100}` : `${theme.grey400}`};
`;

export const CopyInfo = styled.div`
  padding-top: 24px;
`;
