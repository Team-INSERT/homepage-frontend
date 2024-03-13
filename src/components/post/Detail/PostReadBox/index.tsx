import Arrow from "@/assets/Arrow";
import { getDayTime, getCategory } from "@/helper";
import DownloadIcon from "@/assets/DownloadIcon";
import { theme } from "@/styles";
import * as S from "./style";

interface PostReadBoxProps {
  category: string;
  contents: string;
  title: string;
  links: { title: string; url: string }[];
  nickname: string;
  createdAt: number[];
}
const PostReadBox = ({
  category,
  contents,
  title,
  links,
  nickname,
  createdAt,
}: PostReadBoxProps) => {
  return (
    <S.Container>
      <S.Category>{getCategory(category)}</S.Category>
      <S.Title>{title}</S.Title>
      <S.WriteInfo>
        {nickname} | {getDayTime(createdAt)}
      </S.WriteInfo>
      <hr />
      <S.LinkImgBox>
        {links.map((link, index) => (
          <S.LinkImg src={link.url} alt={link.title} key={index} />
        ))}
      </S.LinkImgBox>

      <S.Content>{contents}</S.Content>
      <S.FilesBox>
        {links.map((link, index) => (
          <S.FileButtonBox key={index}>
            <S.FileButton mode="WHITE" radius="MAX">
              <DownloadIcon />
              {link.title}
            </S.FileButton>
            <S.View href={link.url}>[바로보기]</S.View>
          </S.FileButtonBox>
        ))}
      </S.FilesBox>

      <S.BackButton mode="BLUE_GLOW" radius={8}>
        <Arrow width="20" height="20" fill={theme.bssmBlue} rotate="270" />
        목록으로 돌아가기
      </S.BackButton>
    </S.Container>
  );
};

export default PostReadBox;
