import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Modal from "../../components/DetailPageComponents/Modal";
import useInput from "../../hooks/useInput";
import { deleteRecord, updateRecord } from "../../redux/slices/recordsSlice";
import validCheck from "../../utils/validCheck";

const DetailPage = () => {
  // 파라미터 값 받아오기
  const { recordId } = useParams();
  // redux
  const records = useSelector((state) => state.records);
  const dispatch = useDispatch();

  // recordId 에 맞는 record 값 가져오기
  const record = records.find((ele) => ele.id === recordId);
  // Modal Open 관련 State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Custom Hook 사용
  const [item, onChangeItemHandler] = useInput(record.item);
  const [amount, onChangeAmountHandler] = useInput(record.amount);
  const [date, onChangeDateHandler] = useInput(record.date);
  const [description, onChangeDescriptionHandler] = useInput(
    record.description
  );

  // 수정
  const handleUpdateRecord = () => {
    const updatedRecord = {
      id: recordId,
      item: item,
      amount: Number(amount),
      date: date,
      description: description,
    };
    //  유효성 검사
    const updatedRecordValid = validCheck(updatedRecord);
    if (updatedRecordValid.valid) {
      dispatch(updateRecord(updatedRecord));
      alert("수정완료!");
    } else {
      alert(updatedRecordValid.message);
    }
  };

  //삭제
  const handleDeleteRecord = () => {
    dispatch(deleteRecord(record));
    setIsModalOpen(false);
  };

  // record가 없다면,
  if (!record) {
    return <div>내용이 없습니다.</div>;
  }
  return (
    <>
      {isModalOpen && (
        <Modal
          show={isModalOpen.toString()}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleDeleteRecord}
          message={"진짜로 삭제할겁니까?"}
        />
      )}
      <DetailContainer>
        <h1>상세 정보</h1>
        <RecordDetail>
          <div>
            <label>항목: </label>
            <input type="text" value={item} onChange={onChangeItemHandler} />
          </div>
          <div>
            <label>금액: </label>
            <input
              type="number"
              value={amount}
              onChange={onChangeAmountHandler}
            />
          </div>
          <div>
            <label>날짜: </label>
            <input type="date" value={date} onChange={onChangeDateHandler} />
          </div>
          <div>
            <label>내용: </label>
            <input
              type="text"
              value={description}
              onChange={onChangeDescriptionHandler}
            />
          </div>
        </RecordDetail>
        <ButtonContainer>
          <Button onClick={handleUpdateRecord}>수정</Button>
          <Button onClick={() => setIsModalOpen(true)}>삭제</Button>
        </ButtonContainer>
      </DetailContainer>
    </>
  );
};

export default DetailPage;
// styled Components
const DetailContainer = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 5px;
  }
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  height: 100%;
`;

const RecordDetail = styled.div`
  margin-bottom: 20px;
  margin-top: 15px;
  & > div {
    margin-bottom: 10px;
  }

  label {
    display: inline-block;
    width: 80px;
    font-weight: bold;
  }

  input {
    width: calc(100% - 90px);
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:first-child {
    margin-right: 10px;
  }
`;
