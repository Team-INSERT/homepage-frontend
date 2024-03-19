"use client";

import software from "@/assets/software.png";
import problem from "@/assets/problem.png";
import creativity from "@/assets/creativity.png";
import thinking from "@/assets/thinking.png";
import cooperation from "@/assets/cooperation.png";
import midas from "@/assets/midas.png";
import microsoft from "@/assets/microsoft.png";
import inca from "@/assets/inca.png";
import douzone from "@/assets/douzone.png";
import intel from "@/assets/intell.png";
import luxrobo from "@/assets/luxrobo.png";
import ArrowLeft from "@/components/post/Detail/BackButton/page";
import Image from "next/image";

import * as S from "./style";

const Software = () => {
  return (
    <S.Main>
      <ArrowLeft />
      <S.Article>
        <S.Software>
          <Image src={software} alt="소프트웨어개발과" />
        </S.Software>
        <S.Container>
          <S.Education>
            <S.Info>교육목표</S.Info>
            <S.Text>
              SW구조에 대한 이해를 바탕으로 다양한 SW개발 도구 및 설계 방법을
              학습함으로써 SW분석, 설계, 구현, 시험, 유지 보수 등의 업무를
              능동적으로 수행할 수 있는 진보적이고 창의적인 SW 개발자를
              양성합니다.
            </S.Text>
          </S.Education>
          <S.Business>
            <S.Info>업무수행능력</S.Info>
            <S.Items>
              <S.Item>
                <S.Icon>
                  <Image src={creativity} alt="창의력" />
                </S.Icon>
                <S.IconText>창의력</S.IconText>
              </S.Item>
              <S.Item>
                <S.Icon>
                  <Image src={problem} alt="문제해결능력" />
                </S.Icon>
                <S.IconText>문제해결능력</S.IconText>
              </S.Item>
              <S.Item>
                <S.Icon>
                  <Image src={thinking} alt="사고력" />
                </S.Icon>
                <S.IconText>사고력</S.IconText>
              </S.Item>
              <S.Item>
                <S.Icon>
                  <Image src={cooperation} alt="협업능력" />
                </S.Icon>
                <S.IconText>협업능력</S.IconText>
              </S.Item>
            </S.Items>
          </S.Business>
          <S.Course>
            <S.Info>SW개발과 교육과정</S.Info>
            <ul>
              <S.SubText>
                현장 실무 역량 신장을 위한 SW개발도구 및 프로그램 사용능력 배양
              </S.SubText>
              <S.SubText>SI에서 사용하는 JAVA 프로그램 언어 편성</S.SubText>
              <S.InlineText>JAVA를 이용한 프로그램 개발</S.InlineText>
              <S.SubText>안드로이드 계열의 프로그램 개발</S.SubText>
              <S.SubText>
                윈도우 계열이나 다양한 시스템 프로그램을 개발하는 C++프로그램
                편성
              </S.SubText>
              <S.SubText>
                프로그램으로 처리된 정보를 관리하는 정보관리자로서의 역량을
                함양하기 위한 데이터베이스의 기본적인 일론 및 실습 편성
              </S.SubText>
              <S.SubText>
                빅데이터 분석, 데이터 사이언스, UI/UX 개발 실무 등을 통해 SW개발
                프로세서 학습
              </S.SubText>
              <S.SubText>
                웹 관련 SW개발을 위한 심화 웹프로그래밍 학습
              </S.SubText>
            </ul>
          </S.Course>
          <S.Certificate>
            <S.Info>직무 및 자격 취득</S.Info>
            <S.Text>정보처리산업기사, 정보기기운용기사, 리눅스마스터2급</S.Text>
          </S.Certificate>
          <S.Job>
            <S.Info>취업</S.Info>
            <S.Items>
              <Image src={midas} alt="midas" />
              <Image src={microsoft} alt="microsoft" />
              <Image src={inca} alt="inca" />
              <Image src={douzone} alt="douzone" />
              <Image src={intel} alt="intel" />
              <Image src={luxrobo} alt="luxrobo" />
            </S.Items>
            <S.Etc>등 44개 협약업체</S.Etc>
          </S.Job>
        </S.Container>
      </S.Article>
    </S.Main>
  );
};

export default Software;
