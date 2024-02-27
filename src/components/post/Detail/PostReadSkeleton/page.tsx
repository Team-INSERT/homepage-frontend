"use client";

import Line from "@/assets/Line";

import * as S from "./style";

type ReadProps = "category" | "title" | "writer" | "date" | "content";
interface ReadModeProps {
  info: { [key in ReadProps]: string };
}

const PostReadSkeleton = ({ data }: { data: ReadModeProps }) => {
  const { info } = data;
  return (
    <S.Display>
      <S.Head>
        <S.CatTitle>
          <S.Category>{info.category}</S.Category>
          <S.Title>{info.title}</S.Title>
        </S.CatTitle>
        {info.writer} | {info.date}
        <Line />
      </S.Head>
      <S.Content>{info.content}</S.Content>
      <S.FileLayout>
        <S.FileName>
          <S.FileImg />
          파일 이름
        </S.FileName>
        <S.QuickView>[바로보기]</S.QuickView>
      </S.FileLayout>
      <S.BackToList mode="GLOW" radius={8}>
        <S.LeftArrow />
        목록으로 돌아가기
      </S.BackToList>
    </S.Display>
  );
};

export default PostReadSkeleton;
