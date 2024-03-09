import { useQuery } from "@tanstack/react-query";
import { auth } from "./authService";

export const useAuthLink = () => {
  return useQuery({
    queryKey: ["AuthLink"],
    queryFn: () => auth.getLink(),
    enabled: false,
  });
};

export const useAuthLogin = (access: string) => {
  return useQuery({
    queryKey: ["AuthLogin"],
    queryFn: () => auth.getLogin(access),
  });
};
