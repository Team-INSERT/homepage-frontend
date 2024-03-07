import { flex, font, theme } from "@/styles";
import styled from "styled-components";

export const PostLayout = styled.div`
  z-index: 2;
  width: 50%;
  height: 130px;
  margin-top: 65px;
  ${flex.COLUMN_CENTER}
  position: relative;
  left: 50%;
  top: 5%;
  transform: translateX(-50%);
  padding: 26px 0px 26px 16px;
  background-color: ${theme.bssmBlue};
  border-radius: 16px;

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    width: 100% !important;
    height: 100%;
  }
  .swiper-pagination {
    position: absolute;
    left: 63%;
    bottom: 0;
    transform: translateX(-50%);
  }
`;
export const NLogoLayout = styled.div`
  position: absolute;
  right: 0;
  z-index: 3;
`;
export const TextBox = styled.div`
  ${flex.COLUMN_FLEX}
  gap: 8px;
  width: 60%;
`;
export const PostTitle = styled.p`
  ${font.SmallText}
  color: ${theme.grey100};
`;
export const PostContent = styled.p`
  ${font.Title}
  color: ${theme.grey100};
  text-overflow: ellipsis;
  overflow: hidden;
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
