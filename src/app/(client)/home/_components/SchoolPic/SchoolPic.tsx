import Export from "@/assets/Export";
import { flex, font, theme } from "@/styles";
import styled from "styled-components";
import Sea from "@/assets/Sea.png";
import Image from "next/image";

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
      <Image src={Sea} alt="학교이미지" />
    </ElementLayout>
  );
};

const ElementLayout = styled.div`
  position: relative;
  width: 360px;
  height: 314px;
  ${flex.COLUMN_FLEX}
  gap: 40px;
`;
const TextLayout = styled.div`
  ${flex.COLUMN_HORIZONTAL}
  gap: 8px;
  max-width: 256px;
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

export default SchoolPic;
