import styled from "styled-components";
import { flex, font } from "@/styles";
import SaveFile from "@/assets/SaveFile";
import Arrow from "@/assets/Arrow";
import Button from "../Button";

export const WDisplay = styled.div`
  display: flex;
  width: 664px;
  padding: 60px 24px 80px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 24px;
`;
export const WHead = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  ${font.Caption}
  color: var(--grey-400, #B3B3B3);
`;
export const WCatTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const WTitle = styled.p`
  ${font.Title}
  color: #000;
`;
export const WCategory = styled.p`
  color: var(--primary-bssm-blue, #007cff);
  ${font.Text}
`;
export const WDevideLine = styled.img`
  stroke-width: 1px;
  stroke: var(--grey-200, #d9d9d9);
  width: 100%;
  margin-top: 20px;
`;
export const WContent = styled.p`
  color: var(--grey-900, #333);
  ${font.Text}
  width: 100%;
  margin-bottom: 32px;
`;
export const WFileLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 64px;
`;
export const WFileName = styled.button`
  display: flex;
  padding: 6px 9px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: var(--grey-100, #f2f2f2);
  ${font.Caption}
  color: var(--grey-400, #B3B3B3);
`;
export const WFileImg = styled(SaveFile)`
  width: 16px;
  height: 16px;
`;
export const WQuickView = styled.a`
  color: var(--primary-bssm-blue, #007cff);
  ${font.Caption}
  cursor: pointer;
`;
export const WLeftArrow = styled(Arrow)`
  width: 20px;
  height: 20px;
`;
export const WBackToList = styled(Button)`
  ${flex.CENTER}
  display: flex;
  gap: 8px;
`;
export const RDisplay = styled.div`
  display: flex;
  width: 664px;
  padding: 60px 24px 40px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const RHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
export const RCategory = styled.p`
  color: var(--primary-bssm-blue, #007cff);
  ${font.Text}
`;
export const RTitle = styled.input`
  color: var(--grey-200, #d9d9d9);
  width: 100%;
  ${font.Title}
`;
