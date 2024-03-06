import styled from "styled-components";
import Button from "@/components/@common/Button";
import {  flex } from "@/styles";

export const Container = styled.nav`
  ${flex.COLUMN_FLEX};
  margin-left: 120px;
`;

export const ButtonBox = styled.div`
  ${flex.FLEX};
  margin-top: 128px;
`;

export const ButtonMode = styled(Button)`
  font-size: 16px;
  margin-left: 16px;
  font-weight: 600;
`;

export const Box = styled.div`
  ${flex.FLEX};
`;
