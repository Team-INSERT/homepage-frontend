import { useAuthLogin } from "@/services/auth/useAuthService";

const GetAccessToken = () => {
  const hash = window?.location.hash;
  const params = new URLSearchParams(hash.substring(1));
  const access = params.get("access_token");

  const { data } = useAuthLogin(access!);

  if (data) {
    const { accessToken, refreshToken } = data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    window.location.href = "/list/NOTICE";
  }
  return null;
};

export default GetAccessToken;
