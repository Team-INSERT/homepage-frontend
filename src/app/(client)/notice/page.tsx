"use client";

import React, { useState } from "react";

import Notice from "@/app/(client)/notice/notice/page";
import Paper from "@/app/(client)/notice/paper/page";
import Event from "@/app/(client)/notice/eventphoto/page";
import * as S from "./style";

const Category = () => {
  const nav = [
    { id: 1, name: "공지사항", component: <Notice /> },
    { id: 2, name: "가정통신문", component: <Paper /> },
    { id: 3, name: "행사 갤러리", component: <Event /> },
  ];

  const [selectedId, setSelectedId] = useState(nav[0].id);

  return (
    <S.Container>
      <S.ButtonBox>
        {nav.map((item) => (
          <S.ButtonMode
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            mode={selectedId === item.id ? "BLUE" : "WHITE"}
            radius="MAX"
          >
            {item.name}
          </S.ButtonMode>
        ))}
      </S.ButtonBox>
      <S.Box>{nav.find((item) => item.id === selectedId)?.component}</S.Box>
    </S.Container>
  );
};

export default Category;
