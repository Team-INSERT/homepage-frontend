import { flex, font, theme } from "@/styles";
import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  ${flex.CENTER}
`;
export const MainTitle = styled.p`
  font-size: 80px;
  font-weight: 900;
  line-height: 110%;
`;
export const Layout = styled.div`
  height: 100%;
`;
export const DownGuide = styled.div`
  position: absolute;
  bottom: 5%;
  ${flex.COLUMN_CENTER}
  gap: 8px;
`;
export const TextGuide = styled.p`
  ${font.SmallTitle}
  color: ${theme.grey400};
`;
export const Center = styled.div`
  width: 100%;
  height: 100vh;
  ${flex.COLUMN_CENTER}
`;
export const BigContent = styled.p`
  font-family: "Wanted Sans";
  font-size: 60px;
  font-style: normal;
  font-weight: 900;
  line-height: 110%;
  color: ${theme.grey900};
`;
export const SmallContent = styled.p`
  ${font.Title}
  color: ${theme.grey900};
`;
