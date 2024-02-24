import styled from "styled-components";
import { font, theme, flex } from "@/styles";

export const Container = styled.div`
  ${flex.BETWEEN};
  background-color: ${theme.white};
  width: 100%;
  position: fixed;
  padding: 15px 140px 15px 140px;
`;

export const RightBox = styled.div`
  ${flex.VERTICAL}
  gap: 40px;
  cursor: pointer;
`;

export const Text = styled.p`
  color: ${theme.grey900};
  ${font.Text};
`;
