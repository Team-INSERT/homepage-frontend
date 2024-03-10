"use client";

import { theme, flex, font } from "@/styles";
import styled from "styled-components";

export const Background = styled.div`
  width: 100svw;
  height: 100svh;
  background: url("/heropage.svg") no-repeat;
  background-size: cover;
`;

export const Container = styled.main`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(7.5px);
  gap: 32px;
  ${flex.COLUMN_CENTER}
`;

export const Text = styled.p`
  text-align: center;
  color: ${theme.white};
  ${font.BigTitle}
`;

export const GoogleLoginBox = styled.button`
  background-color: ${theme.white};
  border-radius: 100px;
  padding: 14px 73px;
  gap: 12px;
  color: ${theme.grey800};
  ${font.Title}
  ${flex.CENTER}
`;
