"use client";

import * as S from "./style";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Logo from "@/assets/logo";

export default function Home() {
  const [isClicked, setIsClicked] = useState<string | null>(null);

  useEffect(() => {
    const savedClicked = sessionStorage.getItem("clicked");
    if (savedClicked) {
      setIsClicked(savedClicked);
    }
  }, []);

  const handleMenuClick = (menuName: string) => {
    setIsClicked(menuName);
    sessionStorage.setItem("clicked", menuName);
  };

  return (
    <>
      <S.Container>
        <Logo />
        <S.RightBox>
          <Link href="/home">
            <S.Text
              active={isClicked === "home"}
              onClick={() => handleMenuClick("home")}
            >
              홈
            </S.Text>
          </Link>
          <Link href="/Intro">
            <S.Text
              active={isClicked === "Intro"}
              onClick={() => handleMenuClick("Intro")}
            >
              학교소개
            </S.Text>
          </Link>
          <Link href="/News">
            <S.Text
              active={isClicked === "News"}
              onClick={() => handleMenuClick("News")}
            >
              학교소식
            </S.Text>
          </Link>
        </S.RightBox>
      </S.Container>
    </>
  );
}
