import styled from "styled-components";
import { flex, font, theme } from "@/styles";
import SaveFile from "@/assets/SaveFile";
import LArrow from "@/assets/LeftArrow";
import Button from "../../../@common/Button";

export const Display = styled.div`
  width: 664px;
  height: auto;
  padding: 60px 24px 80px 24px;
  ${flex.COLUMN_HORIZONTAL}
  align-items: flex-start;
  border-radius: 24px;
`;
export const Head = styled.div`
  ${flex.COLUMN_FLEX}
  width: 100%;
  gap: 12px;
  margin-bottom: 24px;
  ${font.Caption}
  color: ${theme.grey400};
`;
export const CatTitle = styled.div`
  ${flex.COLUMN_FLEX}
  gap: 16px;
`;
export const Title = styled.p`
  ${font.Title}
  color: ${theme.black};
`;
export const Category = styled.p`
  color: ${theme.bssmBlue};
  ${font.Text}
`;
export const DevideLine = styled.img`
  stroke-width: 1px;
  stroke: ${theme.grey200};
  width: 100%;
  margin-top: 20px;
`;
export const Content = styled.p`
  color: ${theme.grey900};
  ${font.Text}
  width: 100%;
  margin-bottom: 32px;
`;
export const FileLayout = styled.div`
  ${flex.CENTER}
  gap: 8px;
  margin-bottom: 64px;
`;
export const FileName = styled.button`
  ${flex.CENTER}
  padding: 6px 9px;
  gap: 8px;
  border-radius: 100px;
  background: ${theme.grey100};
  ${font.Caption}
  color: ${theme.grey400};
`;
export const FileImg = styled(SaveFile)`
  width: 16px;
  height: 16px;
`;
export const QuickView = styled.a`
  color: ${theme.bssmBlue};
  ${font.Caption}
  cursor: pointer;
`;
export const LeftArrow = styled(LArrow)`
  width: 20px;
  height: 20px;
`;
export const BackToList = styled(Button)`
  ${flex.CENTER}
  gap: 8px;
`;
