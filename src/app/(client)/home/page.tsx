"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import Arrow from "@/assets/Arrow";
import { theme } from "@/styles";
import * as S from "./style";

export default function Home() {
  return (
    <S.Layout>
      <Swiper
        slidesPerView={1}
        modules={[Mousewheel]}
        mousewheel
        direction="vertical"
        speed={1000}
        touchRatio={0}
      >
        <SwiperSlide>
          <S.Display>
            <S.MainTitle>4C로 하나되는 우리</S.MainTitle>
            <S.DownGuide>
              <S.TextGuide>아래로 내려보세요</S.TextGuide>
              <Arrow width="56" height="56" rotate="180" fill={theme.grey900} />
            </S.DownGuide>
          </S.Display>
        </SwiperSlide>
        <SwiperSlide>
          <S.Display>
            <S.MainTitle>4C로 하나되는 우리</S.MainTitle>
          </S.Display>
        </SwiperSlide>
      </Swiper>
    </S.Layout>
  );
}
