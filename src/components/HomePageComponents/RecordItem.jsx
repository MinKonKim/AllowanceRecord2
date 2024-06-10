import { Link } from "react-router-dom";
import styled from "styled-components";
import formatAmount from "../../utils/formatAmount";

const RecordItem = ({ record }) => {
  return (
    <RecordItemContent key={record.id}>
      <Link to={`/record/${record.id}`}>
        <Header>
          <RecordItemSpan>{record.item}</RecordItemSpan>
          <Amount>{formatAmount(record.amount)}원</Amount>
        </Header>
        <Body>
          <Description>{record.description}</Description>
          <Date>{record.date}</Date>
        </Body>
      </Link>
    </RecordItemContent>
  );
};

export default RecordItem;
// styled Components
const RecordItemContent = styled.li`
  border: 1px solid #ddd;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecordItemSpan = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const Description = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 40%;
  color: #666;
  margin: 0 0 5px 0;
`;

const Amount = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #4caf50;
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: #999;
`;
