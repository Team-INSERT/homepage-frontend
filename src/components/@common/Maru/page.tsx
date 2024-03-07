"use client";

import Marulogo from "@/assets/marulogo";
import * as S from "./style";

export default function Maru() {
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
