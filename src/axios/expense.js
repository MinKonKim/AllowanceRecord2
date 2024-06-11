import api from "./api";

const PATH = "/expenses";

// Expense 리스트 불러오기
export const fetchExpenses = async () => {
  try {
    const { data } = await api.get(PATH);
    return data;
  } catch (error) {
    console.log("비용 목록을 불러오는 중 에러 발생", error);
  }
};

// Expense id 별로 불러오기
export const fetchExpenseById = async (id) => {
  try {
    const { data } = await api.get(`${PATH}/${id}`);
    return data;
  } catch (error) {
    console.error("상세 항목을 불러오는 중 에러 발생", error);
  }
};

// expense 삽입
export const addExpense = async (expense) => {
  try {
    await api.post(PATH, expense);
  } catch (error) {
    console.error("비용내역 추가 중 에러 발생", error);
  }
};

// expense 업데이트
export const updateExpense = async (id, updatedExpense) => {
  try {
    const response = await api.put(`${PATH}/${id}`, updatedExpense);
    return response.data;
  } catch (error) {
    console.error("비용 내역 업데이트 중", error);
  }
};

// expense 삭제
export const deleteExpense = async (id) => {
  try {
    await api.delete(`${PATH}/${id}`);
  } catch (error) {
    console.error("비용 내역 삭제 중", error);
  }
};
