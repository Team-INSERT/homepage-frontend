import Export from "@/assets/Export";
import { flex, font, theme } from "@/styles";
import styled from "styled-components";
import Image from "next/image";
import Sea from "@/assets/Sea.png";

const SchoolPic = () => {
  return (
    <ElementLayout>
      <ExportLayout>
        <Export />
      </ExportLayout>
      <TextLayout>
        <Title>사진 제목사진 제목사진 제목사진 제목사진 제목사진 제목제</Title>
        <Date>2024.01.01</Date>
      </TextLayout>
      <SchoolImgLayout>
        <Image src={Sea} alt="학교이미지" fill />
      </SchoolImgLayout>
    </ElementLayout>
  );
};

const ElementLayout = styled.div`
  position: relative;
  width: 296px;
  ${flex.COLUMN_FLEX}
  gap: 24px;
`;
const TextLayout = styled.div`
  ${flex.COLUMN_HORIZONTAL}
  gap: 8px;
  max-width: 232px;
`;
const Title = styled.p`
  ${font.Title}
  color: ${theme.grey900};
`;
const Date = styled.p`
  ${font.Text}
  color: ${theme.bssmBlue};
  text-align: start;
`;
const ExportLayout = styled.div`
  position: absolute;
  right: 0;
`;
const SchoolImgLayout = styled.div`
  position: relative;
  width: 100%;
  height: 159px;
`;

export default SchoolPic;
