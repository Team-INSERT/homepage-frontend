"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Logo from "@/assets/logo";
import * as S from "./style";

const menu = [
  { label: "홈", path: "/home" },
  { label: "학교소개", path: "/introduce" },
  { label: "학교소식", path: "/post" },
];

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [isDarkMode, setIsDarkMode] = useState(pathname === "/introduce");
  const [isLogined, setIsLogined] = useState(false); // 로그인 구현 시 변경 예정

  const handleScroll = () => {
    if (window.scrollY > 100) setIsDarkMode(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsDarkMode(pathname === "/introduce");
  }, [pathname]);

  return (
    <S.Container isDarkMode={isDarkMode}>
      <Logo />
      <S.RightBox>
        {isLogined ? (
          <>
            <S.LoginText>내가 쓴 글</S.LoginText>
            <S.LoginText>홍길동 선생님</S.LoginText>
            <S.Logout>로그아웃</S.Logout>
          </>
        ) : (
          menu.map((item, index) => (
            <S.Text
              isDarkMode={isDarkMode}
              key={index}
              onClick={() => router.push(item.path)}
              style={{ fontWeight: item.path === pathname ? 700 : "normal" }}
            >
              {item.label}
            </S.Text>
          ))
        )}
      </S.RightBox>
    </S.Container>
  );
}

export default Header;
