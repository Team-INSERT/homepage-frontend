import customAxios from "@/lib/customAxios";

export const auth = {
  getLink: async () => {
    const { data } = await customAxios.get("/google");
    return data;
  },
  getLogin: async (access: string) => {
    const { data } = await customAxios.post("/google", {
      accessToken: access,
    });
    return data;
  },
};
