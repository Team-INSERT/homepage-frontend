import styled from "styled-components";
import { font, theme } from "@/styles";

export const Back = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 0 24px 0;
`;

export const Content = styled.p`
  color: ${theme.grey600};
  ${font.Caption}
`;
