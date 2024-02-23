import styled from "styled-components";
import { default as theme } from "@/styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.grey900};
  padding: 72px 140px 72px 140px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.p`
  color: ${theme.white};
  font-size: 40px;
  font-weight: 700;
  line-height: 110%;
`;
