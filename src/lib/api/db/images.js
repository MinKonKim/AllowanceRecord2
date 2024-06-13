import { db } from "./db";

const PATH = "/images";

export const fetchImageById = async (id) => {
  try {
    const { data } = await db.get(`${PATH}/${id}`);
    return data;
  } catch (error) {
    console.error("상세 항목을 불러오는 중 에러 발생", error);
  }
};

//이미지 삽입
export const addImage = async (img) => {
  try {
    await db.post(PATH, img);
  } catch (error) {
    console.error("이미지 추가 중 에러 발생", error);
  }
};
