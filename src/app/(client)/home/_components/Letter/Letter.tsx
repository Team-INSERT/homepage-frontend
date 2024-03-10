import { font, theme } from "@/styles";
import styled from "styled-components";
import { LetterProp } from "../../page";

const Letter = ({ title, contents, createdDate }: LetterProp) => {
  return (
    <LetterLayout>
      <LetterTextLayout>
        <LetterTitle>{title}</LetterTitle>
        <LetterContent>{contents}</LetterContent>
      </LetterTextLayout>
      <Date>{`${createdDate[0]}.${createdDate[1]}.${createdDate[2]}`}</Date>
    </LetterLayout>
  );
};

export const LetterLayout = styled.div`
  padding: 27px 17px 22px 15px;
  background-color: ${theme.grey100};
  border-radius: 16px;
  height: 175px;
  width: 100%;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: ${theme.bssmBlue};
  }
  &:hover > div > p {
    color: ${theme.grey100};
  }
  &:hover > p {
    color: ${theme.grey100};
  }
`;
export const LetterTextLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const LetterTitle = styled.p`
  ${font.SmallTitle}
  color: ${theme.grey900};
`;
export const LetterContent = styled.p`
  ${font.Text}
  color: ${theme.grey400};
`;
export const Date = styled.p`
  position: absolute;
  left: 15px;
  bottom: 22px;
  ${font.Caption}
  color: ${theme.grey400};
  margin-top: 16px;
`;

export default Letter;
