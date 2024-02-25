"use client";

import BsmLogo from "@/assets/BsmLogo";
import * as S from "./style";

interface FooterProps {
  color: string;
}

// eslint-disable-next-line react/prop-types

const Footer = ({ color }: FooterProps) => {
  const { serviceInfo, policy, copyRight } = {
    serviceInfo: "46708 부산 강서구 가락대로 1393 (봉림동 15)",
    policy:
      "교무실(입학처) : 051-971-2153, Fax : 051-971-2061    |    행정실 : 051-971-2152, Fax : 051-971-6325",
    copyRight: "© 부산소프트웨어마이스터고등학교 All Rights Reserved.",
  };
  return (
    <S.Container color={color}>
      <BsmLogo />
      <S.Info>
        <div>{serviceInfo}</div>
        <div>{policy}</div>
      </S.Info>
      <S.Line />
      <S.CopyInfo>{copyRight}</S.CopyInfo>
    </S.Container>
  );
};

export default Footer;
