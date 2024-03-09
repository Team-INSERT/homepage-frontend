import Export from "@/assets/export";
import { flex, font, theme } from "@/styles";
import styled from "styled-components";
import Sea from "@/assets/Sea.png";

const SchoolPic = () => {
  return (
    <Layout>
      <ElementLayout>
        <ExportLayout>
          <Export />
        </ExportLayout>
        <TextLayout>
          <Title>
            사진 제목사진 제목사진 제목사진 제목사진 제목사진 제목제
          </Title>
          <Date>2024.01.01</Date>
        </TextLayout>
        {/* <SchoolImg src={Sea} alt="학교이미지" /> */}
      </ElementLayout>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;
const ElementLayout = styled.div`
  position: relative;
  width: 360px;
  height: 314px;
  background-color: aliceblue;
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
const SchoolImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default SchoolPic;
