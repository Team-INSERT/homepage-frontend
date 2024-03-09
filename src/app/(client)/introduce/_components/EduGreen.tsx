import { flex, theme, font } from "@/styles";
import styled from "styled-components";
import Clover from "@/assets/Clover";

const EduGreen = () => {
  const { title, nextTitle, explain1, explain2, explain3, img } = {
    title: "가치를 창출하는",
    nextTitle: "창의융합교육",
    explain1: "창의성과 다양성을 존중",
    explain2: "인문학적 소양 함양",
    explain3: "다양한 형태의 융합교육",
    img: <Clover width={114} height={114} />,
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
    box-shadow: 12px 18px 13px rgba(214, 255, 0, 0.15);
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
  left: -22%;
  bottom: 0;
`;
export default EduGreen;
