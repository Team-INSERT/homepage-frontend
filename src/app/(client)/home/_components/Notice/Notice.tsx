import NLogo from "@/assets/NLogo";
import {
  Autoplay,
  EffectFade,
  HashNavigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./style";

const Notice = () => {
  return (
    <S.PostLayout>
      <S.BlueBlur />
      <S.NLogoLayout>
        <NLogo />
      </S.NLogoLayout>
      <S.SwiperLayout>
        <Swiper
          slidesPerView={1}
          modules={[HashNavigation, Autoplay, Pagination, EffectFade]}
          speed={600}
          // effect="fade"
          touchRatio={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          pagination
          hashNavigation={{
            watchState: true,
          }}
        >
          <SwiperSlide>
            <S.TextBox>
              <S.PostTitle>공지사항</S.PostTitle>
              <S.PostContent>
                오늘 학교에서 콘테스트가 열렸스빈다!
              </S.PostContent>
            </S.TextBox>
          </SwiperSlide>
          <SwiperSlide>
            <S.TextBox>
              <S.PostTitle>공지사항</S.PostTitle>
              <S.PostContent>인서트 강지원이 코딩을 안해요.</S.PostContent>
            </S.TextBox>
          </SwiperSlide>
          <SwiperSlide>
            <S.TextBox>
              <S.PostTitle>공지사항</S.PostTitle>
              <S.PostContent>인서트 강지원이 코딩을 안해요.</S.PostContent>
            </S.TextBox>
          </SwiperSlide>
          <SwiperSlide>
            <S.TextBox>
              <S.PostTitle>공지사항</S.PostTitle>
              <S.PostContent>인서트 강지원이 코딩을 안해요.</S.PostContent>
            </S.TextBox>
          </SwiperSlide>
          <SwiperSlide>
            <S.TextBox>
              <S.PostTitle>공지사항</S.PostTitle>
              <S.PostContent>인서트 강지원이 코딩을 안해요.</S.PostContent>
            </S.TextBox>
          </SwiperSlide>
        </Swiper>
      </S.SwiperLayout>
    </S.PostLayout>
  );
};

export default Notice;
