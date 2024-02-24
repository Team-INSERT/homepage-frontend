import styled from "styled-components";
import { flex, font } from "@/styles";
import SaveFile from "@/assets/SaveFile";
import LArrow from "@/assets/LeftArrow";
import Button from "../Button";

export const WDisplay = styled.div`
  display: flex;
  width: 664px;
  height: auto;
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
export const WLeftArrow = styled(LArrow)`
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
  align-items: center;
`;
export const RHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
export const RCategoryLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const RCategory = styled.p`
  color: var(--primary-bssm-blue, #007cff);
  ${font.Text}
`;
export const RArrowLayout = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const RTitle = styled.input`
  width: 100%;
  ${font.Title}

  &::placeholder {
    color: var(--grey-200, #d9d9d9);
  }
`;
export const RDropDown = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RDropDownItem = styled.div`
  width: 76px;
  display: flex;
  padding: 6px 0 6px 8px;
  align-items: center;
  ${font.Caption}
  cursor: default;

  &:first-child {
    border-radius: 4px 4px 0px 0px;
  }
  &:hover {
    background: var(--grey-100, #f2f2f2);
  }
`;
export const RContent = styled.textarea`
  margin-top: 32px;
  width: 100%;
  ${font.Text}
  resize: none;

  &::placeholder {
    color: var(--grey-200, #d9d9d9);
  }
`;
export const RAddFile = styled.button`
  display: flex;
  padding: 4px 16px 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 999px;
  border: 1px solid var(--primary-bssm-blue, #007cff);
`;
export const RAddText = styled.p`
  color: var(--primary-bssm-blue, #007cff);
  ${font.Caption}
`;
export const FixEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const RBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;
