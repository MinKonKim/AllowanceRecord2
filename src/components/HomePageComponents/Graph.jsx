import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import formatAmount from "../../utils/formatAmount";

const Graph = ({ filteredRecords }) => {
  //  총액  State
  const [totalAmount, setTotalAmount] = useState(0);

  //redux
  const selectedMonth = useSelector((state) => state.selectedMonth);

  // records state가 변경 될 때 마다,
  useEffect(() => {
    // 총 금액 계산
    let calAmount = filteredRecords.reduce(
      (sum, record) => sum + record.amount,
      0
    );
    setTotalAmount(calAmount);
  }, [filteredRecords]);

  // 항목별 금액 정리 (amountObjs 에 저장)
  const amountObjs = {};
  filteredRecords.forEach((record) => {
    if (!amountObjs[record.item]) {
      amountObjs[record.item] = record.amount;
    } else {
      amountObjs[record.item] += record.amount;
    }
  });

  // amountMap 객체를 배열로 변환하고 정렬
  const sortedAmountArray = Object.entries(amountObjs).sort(
    (a, b) => b[1] - a[1]
  );

  const maxAmount = Math.max(...filteredRecords.map((record) => record.amount));

  return (
    <GraphDiv>
      <h1>
        {selectedMonth.label} 총 지출 : {formatAmount(totalAmount)}원
      </h1>
      <BarWrapper>
        {sortedAmountArray.map(([item, amount], index) => (
          <Bar key={index} width={(amount / maxAmount) * 100} item={item}>
            {item}: {formatAmount(amount)}원
          </Bar>
        ))}
      </BarWrapper>
    </GraphDiv>
  );
};

export default Graph;
const itemColors = {
  식비: "#f76c6c",
  도서: "#ffc658",
  여행: "#83a6ed",
  미용: "#8884d8",
  // 추가 아이템과 색상...
};
const GraphDiv = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 5px;
`;
const BarWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
`;
const Bar = styled.div`
  width: ${(props) => props.width}%;
  background-color: ${(props) => itemColors[props.item] || "#15c1c1"};
  color: white;
  text-align: left;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 3px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
