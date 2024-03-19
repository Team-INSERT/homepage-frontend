"use client";

import embeded from "@/assets/embeded.png";
import problem from "@/assets/problem.png";
import creativity from "@/assets/creativity.png";
import understand from "@/assets/understand.png";
import cooperation from "@/assets/cooperation.png";
import midas from "@/assets/midas.png";
import bnk from "@/assets/bnk.png";
import panasia from "@/assets/panasia.png";
import contec from "@/assets/contec.png";
import kuls from "@/assets/kuls.png";
import ArrowLeft from "@/components/post/Detail/BackButton/page";
import Image from "next/image";

import * as S from "./style";

const Embeded = () => {
  return (
    <S.Main>
      <ArrowLeft />
      <S.Article>
        <S.Software>
          <Image src={embeded} alt="임베디드소프트웨어과" />
        </S.Software>
        <S.Container>
          <S.Education>
            <S.Info>교육목표</S.Info>
            <S.Text>
              전자기기 및 산업용 기기의 HW와 SW에 대한 이해를 바탕으로 제조업
              하드웨어를 제어하는 펌웨어 개발, 시험, 유지 보수를 능동적으로
              수행할 수 있는 시스템 SW엔지니어 및 응용 SW엔지니어를 양성합니다
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
                  <Image src={understand} alt="이해력" />
                </S.Icon>
                <S.IconText>이해력</S.IconText>
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
            <S.Info>임베디드 소프트웨어과 교육과정</S.Info>
            <S.SubTextBox>
              <S.SubText>
                SW와 HW가 결합한 임베디드 소프트웨어의 특성을 살릴 수 있는 능력
                배양
              </S.SubText>
              <S.SubText>
                전자회로 기본적인 지식, 컴푸터 구조 및 반도체 설계 기술 등과
                ASIC 분야로의 확장성 고려한 디지털 논리회로 학습
              </S.SubText>
              <S.SubText>
                스마트 물류 또는 스마트 팩토리 등 PLC와 관련된 자동제어 학습
              </S.SubText>
              <S.SubText>
                임베디드 리눅스 운영체제, 리눅스 커널과 HW디바이스 간의 드라이버
                개발, 마이크로컨트롤러를 통한 임베디드 기기 개발 등의 학습
              </S.SubText>
              <S.SubText>
                HW기기의 네트워킹 프로그램, AI 프로그램, IoT실무프로그래밍,
                시스템 설계등의 학습
              </S.SubText>
              <S.SubText>
                모바일 및 웹 개발의 연동하여 초종적인 프로젝트 완성
              </S.SubText>
            </S.SubTextBox>
          </S.Course>
          <S.Certificate>
            <S.Info>직무 및 자격 취득</S.Info>
            <S.Text>
              정보처리산업기사, 정보기기운용기사, 리눅스마스터2급,
              전자기기기능사
            </S.Text>
          </S.Certificate>
          <S.Job>
            <S.Info>취업</S.Info>
            <S.Items>
              <Image src={midas} alt="midas" />
              <Image src={bnk} alt="microsoft" />
              <Image src={panasia} alt="inca" />
              <Image src={contec} alt="douzone" />
              <Image src={kuls} alt="intel" />
            </S.Items>
            <S.Etc>등 44개 협약업체</S.Etc>
          </S.Job>
        </S.Container>
      </S.Article>
    </S.Main>
  );
};

export default Embeded;
