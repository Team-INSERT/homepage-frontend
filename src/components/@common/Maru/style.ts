import styled from "styled-components";
import { font, theme, flex } from "@/styles";

export const Container = styled.div`
  ${flex.BETWEEN};
  background-color: ${theme.grey900};
  width: 100%;
  padding: 72px 140px 72px 140px;
`;

export const TextBox = styled.div`
  ${flex.COLUMN_FLEX};
`;
export const Text = styled.p`
  color: ${theme.white};
  ${font.BigTitle};
  font-size: 40px;
`;
