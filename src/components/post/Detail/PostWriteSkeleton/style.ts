import { flex, font, theme } from "@/styles";
import styled from "styled-components";

export const Display = styled.div`
  ${flex.COLUMN_CENTER}
  width: 664px;
  padding: 60px 24px 40px 24px;
`;
export const Head = styled.div`
  ${flex.COLUMN_FLEX}
  align-items: flex-start;
  gap: 16px;
`;
export const CategoryLayout = styled.div`
  ${flex.CENTER}
  gap: 4px;
`;
export const Category = styled.p`
  color: ${theme.bssmBlue};
  ${font.Text}
`;
export const ArrowLayout = styled.div`
  ${flex.VERTICAL}
  cursor: pointer;
`;
export const Title = styled.input`
  width: 100%;
  ${font.Title}

  &::placeholder {
    color: ${theme.grey200};
  }
`;
export const DropDown = styled.div`
  ${flex.COLUMN_FLEX}
`;
export const DropDownItem = styled.div`
  width: 76px;
  padding: 6px 0 6px 8px;
  ${flex.VERTICAL}
  ${font.Caption}
  cursor: default;

  &:first-child {
    border-radius: 4px 4px 0px 0px;
  }
  &:hover {
    background: ${theme.grey100};
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
  ${flex.CENTER}
  padding: 4px 16px 4px 12px;
  gap: 4px;
  border-radius: 999px;
  border: 1px solid ${theme.bssmBlue};
`;
export const AddText = styled.p`
  color: ${theme.bssmBlue};
  ${font.Caption}
`;
export const FixEnd = styled.div`
  ${flex.END}
  width: 100%;
`;
export const Bottom = styled.div`
  width: 100%;
  ${flex.COLUMN_VERTICAL}
  gap: 64px;
`;
