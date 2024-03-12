const getCategory = (category: string) => {
  switch (category) {
    case "NOTICE":
      return "공지사항";
    case "NEWS_LETTER":
      return "가정통신문";
    case "EVENT":
      return "행사 갤러리";
    default:
      return "카테고리 없음";
  }
};

export default getCategory;
