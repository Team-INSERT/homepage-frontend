"use client";

import Line from "@/assets/Line";
import DownArrow from "@/assets/DownArrow";
import UpArrow from "@/assets/UpArrow";
import Add from "@/assets/Add";
import { useState } from "react";

import * as S from "./style";
import Button from "../Button";

// 오브젝트로 category,title,writer,date,content 전달받음
type WriteModeProps = {
  info: { [key: string]: string };
  mode: "READ";
};

type ReadModeProps = {
  mode: "WRITE";
};

type WritingProps = WriteModeProps | ReadModeProps;

const Writing = (props: WritingProps) => {
  const { mode } = props;

  const [isDropDown, setIsDropDown] = useState(false);
  const [catValue, setCatValue] = useState("카테고리");
  const [RTitle, setRTitle] = useState("");
  const [RContent, setRContent] = useState("");
  const dropDownText = ["공지사항", "가정통신문", "행사갤러리"];

  const dropDownClick = (text: string) => {
    setCatValue(text);
    setIsDropDown(false);
  };
  const changeTextareaHeight = () => {
    const textarea = document.querySelector("textarea");
    if (textarea) {
      textarea.addEventListener("input", () => {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      });
    }
  };

  if (mode === "READ") {
    const { info } = props as WriteModeProps;
    return (
      <S.WDisplay>
        <S.WHead>
          <S.WCatTitle>
            <S.WCategory>{info.category}</S.WCategory>
            <S.WTitle>{info.title}</S.WTitle>
          </S.WCatTitle>
          {info.writer} | {info.date}
          <Line />
        </S.WHead>
        <S.WContent>{info.content}</S.WContent>
        <S.WFileLayout>
          <S.WFileName>
            <S.WFileImg />
            파일 이름
          </S.WFileName>
          <S.WQuickView>[바로보기]</S.WQuickView>
        </S.WFileLayout>
        <S.WBackToList mode="GLOW" radius={8}>
          <S.WLeftArrow />
          목록으로 돌아가기
        </S.WBackToList>
      </S.WDisplay>
    );
  }
  if (mode === "WRITE") {
    return (
      <S.RDisplay>
        <S.RHead>
          <S.RCategoryLayout>
            <S.RCategory>{catValue}</S.RCategory>
            <S.RArrowLayout onClick={() => setIsDropDown(!isDropDown)}>
              {isDropDown ? <DownArrow /> : <UpArrow />}
            </S.RArrowLayout>
          </S.RCategoryLayout>
          <S.RDropDown>
            {isDropDown &&
              dropDownText.map((item, index) => {
                return (
                  <S.RDropDownItem
                    key={index}
                    onClick={() => dropDownClick(item)}
                  >
                    {item}
                  </S.RDropDownItem>
                );
              })}
          </S.RDropDown>
          <S.RTitle
            value={RTitle}
            placeholder="제목을 입력하세요"
            onChange={(e) => setRTitle(e.target.value)}
          />
          <Line />
        </S.RHead>
        <S.RBottom>
          <S.RContent
            placeholder="글을 입력해주세요"
            onInput={changeTextareaHeight}
            onChange={(e) => setRContent(e.target.value)}
            value={RContent}
          />
          <S.RAddFile>
            <Add />
            <S.RAddText>파일추가</S.RAddText>
          </S.RAddFile>
          <S.FixEnd>
            <Button mode="BLUE" radius={4}>
              수정 완료
            </Button>
          </S.FixEnd>
        </S.RBottom>
      </S.RDisplay>
    );
  }
};

export default Writing;
