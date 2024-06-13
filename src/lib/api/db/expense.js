import { db } from "./db";

const PATH = "/expenses";

// Expense 리스트 불러오기
export const getExpenses = async () => {
  try {
    const { data } = await db.get(PATH);
    return data;
  } catch (error) {
    console.log("비용 목록을 불러오는 중 에러 발생", error);
  }
};

// Expense 불러오기
export const getExpense = async ({ queryKey }) => {
  try {
    const { data } = await db.get(`${PATH}/${queryKey[1]}/`);
    return data;
  } catch (error) {
    console.error("상세 항목을 불러오는 중 에러 발생", error);
  }
};

// expense 삽입
export const addExpense = async (expense) => {
  try {
    await db.post(PATH, expense);
  } catch (error) {
    console.error("비용내역 추가 중 에러 발생", error);
  }
};

// expense 업데이트
export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const { data } = await db.put(`${PATH}/${id}`, rest);
    return data;
  } catch (error) {
    console.error("비용 내역 업데이트 중", error);
  }
};

// expense 삭제
export const deleteExpense = async (id) => {
  try {
    await db.delete(`${PATH}/${id}`);
  } catch (error) {
    console.error("비용 내역 삭제 중", error);
  }
};
