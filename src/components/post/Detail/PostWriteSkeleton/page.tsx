"use client";

import { useRef, useState } from "react";
import DownArrow from "@/assets/DownArrow";
import UpArrow from "@/assets/UpArrow";
import Line from "@/assets/Line";
import Add from "@/assets/Add";
import Button from "@/components/@common/Button";

import * as S from "./style";

const PostWriteSkeleton = () => {
  const dropDownText = ["공지사항", "가정통신문", "행사갤러리"];
  const [isDropDown, setIsDropDown] = useState(false);
  const [category, setCategory] = useState("카테고리");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const dropDownClick = (text: string) => {
    setCategory(text);
    setIsDropDown(false);
  };
  const changeTextareaHeight = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };
  return (
    <S.Display>
      <S.Head>
        <S.CategoryLayout>
          <S.Category>{category}</S.Category>
          <S.ArrowLayout onClick={() => setIsDropDown(!isDropDown)}>
            {isDropDown ? <DownArrow /> : <UpArrow />}
          </S.ArrowLayout>
        </S.CategoryLayout>
        <S.DropDown>
          {isDropDown &&
            dropDownText.map((item, index) => {
              return (
                <S.DropDownItem key={index} onClick={() => dropDownClick(item)}>
                  {item}
                </S.DropDownItem>
              );
            })}
        </S.DropDown>
        <S.Title
          value={title}
          placeholder="제목을 입력하세요"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Line />
      </S.Head>
      <S.Bottom>
        <S.Content
          ref={textareaRef}
          placeholder="글을 입력해주세요"
          onInput={changeTextareaHeight}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <S.AddFile>
          <Add />
          <S.AddText>파일추가</S.AddText>
        </S.AddFile>
        <S.FixEnd>
          <Button mode="BLUE" radius={4}>
            수정 완료
          </Button>
        </S.FixEnd>
      </S.Bottom>
    </S.Display>
  );
};

export default PostWriteSkeleton;
