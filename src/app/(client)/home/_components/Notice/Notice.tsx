import NLogo from "@/assets/NLogo";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useEffect, useState } from "react";

import * as S from "./style";

const Notice = () => {
  const [notice, setNotice] = useState<[object]>();
  useEffect(() => {
    const getNotice = async () => {
      const res = await axios.get(
        "https://insert.anys34.com/post?category=NOTICE&page=0&size=10",
      );
      setNotice(res.data.content);
    };
    getNotice();
  }, []);
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
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop
          pagination={{
            clickable: true,
          }}
        >
          {notice?.map((item, index) => (
            <SwiperSlide key={index}>
              <S.TextBox>
                <S.PostContent>{item.title}</S.PostContent>
              </S.TextBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperLayout>
    </S.PostLayout>
  );
};

export default Notice;
