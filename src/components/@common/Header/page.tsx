"use client";

import * as S from "./style";
import Link from "next/link";
import Logo from "@/assets/logo";

export default function Home() {
  return (
    <>
      <S.Container>
        <Logo />
        <S.RightBox>
          <Link href="/home">
            <S.Text>홈</S.Text>
          </Link>
          <Link href="/Intro">
            <S.Text>학교소개</S.Text>
          </Link>
          <Link href="/News">
            <S.Text>학교소식</S.Text>
          </Link>
        </S.RightBox>
      </S.Container>
    </>
  );
}
