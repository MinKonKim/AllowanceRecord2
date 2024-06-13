import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import MonthNavigation from "../components/MonthNavigation";
import SkeletonUI from "../components/SkeletonUI";
import { fetchExpenses } from "../lib/api/db/expense";
import useMonthStore from "../zustand/useMonthStore";

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

export default function Home() {
  const { selectedMonth } = useMonthStore();
  const {
    data: expenses,
    isPending,
    isError,
    refetch, //
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  if (isPending) {
    return (
      <div>
        <SkeletonUI width={"300px"} height={"400px"} />
      </div>
    );
  }
  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  // 필터링
  const filteredExpenses = expenses.filter(
    (expense) => expense.month === selectedMonth
  );

  return (
    <Container>
      <MonthNavigation />
      <CreateExpense refetch={refetch} month={selectedMonth} />
      <ExpenseList refetch={refetch} expenses={filteredExpenses} />
    </Container>
  );
}
const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;
