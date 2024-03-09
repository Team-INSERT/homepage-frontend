import * as S from "./style";

const Notice = ({ title }: { title: "" }) => {
  return (
    <S.TextBox>
      <S.PostContent>{title}</S.PostContent>
    </S.TextBox>
  );
};

export default Notice;
