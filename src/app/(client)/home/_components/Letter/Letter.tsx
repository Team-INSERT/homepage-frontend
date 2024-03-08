import { font, theme } from "@/styles";
import styled from "styled-components";

const Letter = () => {
  return (
    <LetterLayout>
      <LetterTextLayout>
        <LetterTitle>가정 통신문 제목 가정 통신</LetterTitle>
        <LetterContent>
          가정통신문 내용 가정통신문 내용 가정통신문 내용 가정통신문 내용
          가정통신문 내용 가정통신문
        </LetterContent>
      </LetterTextLayout>
      <Date>2024.01.01</Date>
    </LetterLayout>
  );
};

export const LetterLayout = styled.div`
  padding: 27px 17px 22px 15px;
  background-color: ${theme.grey100};
  border-radius: 16px;
  max-width: 232px;
  cursor: pointer;

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
  ${font.Caption}
  color: ${theme.grey400};
  margin-top: 16px;
`;

export default Letter;
