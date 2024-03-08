"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { HashNavigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Arrow from "@/assets/Arrow";
import Exclude from "@/assets/Exclude";
import Spike from "@/assets/Spike";
import SharpArrow from "@/assets/SharpArrow";
import Cloba from "@/assets/Cloba";
import { theme } from "@/styles";
import * as S from "./style";
import Notice from "./_components/Notice/Notice";

export default function Home() {
  const pages = [
    { main: "Communication", sub: "소통", icon: <Exclude /> },
    { main: "Consideration", sub: "배려", icon: <Spike /> },
    { main: "Cooperation", sub: "협업", icon: <SharpArrow /> },
    { main: "Creativity", sub: "창의성", icon: <Cloba /> },
  ];

  return (
    <S.Layout>
      <Swiper
        className="big-swiper"
        slidesPerView={1}
        modules={[Mousewheel, HashNavigation]}
        mousewheel
        direction="vertical"
        speed={1000}
        touchRatio={1}
        hashNavigation={{
          watchState: true,
        }}
      >
        <SwiperSlide data-hash="slide1">
          <S.Main>
            <S.MainTitle>4C로 하나되는 우리</S.MainTitle>
            <S.DownGuide>
              <S.TextGuide>아래로 내려보세요</S.TextGuide>
              <Arrow width="56" height="56" rotate="180" fill={theme.grey900} />
            </S.DownGuide>
          </S.Main>
        </SwiperSlide>
        {pages.map((item, index) => (
          <SwiperSlide key={index} data-hash={item.main}>
            <S.Center>
              <S.BigContent>{item.main}</S.BigContent>
              <S.SmallContent>{item.sub}</S.SmallContent>
            </S.Center>
            <S.HomeIcon index={index}>{item.icon}</S.HomeIcon>
          </SwiperSlide>
        ))}
        <SwiperSlide data-hash="pictures">
          <S.Center>
            <S.BannerLayout>
              <S.Mou />
              <S.Sw />
              <S.ImgBanner />
              <S.Code />
              <S.Shape />
              <S.Bssm />
              <S.Company />
              <S.Ed />
            </S.BannerLayout>
          </S.Center>
        </SwiperSlide>
        <SwiperSlide data-hash="homePost">
          <Notice />
        </SwiperSlide>
      </Swiper>
    </S.Layout>
  );
}
