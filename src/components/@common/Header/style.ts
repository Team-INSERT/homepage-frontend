import styled, { css } from "styled-components";
import { font, theme, flex } from "@/styles";

interface HeaderProps {
  isDarkMode: boolean;
}

export const Container = styled.div<HeaderProps>`
  ${flex.BETWEEN};
  background-color: ${theme.white};
  width: 100%;
  position: fixed;
  padding: 15px 140px 15px 140px;

  ${(props) =>
    props.isDarkMode &&
    css`
      background-color: transparent;
    `}
`;

export const RightBox = styled.div`
  ${flex.VERTICAL}
  gap: 40px;
  cursor: pointer;
`;

export const Text = styled.p<HeaderProps>`
  color: ${theme.grey900};
  ${font.Text};

  ${(props) =>
    props.isDarkMode &&
    css`
      background-color: transparent;
      color: ${theme.white};
    `}
`;

export const LoginText = styled.p`
  color: ${theme.grey900};
  ${font.Text};
`;

export const Logout = styled.p`
  color: ${theme.bssmBlue};
  ${font.Caption}
`;
