"use client";

// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SchoolIntroduceMain from "./_components/SchoolIntroduceMain";

// import { Mousewheel } from "swiper/modules";

const SchoolIntroduce = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // 페이지가 바뀔떄 적용
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <SchoolIntroduceMain />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SchoolIntroduce;
