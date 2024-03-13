"use client";

import styled from "styled-components";
import Link from "next/link";
import { flex, font, theme } from "@/styles";
import Button from "@/components/@common/Button";

export const Container = styled.main`
  width: 664px;
  padding: 60px 24px 80px 24px;
  background-color: ${theme.white};
  border-radius: 24px;
  ${flex.COLUMN_FLEX}
`;

export const Category = styled.p`
  margin-bottom: 16px;
  color: ${theme.bssmBlue};
  ${font.Text};
`;

export const Title = styled.h1`
  margin-bottom: 12px;
  color: ${theme.grey900};
  ${font.Title};
`;

export const WriteInfo = styled.p`
  margin-bottom: 24px;
  color: ${theme.grey400};
  ${font.Caption}
`;

export const LinkImgBox = styled.div`
  gap: 32px;
  ${flex.FLEX}
`;

export const LinkImg = styled.img`
  width: 100%;
`;

export const Content = styled.article`
  margin: 32px 0;
  color: ${theme.grey900};
  ${font.Text}
`;

export const FilesBox = styled.div`
  gap: 16px;
  ${flex.COLUMN_FLEX}
`;

export const FileButtonBox = styled.div`
  gap: 8px;
  ${flex.START}
`;

export const FileButton = styled(Button)`
  padding: 6px 9px;
  gap: 8px;
  ${font.Caption}
  ${flex.CENTER}
`;

export const View = styled(Link)`
  color: ${theme.bssmBlue};
  ${font.Caption}
  cursor: pointer;
`;

export const BackButton = styled(Button)`
  margin-top: 64px;
  gap: 8px;
  ${font.SmallText}
  ${flex.CENTER}
`;
