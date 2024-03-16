import { flex, font, theme } from "@/styles";
import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  ${flex.CENTER}
`;
export const MainTitle = styled.p`
  ${font.ExtraBigTitle}
`;
export const Layout = styled.div`
  height: 100%;
`;
export const DownGuide = styled.div`
  position: absolute;
  bottom: 5%;
  ${flex.COLUMN_CENTER}
  gap: 8px;
`;
export const TextGuide = styled.p`
  ${font.SmallTitle}
  color: ${theme.grey400};
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
export const Elements = styled.div`
  height: auto;
  ${flex.COLUMN_FLEX}
  margin-top: 115px;
  gap: 121px;
`;
export const PostLayout = styled.div`
  z-index: 2;
  width: 50%;
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
  ${flex.COLUMN_START}
  gap: 16px;
`;
export const LettersTitle = styled.p`
  width: 50%;
  color: ${theme.grey900};
  ${font.BigText}
`;
export const LettersLayout = styled.div`
  ${flex.BETWEEN}
  gap: 24px;
  width: 50%;
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
