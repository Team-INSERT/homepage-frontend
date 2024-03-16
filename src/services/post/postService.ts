import customAxios from "@/lib/customAxios";

export const post = {
  getNotice: async () => {
    const { data } = await customAxios.get(
      "/post?category=NOTICE&page=0&size=10",
    );
    return data;
  },
  getLetter: async () => {
    const { data } = await customAxios.get(
      "/post?category=NEWS_LETTER&page=0&size=10",
    );
    return data;
  },
};
