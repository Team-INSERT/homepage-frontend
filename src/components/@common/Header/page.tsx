"use client";

import React, { useState, useEffect } from "react";
import * as S from "./style";
import { useRouter, usePathname } from "next/navigation";
import Logo from "@/assets/logo";

const menu = [
  { id: 1, label: "홈", path: "/home" },
  { id: 2, label: "학교소개", path: "/introduce" },
  { id: 3, label: "학교소식", path: "/post" },
];

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [isDarkMode, setIsDarkMode] = useState(pathname === "/introduce");

  useEffect(() => {
    setIsDarkMode(pathname === "/introduce"); //introduce 초기 렌더링 시 Dark 모드 적용
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
        {menu.map((item) => (
          <S.Text
            isDarkMode={isDarkMode}
            key={item.id}
            onClick={() => router.push(item.path)}
            style={{ fontWeight: item.path === pathname ? 700 : "normal" }}
          >
            {item.label}
          </S.Text>
        ))}
      </S.RightBox>
    </S.Container>
  );
}

export default Header;
