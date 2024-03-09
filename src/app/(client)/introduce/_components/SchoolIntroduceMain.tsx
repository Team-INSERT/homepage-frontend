import { flex, theme, font } from "@/styles";
import styled from "styled-components";
import Exclude from "@/assets/Exclude";
import Clover from "@/assets/Clover";
import WhiteArrow from "@/assets/WhiteArrow";
import Sharp from "@/assets/Sharp";
import Arrow from "@/assets/Arrow";

const SchoolIntroduceMain = () => {
  return (
    <MainSection>
      <ExcludeImg>
        <Exclude />
      </ExcludeImg>
      <CloverImg>
        <Clover />
      </CloverImg>
      <ArrowImg>
        <WhiteArrow />
      </ArrowImg>
      <SharpImg>
        <Sharp />
      </SharpImg>
      <TitleText>
        <p>Busan</p>
        <Software>Software</Software>
        <Meister>Meister</Meister>
        <Highschool>Highschool</Highschool>
      </TitleText>
      <>
        <TextGuide>아래로 내려보세요</TextGuide>
        <Arrow width="56" height="56" rotate="180" fill={theme.grey200} />
      </>
    </MainSection>
  );
};

export const MainSection = styled.section`
  ${flex.COLUMN_VERTICAL}
  background-color: ${theme.grey900};
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TitleText = styled.div`
  ${flex.COLUMN_VERTICAL}
  ${font.ExtraBigTitle}
  color: ${theme.grey100};
  padding: 120px 247px 30px 240px;
  gap: 23px;
`;
export const Software = styled.div`
  margin-right: 40%;
`;
export const Meister = styled.div`
  margin-left: 35%;
`;
export const Highschool = styled.div`
  margin-left: 18%;
  z-index: 2;
`;

export const ExcludeImg = styled.div`
  position: absolute;
  left: 25%;
  top: 5%;
  transform: translateX(-50%);
  transform: translateY(50%);
`;
export const CloverImg = styled.div`
  position: absolute;
  right: 29%;
  top: 17%;
  transform: translateX(-50%);
  transform: translateY(50%);
`;
export const ArrowImg = styled.div`
  position: absolute;
  left: 28%;
  bottom: 44%;
  transform: translateX(-50%);
  transform: translateY(50%);
`;
export const SharpImg = styled.div`
  position: absolute;
  right: 22%;
  bottom: 24%;
  transform: translateX(-50%);
  transform: translateY(50%);
`;

export const TextGuide = styled.div`
  text-align: center;
  color: ${theme.grey200};
`;

export default SchoolIntroduceMain;
