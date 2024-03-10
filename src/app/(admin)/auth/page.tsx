"use client";

import GoogleIcon from "@/assets/GoogleIcon";
import { useAuthLink } from "@/services/auth/useAuthService";
import * as S from "./style";

export default function Home() {
  const { data, refetch } = useAuthLink();

  if (data) window.location.href = data;
  return (
    <S.Background>
      <S.Container>
        <S.Text>
          이곳은 BSSM 선생님 전용 페이지 입니다.
          <br />
          이용하시려면 학교 전용 구글 아이디로 로그인해주세요.
        </S.Text>
        <S.GoogleLoginBox onClick={() => refetch()}>
          <GoogleIcon />
          Google로 로그인
        </S.GoogleLoginBox>
      </S.Container>
    </S.Background>
  );
}
