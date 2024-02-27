import { font } from "@/styles";
import styled from "styled-components";

export const Display = styled.div`
  display: flex;
  width: 664px;
  padding: 60px 24px 40px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
export const CategoryLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const Category = styled.p`
  color: var(--primary-bssm-blue, #007cff);
  ${font.Text}
`;
export const ArrowLayout = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Title = styled.input`
  width: 100%;
  ${font.Title}

  &::placeholder {
    color: var(--grey-200, #d9d9d9);
  }
`;
export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DropDownItem = styled.div`
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
export const Content = styled.textarea`
  margin-top: 32px;
  width: 100%;
  ${font.Text}
  resize: none;

  &::placeholder {
    color: var(--grey-200, #d9d9d9);
  }
`;
export const AddFile = styled.button`
  display: flex;
  padding: 4px 16px 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 999px;
  border: 1px solid var(--primary-bssm-blue, #007cff);
`;
export const AddText = styled.p`
  color: var(--primary-bssm-blue, #007cff);
  ${font.Caption}
`;
export const FixEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;
