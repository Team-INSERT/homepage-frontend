import { flex, font, theme } from "@/styles";
import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 64px 140px 160px;
  background-color: #f2f2f2;
`;

export const Article = styled.article`
  width: 744px;
  height: 1347px;
  background-color: white;
  margin: 0 auto;
  border-radius: 16px;
`;

export const Software = styled.div`
  height: 260px;
  width: 744px;
  border-radius: 16px;

  img {
    border-radius: 16px 16px 0 0;
  }
`;

export const Container = styled.div`
  padding: 48px 45px 80px 45px;
`;

export const Education = styled.div`
  margin-bottom: 40px;
`;

export const Business = styled.div`
  margin-bottom: 40px;
`;

export const Course = styled.div`
  margin-bottom: 40px;
`;

export const Certificate = styled.div`
  margin-bottom: 40px;
  ${flex.FLEX}
  flex-direction: column;
`;

export const Job = styled.div``;

export const Info = styled.p`
  padding: 4px 8px;
  width: max-content;
  margin-bottom: 16px;
  background-color: #ff3bab;
  color: ${theme.white};
  ${font.SmallTitle}
`;

export const Text = styled.p`
  color: ${theme.grey800};
  ${font.Text}
`;

export const Etc = styled.p`
  margin-top: 16px;
  ${font.SmallText}
  color: ${theme.grey400};
`;

export const Items = styled.div`
  ${flex.BETWEEN}
  flex-direction: row;
`;

export const Item = styled.div`
  height: 135px;
  width: 96px;
  ${flex.COLUMN_CENTER}
`;

export const Icon = styled.div`
  height: 96px;
  width: 96px;
  border-radius: 50%;
  margin-bottom: 8px;
  background-color: #ff3bab;
  ${flex.CENTER}
`;

export const IconText = styled.p`
  margin-top: 8px;
  color: #ff3bab;
  ${font.SmallTitle}
`;

export const SubText = styled.li`
  list-style: disc;
  ${font.Text}
  color: ${theme.grey800};
  margin-top: 12px;
  margin-bottom: 12px;
  list-style-position: inside;
`;

export const InlineText = styled.li`
  list-style: disc;
  ${font.Text}
  color: ${theme.grey800};
  list-style-position: inside;
  margin-left: 20px;
`;
