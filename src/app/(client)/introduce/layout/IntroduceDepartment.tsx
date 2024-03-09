import { flex } from "@/styles";
import styled from "styled-components";
import EduGreen from "../_components/EduGreen";
import EduPink from "../_components/EduPink";
import EduBlue from "../_components/EduBlue";

const IntroduceDepartment = () => {
  return (
    <Layout>
      <EduGreen />
      <EduPink />
      <EduBlue />
    </Layout>
  );
};

export default IntroduceDepartment;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  ${flex.CENTER}
  gap: 24px;
`;
