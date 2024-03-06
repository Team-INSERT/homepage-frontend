"use client";

import styled, { RuleSet, css } from "styled-components";
import { theme } from "@/styles";

type ButtonMode = "BLUE" | "NO_GLOW" | "BLUE_GLOW" | "RED_GLOW" | "WHITE";
type RadiusMode = number | "MAX";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode: ButtonMode;
  radius: RadiusMode;
}

const ButtonType = (mode: ButtonMode): RuleSet<object> => {
  switch (mode) {
    case "BLUE":
      return css`
        background-color: ${theme.bssmBlue};
        border: none;
        color: ${theme.white};
      `;
    case "WHITE":
      return css`
        background-color: ${theme.grey100};
        border: none;
        color: ${theme.grey400};
      `;
    case "BLUE_GLOW":
      return css`
        background-color: transparent;
        border: 2px solid ${theme.bssmBlue};
        color: ${theme.bssmBlue};
      `;
    case "RED_GLOW":
      return css`
        background-color: transparent;
        border: 2px solid ${theme.red};
        color: ${theme.red};
      `;
    case "NO_GLOW":
      return css`
        background-color: transparent;
        border: 1.5px solid ${theme.grey400};
        color: ${theme.black};
      `;
    default:
      return css``;
  }
};

const RadiusType = (radius: RadiusMode): RuleSet<object> => {
  switch (radius) {
    case "MAX":
      return css`
        border-radius: 999px;
        padding: 8px 16px;
      `;
    default:
      return css`
        border-radius: ${radius}px;
        padding: 12px 20px;
      `;
  }
};

const Button = ({ mode, radius, ...props }: ButtonProps) => {
  return (
    <StyledButton
      mode={ButtonType(mode)}
      radius={RadiusType(radius)}
      {...props}
    />
  );
};

const StyledButton = styled.button<{
  mode: RuleSet<object>;
  radius: RuleSet<object>;
}>`
  width: fit-content;
  ${({ mode }) => mode}
  ${({ radius }) => radius}
`;

export default Button;
