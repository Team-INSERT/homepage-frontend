import NLogo from "@/assets/NLogo";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useEffect } from "react";

import * as S from "./style";

const Notice = () => {
  // useEffect(() => {
  //   const getNotice = async () => {
  //     const res = await axios.get(
  //       "https://insert.anys34.com/post?category=NOTICE&page=0&size=10",
  //       { withCredentials: true },
  //     );
  //   };
  //   getNotice();
  // }, []);
  return (
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
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <S.TextBox>
              <S.PostContent>
                오늘 학교에서 콘테스트가 열렸스빈다!
              </S.PostContent>
            </S.TextBox>
          </SwiperSlide>
          <SwiperSlide>
            <S.TextBox>
              <S.PostContent>인서트 강지원이 코딩을 안해요.</S.PostContent>
            </S.TextBox>
          </SwiperSlide>
          <SwiperSlide>
            <S.TextBox>
              <S.PostContent>밤돌이로는 마루를 실패했대요.</S.PostContent>
            </S.TextBox>
          </SwiperSlide>
          <SwiperSlide>
            <S.TextBox>
              <S.PostContent>학생 몇명이 기숙사를 퇴소당했대요..</S.PostContent>
            </S.TextBox>
          </SwiperSlide>
          <SwiperSlide>
            <S.TextBox>
              <S.PostContent>수학은 또 규봉쌤이 한대요.</S.PostContent>
            </S.TextBox>
          </SwiperSlide>
        </Swiper>
      </S.SwiperLayout>
    </S.PostLayout>
  );
};

export default Notice;
