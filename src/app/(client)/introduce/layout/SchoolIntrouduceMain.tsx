"use client";

import { flex, theme, font } from "@/styles";
import styled from "styled-components";
import Arrow from "@/assets/Arrow";
import Exclude from "@/assets/Exclude";
import Clover from "@/assets/Clover";
import WhiteArrow from "@/assets/WhiteArrow";
import Sharp from "@/assets/Sharp";

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
      <DownGuide>
        <TextGuide>아래로 내려보세요</TextGuide>
        <Arrow width="56" height="56" rotate="180" fill={theme.grey200} />
      </DownGuide>
    </MainSection>
  );
};

const MainSection = styled.section`
  ${flex.COLUMN_VERTICAL}
  background-color: ${theme.grey900};
  width: 100%;
  height: 100%;
  position: relative;
`;

const TitleText = styled.div`
  ${flex.COLUMN_VERTICAL}
  ${font.ExtraBigTitle}
  color: ${theme.grey100};
  padding: 120px 247px 40px 240px;
  gap: 23px;
`;
const Software = styled.div`
  margin-right: 40%;
`;
const Meister = styled.div`
  margin-left: 35%;
`;
const Highschool = styled.div`
  margin-left: 18%;
  z-index: 2;
`;

const ExcludeImg = styled.div`
  position: absolute;
  left: 25%;
  top: 5%;
  transform: translateX(-50%);
  transform: translateY(50%);
`;
const CloverImg = styled.div`
  position: absolute;
  right: 29%;
  top: 17%;
  transform: translateX(-50%);
  transform: translateY(50%);
`;
const ArrowImg = styled.div`
  position: absolute;
  left: 28%;
  bottom: 44%;
  transform: translateX(-50%);
  transform: translateY(50%);
`;
const SharpImg = styled.div`
  position: absolute;
  right: 22%;
  bottom: 24%;
  transform: translateX(-50%);
  transform: translateY(50%);
`;

const TextGuide = styled.p`
  text-align: center;
  ${font.SmallTitle}
  color: ${theme.grey200};
`;

export const DownGuide = styled.div`
  position: absolute;
  bottom: 5%;
  ${flex.COLUMN_CENTER}
  gap: 8px;
`;

export default SchoolIntroduceMain;
