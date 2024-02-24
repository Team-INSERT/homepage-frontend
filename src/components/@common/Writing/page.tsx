"use client";

import Line from "@/assets/Line";

import * as S from "./style";

type WriteModeProps = {
  category: string;
  title: string;
  writer: string;
  date: string;
  content: string;
  fileName: string;
  fileLink: string;
  mode: "WRITE";
};

type ReadModeProps = {
  mode: "READ";
};

type WritingProps = WriteModeProps | ReadModeProps;

const Writing = (props: WritingProps) => {
  const { mode } = props;
  if (mode === "WRITE") {
    const { category, title, writer, date, content, fileName, fileLink } =
      props as WriteModeProps;
    return (
      <S.WDisplay>
        <S.WHead>
          <S.WCatTitle>
            <S.WCategory>{category}</S.WCategory>
            <S.WTitle>{title}</S.WTitle>
          </S.WCatTitle>
          {writer} | {date}
          <Line />
        </S.WHead>
        <S.WContent>{content}</S.WContent>
        <S.WFileLayout>
          <a href={fileLink} download>
            <S.WFileName>
              <S.WFileImg />
              {fileName}
            </S.WFileName>
          </a>
          <S.WQuickView>[바로보기]</S.WQuickView>
        </S.WFileLayout>
        <S.WBackToList mode="GLOW" radius={8}>
          <S.WLeftArrow />
          목록으로 돌아가기
        </S.WBackToList>
      </S.WDisplay>
    );
  }
  if (mode === "READ") {
    return (
      <S.RDisplay>
        <S.RHead>
          <S.RCategory>카테고리</S.RCategory>
          <S.RTitle value="제목을 입력하세요" />
          <Line />
        </S.RHead>
      </S.RDisplay>
    );
  }
};

export default Writing;
