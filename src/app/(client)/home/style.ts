import { flex, font, theme } from "@/styles";
import styled, { keyframes } from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  ${flex.COLUMN_CENTER}
`;
export const MainTitle = styled.p`
  ${font.ExtraBigTitle}
`;
export const Layout = styled.div`
  height: 100%;
`;
export const DownGuide = styled.div`
  position: absolute;
  bottom: 3%;
  ${flex.COLUMN_CENTER}
  gap: 8px;
`;
const guideColor = keyframes`
  0% {
    color: ${theme.grey400};
  }
  50% {
    color: ${theme.grey600};
  }
  100% {
    color: ${theme.grey400};
  }
`;
export const TextGuide = styled.p`
  ${font.SmallTitle}
  animation: ${guideColor} 1.5s infinite;
`;
export const Center = styled.div`
  width: 100%;
  height: 100vh;
  ${flex.COLUMN_CENTER}
`;
export const BigContent = styled.p`
  ${font.BigTitle3}
  color: ${theme.grey900};
`;
export const SmallContent = styled.p`
  ${font.Title}
  color: ${theme.grey900};
`;
const translateY = ["-47%", "-75%", "-90%", "-60%"];
export const HomeIcon = styled.div<{ index: number }>`
  position: absolute;
  bottom: 0;
  ${({ index }) => (index % 2 === 0 ? "right: 0;" : "left: 0;")}
  ${({ index }) => `top: 50%; transform: translateY(${translateY[index]});`}
`;
export const HeaderBlock = styled.div`
  height: 64px;
  width: 100%;
`;
export const BannerLayout = styled.div`
  margin-right: 13.5%;
  margin-left: 13.5%;
  ${flex.COLUMN_CENTER}
  height: calc(100% - 64px);
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  max-width: 719px;

  &:nth-child(2),
  &:last-child {
    margin-top: 12px;
  }
`;
export const SmallGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 13px;
`;
export const Colspan = styled.div`
  grid-column: 1/-1;
`;
export const Reward = styled.div`
  width: 360px;
  height: 178px;
  background-color: aliceblue;
`;
export const Elements = styled.div`
  height: auto;
  ${flex.COLUMN_FLEX}
  margin-top: 115px;
  gap: 121px;
  margin-left: 13.5%;
  margin-right: 13.5%;
`;
export const PostLayout = styled.div`
  z-index: 2;
  height: 130px;
  ${flex.COLUMN_CENTER}
  position: relative;
  left: 50%;
  top: 5%;
  transform: translateX(-50%);
  padding: 26px 0px 26px 16px;
  background-color: ${theme.bssmBlue};
  border-radius: 16px;

  .swiper-pagination {
    position: absolute;
    left: 63%;
    bottom: 15%;
    transform: translateX(-50%);
  }
`;
export const NLogoLayout = styled.div`
  position: absolute;
  right: 0;
  z-index: 3;
`;
export const PostTitle = styled.p`
  ${font.SmallText}
  color: ${theme.grey100};
`;
export const SwiperLayout = styled.div`
  position: absolute;
  top: 26px;
  left: 16px;
  width: 75%;
  height: 100%;
`;
export const BlueBlur = styled.div`
  z-index: 3;
  height: 100%;
  width: 20%;
  background: linear-gradient(to right, transparent 0%, ${theme.bssmBlue} 100%);
  position: absolute;
  left: 58%;
`;
export const HomeLettersLayout = styled.div`
  width: 100%;
  gap: 16px;
`;
export const LettersTitle = styled.p`
  color: ${theme.grey900};
  ${font.BigText}
`;
export const LettersLayout = styled.div`
  ${flex.BETWEEN}
  gap: 24px;
`;
export const SchoolPicLayout = styled.div`
  display: flex;
  column-gap: 24px;
  row-gap: 40px;
  flex-wrap: wrap;
  width: 616px;
  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -50%);
`;
