import { flex, theme, font } from "@/styles";
import styled from "styled-components";
import Exclude from "@/assets/Exclude";

const EduBlue = () => {
  const { title, nextTitle, explain1, explain2, explain3, img } = {
    title: "소통과 배려의",
    nextTitle: "인성교육",
    explain1: "체험중심의 인성교육",
    explain2: "존중과 배려의 학교생활",
    explain3: "공감하고 소통하는 문화",
    img: <Exclude width={129} height={130} />,
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
    box-shadow: 12px 18px 13px 0px rgba(0, 124, 255, 0.15);
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
  left: 30%;
  bottom: -12%;
  transform: rotate(-40deg);
`;
export default EduBlue;
