import { useQuery } from "@tanstack/react-query";
import { post } from "./postService";

export const usePostNotice = () => {
  return useQuery({
    queryKey: ["PostNotice"],
    queryFn: () => post.getNotice(),
  });
};

export const usePostLetter = () => {
  return useQuery({
    queryKey: ["PostLetter"],
    queryFn: () => post.getLetter(),
  });
};
