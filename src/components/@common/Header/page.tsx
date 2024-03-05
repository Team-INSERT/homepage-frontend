"use client";

import React, { useState, useEffect } from "react";
import * as S from "./style";
import { useRouter, usePathname } from "next/navigation";
import Logo from "@/assets/Logo";

const menu = [
  { id: 1, label: "홈", path: "/home" },
  { id: 2, label: "학교소개", path: "/introduce" },
  { id: 3, label: "학교소식", path: "/post" },
];

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [isDarkMode, setIsDarkMode] = useState(pathname === "/introduce");
  const [isLogined, setIsLogined] = useState(true); // 로그인 구현 시 변경 예정

  useEffect(() => {
    setIsDarkMode(pathname === "/introduce");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsDarkMode(window.scrollY <= 100);
    };
    window.addEventListener("scroll", handleScroll);
  });

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
          menu.map((item) => (
            <S.Text
              isDarkMode={isDarkMode}
              key={item.id}
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
