"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import SchoolIntroduceMain from "./layout/SchoolIntrouduceMain";
import IntroduceDepartment from "./layout/IntroduceDepartment";

const SchoolIntroduce = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        direction="vertical"
        speed={1000}
        slidesPerView={1}
        modules={[Mousewheel]}
        // 페이지가 바뀔떄 적용
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <SchoolIntroduceMain />
        </SwiperSlide>
        <SwiperSlide>
          <div>glgl</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SchoolIntroduce;
