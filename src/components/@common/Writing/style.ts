import styled from "styled-components";
import { font } from "@/styles";
import SaveFile from "@/assets/SaveFile";

export const Display = styled.div`
  background-color: aliceblue;
  display: flex;
  width: 664px;
  padding: 60px 24px 80px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Head = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  ${font.Caption}
  color: var(--grey-400, #B3B3B3);
`;
export const CatTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Title = styled.p`
  ${font.Title}
  color: #000;
`;
export const Category = styled.p`
  color: var(--primary-bssm-blue, #007cff);
  ${font.Text}
`;
export const DevideLine = styled.img`
  stroke-width: 1px;
  stroke: var(--grey-200, #d9d9d9);
  width: 100%;
  margin-top: 20px;
`;
export const Content = styled.p`
  color: var(--grey-900, #333);
  ${font.Text}
  width: 100%;
  margin-bottom: 32px;
`;
export const FileLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const FileName = styled.button`
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
export const FileImg = styled(SaveFile)`
  width: 16px;
  height: 16px;
`;
export const QuickView = styled.p`
  color: var(--primary-bssm-blue, #007cff);
  ${font.Caption}
`;
