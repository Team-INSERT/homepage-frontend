"use client";

import Line from "@/assets/Line";
import * as S from "./style";

const Writing = () => {
  return (
    <S.Display>
      <S.Head>
        <S.CatTitle>
          <S.Category>카테고리</S.Category>
          <S.Title>제목</S.Title>
        </S.CatTitle>
        작성자 | 작성날짜
        <Line />
      </S.Head>
      <S.Content>글이나 사진</S.Content>
    </S.Display>
  );
};

export default Writing;
