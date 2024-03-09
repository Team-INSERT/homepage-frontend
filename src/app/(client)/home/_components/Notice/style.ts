import { flex, font, theme } from "@/styles";
import styled from "styled-components";

export const PostContent = styled.p`
  ${font.Title}
  color: ${theme.grey100};
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const TextBox = styled.div`
  width: 60%;
  margin-top: 8px;
`;
