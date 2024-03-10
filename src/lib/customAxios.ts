import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

customAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth`,
        {
          refreshToken,
        },
      );
      localStorage.setItem("accessToken", data.accessToken);
    } catch {
      console.log("refreshToken이 만료되었습니다!");
    }
  },
);

export default customAxios;
