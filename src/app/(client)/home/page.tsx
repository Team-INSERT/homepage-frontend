"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Arrow from "@/assets/Arrow";
import Exclude from "@/assets/Exclude";
import Spike from "@/assets/Spike";
import SharpArrow from "@/assets/SharpArrow";
import Cloba from "@/assets/Cloba";
import { theme } from "@/styles";
import NLogo from "@/assets/NLogo";
import TrianglesBlock from "@/assets/Banners/TrianglesBlock";
import Brace from "@/assets/Banners/Brace";
import Company from "@/assets/Banners/Company";
import Awl from "@/assets/Banners/Awl";
import Bssm from "@/assets/Banners/Bssm";
import Bssm2 from "@/assets/Banners/Bssm2";
import Employment from "@/assets/Banners/Employment";
import EB from "@/assets/Banners/EB";
import SW from "@/assets/Banners/SW";
import Future from "@/assets/Banners/Future";

import Footer from "@/components/@common/Footer";
import { usePostLetter, usePostNotice } from "@/services/post/usePostService";
import Notice from "./_components/Notice";
import Letter from "./_components/Letter";
import SchoolPic from "./_components/SchoolPic";
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
  const schoolImgList = [1, 2, 3, 4];
  const pages = [
    { main: "Communication", sub: "소통", icon: <Exclude /> },
    { main: "Consideration", sub: "배려", icon: <Spike /> },
    { main: "Cooperation", sub: "협업", icon: <SharpArrow /> },
    { main: "Creativity", sub: "창의성", icon: <Cloba /> },
  ];

  const { data: postNotice } = usePostNotice();
  const { data: postLetter } = usePostLetter();

  return (
    <S.Layout>
      <Swiper
        slidesPerView={1}
        modules={[Mousewheel]}
        mousewheel
        direction="vertical"
        speed={1000}
        touchRatio={1}
      >
        <SwiperSlide>
          <S.Main>
            <S.MainTitle>4C로 하나되는 우리</S.MainTitle>
            <S.DownGuide>
              <S.TextGuide>아래로 내려보세요</S.TextGuide>
              <Arrow width="56" height="56" rotate="180" fill={theme.grey900} />
            </S.DownGuide>
          </S.Main>
        </SwiperSlide>
        {pages.map((item, index) => (
          <SwiperSlide key={index}>
            <S.Center>
              <S.BigContent>{item.main}</S.BigContent>
              <S.SmallContent>{item.sub}</S.SmallContent>
            </S.Center>
            <S.HomeIcon index={index}>{item.icon}</S.HomeIcon>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <S.Layout>
            <S.HeaderBlock />
            <S.BannerLayout>
              <S.Grid>
                <TrianglesBlock />
                <Brace />
                <S.Reward />
              </S.Grid>
              <S.Grid>
                <Company />
                <S.SmallGrid>
                  <Awl />
                  <Bssm />
                  <S.Colspan>
                    <Future />
                  </S.Colspan>
                </S.SmallGrid>
                <Bssm2 />
              </S.Grid>
              <S.Grid>
                <Employment />
                <EB />
                <SW />
              </S.Grid>
            </S.BannerLayout>
          </S.Layout>
        </SwiperSlide>
        <SwiperSlide>
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
                  {postNotice?.content?.map((item: NoticeProp) => (
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
                {postLetter?.content?.map((item: LetterProp, index: number) =>
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
        <SwiperSlide>
          <S.SchoolPicLayout>
            {schoolImgList?.map((item, index) => (
              <SchoolPic key={index} index={index} />
            ))}
          </S.SchoolPicLayout>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Footer color="" />
        </SwiperSlide> */}
      </Swiper>
    </S.Layout>
  );
}
