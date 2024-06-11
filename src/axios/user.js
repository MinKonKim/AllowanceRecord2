import api from "./api";

export const postUserData = async (userData) => {
  try {
    await api.post("/users", userData);
  } catch (e) {
    console.error(e);
  }
};
