"use client";

import * as S from "./style";
import Logo from "@/assets/logo";

export default function Home() {
  return (
    <>
      <S.Container>
        <Logo />
        <S.RightBox>
          <S.Home>홈</S.Home>
          <S.Intro>학교소개</S.Intro>
          <S.News>학교소식</S.News>
        </S.RightBox>
      </S.Container>
    </>
  );
}
