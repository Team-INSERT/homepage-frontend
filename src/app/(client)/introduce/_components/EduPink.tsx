import { flex, theme, font } from "@/styles";
import styled from "styled-components";
import Sharp from "@/assets/Sharp";

const EduPink = () => {
  const { title, nextTitle, explain1, explain2, explain3, img } = {
    title: "할 줄 아는",
    nextTitle: "실무중심교육",
    explain1: "산학 맞춤형 교육과정",
    explain2: "학생 참여중심 수업",
    explain3: "자기주도적 학습능력 함양",
    img: <Sharp width={139} height={133} />,
  };

  return (
    <Box>
      <Title>
        <p>{title}</p>
        <p>{nextTitle}</p>
      </Title>
      <SubTextBox>
        <SubText>{explain1}</SubText>
        <SubText>{explain2}</SubText>
        <SubText>{explain3}</SubText>
        <SubImg>{img}</SubImg>
      </SubTextBox>
    </Box>
  );
};

const Box = styled.div`
  ${flex.COLUMN_FLEX}
  width: 15%;
  height: 40%;
  background-color: ${theme.grey900};
  color: ${theme.grey100};
  border-radius: 16px;
  padding: 48px 23px 127px 24px;
  position: relative;
  overflow: hidden;
  gap: 24px;
  &:hover {
    background: var(--grey-900, #333);
    box-shadow: 12px 18px 13px 0px rgba(255, 59, 171, 0.15);
  }
`;
const Title = styled.p`
  ${flex.COLUMN_FLEX}
  ${font.BigTitle}
`;

const SubTextBox = styled.ul`
  padding-left: 20px;
  color: ${theme.white};
  ${font.Text}
`;

const SubText = styled.li`
  line-height: 200%;
  list-style: circle;
  ::marker {
    color: ${theme.white};
  }
`;

const SubImg = styled.div`
  position: absolute;
  display: flex;
  left: 60%;
  bottom: -11%;
`;
export default EduPink;
