import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchExpenses } from "../axios/expense";
import { Section } from "../pages/Home";

export default function ExpenseList() {
  const navigate = useNavigate();
  const {
    data: expenses,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }
  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  return (
    <Section>
      <ExpenseItemList>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            onClick={() => {
              navigate(`/detail/${expense.id}`);
            }}
          >
            <ExpenseDetails>
              <span>{expense.date}</span>
              <span>{`${expense.item} - ${expense.description}`}</span>
            </ExpenseDetails>
            <span>{expense.amount.toLocaleString()} 원</span>
          </ExpenseItem>
        ))}
      </ExpenseItemList>
    </Section>
  );
}
const ExpenseItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ExpenseItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  span {
    font-size: 16px;
    color: #333;
  }

  span:last-child {
    font-weight: bold;
    color: #007bff;
    flex-shrink: 0;
  }
`;

const ExpenseDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    &:first-child {
      margin-bottom: 5px;
      color: #666;
      font-size: 14px;
    }

    &:last-child {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }
`;
