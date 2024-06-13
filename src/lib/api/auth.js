import axios from "axios";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr";

// 회원가입
export const register = async ({ id, password, nickname }) => {
  try {
    const response = await axios.post(AUTH_API_HOST + "/register", {
      id: id,
      password: password,
      nickname: nickname,
    });
    return response;
  } catch (error) {
    console.error(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

//로그인
export const signIn = async ({ id, password }) => {
  try {
    const { data } = await axios.post(AUTH_API_HOST + "/login", {
      id: id,
      password: password,
    });
    return data;
  } catch (error) {
    console.error(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

// 유저정보 가져오기
export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) return;

  try {
    const { data } = await axios.get(AUTH_API_HOST + "/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

export const updateProfile = async (formData) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) return;

  try {
    const { data } = await axios.patch(AUTH_API_HOST + "/profile", formData, {
      headers: {
        "Content-Type ": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};
