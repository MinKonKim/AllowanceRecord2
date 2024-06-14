import axios from "axios";

const JSON_SEVER_PATH = " https://maze-lemon-quit.glitch.me";

// Expense 리스트 불러오기
export const getExpenses = async () => {
  try {
    const { data } = await axios.get(`${JSON_SEVER_PATH}/expenses`);
    console.log("가져온 데이터", data);
    return data;
  } catch (error) {
    console.log("비용 목록을 불러오는 중 에러 발생", error);
  }
};

// Expense 불러오기
export const getExpense = async ({ queryKey }) => {
  try {
    const { data } = await axios.get(
      `${JSON_SEVER_PATH}/expenses/${queryKey[1]}/`
    );
    console.log("가져온 데이터", data);
    return data;
  } catch (error) {
    console.error("상세 항목을 불러오는 중 에러 발생", error);
  }
};

// expense 삽입
export const postExpense = async (expense) => {
  try {
    const { data } = await axios.post(`${JSON_SEVER_PATH}/expenses`, expense);
    console.log("삽입후 ", data);

    return data;
  } catch (error) {
    console.error("비용내역 추가 중 에러 발생", error);
  }
};

// expense 업데이트
export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const { data } = await axios.put(`${JSON_SEVER_PATH}/expenses/${id}`, rest);
    return data;
  } catch (error) {
    console.error("비용 내역 업데이트 중", error);
  }
};

// expense 삭제
export const deleteExpense = async (id) => {
  try {
    await axios.delete(`${JSON_SEVER_PATH}/expenses/${id}`);
  } catch (error) {
    console.error("비용 내역 삭제 중", error);
  }
};
