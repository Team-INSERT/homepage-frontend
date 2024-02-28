"use client";

import Line from "@/assets/Line";
import Arrow from "@/assets/Arrow";
import { theme } from "@/styles";

import * as S from "./style";

interface PostReadSkeletonProps {
  category: string;
  title: string;
  writer: string;
  date: string;
  content: string;
}

const PostReadSkeleton = ({
  category,
  title,
  writer,
  date,
  content,
}: PostReadSkeletonProps) => {
  return (
    <S.Display>
      <S.Head>
        <S.CatTitle>
          <S.Category>{category}</S.Category>
          <S.Title>{title}</S.Title>
        </S.CatTitle>
        {writer} | {date}
        <Line />
      </S.Head>
      <S.Content>{content}</S.Content>
      <S.FileLayout>
        <S.FileName>
          <S.FileImg />
          파일 이름
        </S.FileName>
        <S.QuickView>[바로보기]</S.QuickView>
      </S.FileLayout>
      <S.BackToList mode="GLOW" radius={8}>
        <Arrow width="20px" height="20px" rotate="270" fill={theme.bssmBlue} />
        목록으로 돌아가기
      </S.BackToList>
    </S.Display>
  );
};

export default PostReadSkeleton;
