import { flex, font, theme } from "@/styles";
import styled, { css } from "styled-components";

export const Container = styled.div<{ color: string }>`
  width: 100%;
  ${flex.COLUMN_FLEX}
  ${font.Caption}
  padding: 38px 140px 27px 140px;
  ${({ color }) =>
    color === "black"
      ? css`
          background-color: ${theme.grey900};
          color: ${theme.grey100};
        `
      : css`
          background-color: ${theme.grey100};
          color: ${theme.grey900};
        `};
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
