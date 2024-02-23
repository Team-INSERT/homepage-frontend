import styled from "styled-components";
import { default as font } from "@/styles/font";
import { default as theme } from "@/styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 140px 15px 140px;
`;

export const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  cursor: pointer;
`;

export const Home = styled.p`
  color: ${theme.grey900};
  ${font.Text};

  &:hover {
    color: ${theme.black};
    font-weight: 700;
  }
`;

export const Intro = styled.p`
  color: ${theme.grey900};
  ${font.Text};

  &:hover {
    color: ${theme.black};
    font-weight: 700;
  }
`;

export const News = styled.p`
  color: ${theme.grey900};
  ${font.Text};

  &:hover {
    color: ${theme.black};
    font-weight: 700;
  }
`;
