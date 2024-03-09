"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  HashNavigation,
  Mousewheel,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Arrow from "@/assets/Arrow";
import Exclude from "@/assets/Exclude";
import Spike from "@/assets/Spike";
import SharpArrow from "@/assets/SharpArrow";
import Cloba from "@/assets/Cloba";
import { theme } from "@/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import NLogo from "@/assets/NLogo";
import * as S from "./style";
import Notice from "./_components/Notice/Notice";
import Letter from "./_components/Letter/Letter";
import SchoolPic from "./_components/SchoolPic/SchoolPic";

interface NoticeProp {
  title: "";
  id: "";
}

export default function Home() {
  const pages = [
    { main: "Communication", sub: "소통", icon: <Exclude /> },
    { main: "Consideration", sub: "배려", icon: <Spike /> },
    { main: "Cooperation", sub: "협업", icon: <SharpArrow /> },
    { main: "Creativity", sub: "창의성", icon: <Cloba /> },
  ];

  const [newsLetter, setNewsLetter] = useState();
  const [notice, setNotice] = useState<[]>();

  useEffect(() => {
    const getNotice = async () => {
      const res = await axios.get(
        "https://insert.anys34.com/post?category=NOTICE&page=0&size=10",
      );
      setNotice(res.data.content);
    };
    getNotice();
  }, []);

  useEffect(() => {
    const getNewsLetter = async () => {
      const res = await axios.get(
        "https://insert.anys34.com/post?category=NEWS_LETTER&page=0&size=10",
      );
      setNewsLetter(res.data);
    };
    getNewsLetter();
  }, []);

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
          <S.Elements>
            <S.PostLayout>
              <S.BlueBlur />
              <S.NLogoLayout>
                <NLogo />
              </S.NLogoLayout>
              <S.SwiperLayout>
                <S.PostTitle>공지사항</S.PostTitle>
                <Swiper
                  slidesPerView={1}
                  modules={[Autoplay, Pagination]}
                  speed={600}
                  touchRatio={1}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop
                  pagination={{
                    clickable: true,
                  }}
                >
                  {notice?.map((item: NoticeProp) => (
                    <SwiperSlide key={item.id}>
                      <Notice title={item.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </S.SwiperLayout>
            </S.PostLayout>
            <S.HomeLettersLayout>
              <S.LettersTitle>가정통신문</S.LettersTitle>
              <S.LettersLayout>
                <Letter />
                <Letter />
                <Letter />
              </S.LettersLayout>
            </S.HomeLettersLayout>
          </S.Elements>
        </SwiperSlide>
        <SwiperSlide data-hash="galery">
          <S.Center>
            <SchoolPic />
            <SchoolPic />
          </S.Center>
        </SwiperSlide>
      </Swiper>
    </S.Layout>
  );
}
