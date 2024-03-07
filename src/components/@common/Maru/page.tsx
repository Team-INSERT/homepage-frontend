"use client";

import * as S from "./style";
import Marulogo from "@/assets/Marulogo";

export default function Home() {
  return (
    <>
      <S.Container>
        <S.TextBox>
          <S.Text>입학,</S.Text>
          <S.Text>maru에서 간편하게</S.Text>
        </S.TextBox>
        <Marulogo />
      </S.Container>
    </>
  );
}
