"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
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
import Footer from "@/components/@common/Footer";
import { usePostLetter, usePostNotice } from "@/services/post/usePostService";
import Notice from "./_components/Notice/Notice";
import Letter from "./_components/Letter/Letter";
import SchoolPic from "./_components/SchoolPic/SchoolPic";
import * as S from "./style";

interface NoticeProp {
  title: "";
  id: "";
}

export interface LetterProp {
  title: "";
  contents: "";
  createdDate: "";
}

export default function Home() {
  const pages = [
    { main: "Communication", sub: "소통", icon: <Exclude /> },
    { main: "Consideration", sub: "배려", icon: <Spike /> },
    { main: "Cooperation", sub: "협업", icon: <SharpArrow /> },
    { main: "Creativity", sub: "창의성", icon: <Cloba /> },
  ];

  const [newsLetter, setNewsLetter] = useState<[]>();
  const [notice, setNotice] = useState<[]>();

  const [page, setPage] = useState(0);
  const schoolImgList = [1, 2, 3, 4];

  // api
  const { data: postNotice } = usePostNotice();
  const { data: postLetter } = usePostLetter();

  // console.log(postLetter);
  // console.log(postNotice);

  return (
    <S.Layout>
      <Swiper
        onSlideChange={() => setPage(page + 1)}
        className="main-swiper"
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
        <SwiperSlide data-hash="pictures" />
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
                {newsLetter?.map((item: LetterProp, index) =>
                  index < 3 ? (
                    <Letter
                      title={item.title}
                      contents={item.contents}
                      createdDate={item.createdDate}
                      key={index}
                    />
                  ) : null,
                )}
              </S.LettersLayout>
            </S.HomeLettersLayout>
          </S.Elements>
        </SwiperSlide>
        <SwiperSlide data-hash="galery">
          <S.SchoolPicLayout>
            {schoolImgList?.map((item, index) => <SchoolPic index={index} />)}
          </S.SchoolPicLayout>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Footer color="" />
        </SwiperSlide> */}
      </Swiper>
    </S.Layout>
  );
}
