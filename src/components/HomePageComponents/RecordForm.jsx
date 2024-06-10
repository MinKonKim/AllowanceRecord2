import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addRecord } from "../../redux/slices/recordsSlice";
import validCheck from "../../utils/validCheck";

const RecordForm = () => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const itemRef = useRef(null);

  //Redux
  const dispatch = useDispatch();
  const records = useSelector((state) => state.records);

  useEffect(() => {
    // 오늘 날짜로 지정
    const today = new Date().toISOString().slice(0, 10);
    setDate(today);
  }, []);

  useEffect(() => {
    if (itemRef.current) {
      itemRef.current.focus();
    }
  }, [records]);

  // 페이지 로드 시 item 입력 필드에 포커스 설정

  //추가
  const handleAddRecord = (e) => {
    e.preventDefault();
    // 새로운 Record 생성
    const newRecord = {
      id: uuidv4(),
      date: date,
      item: item,
      amount: Number(amount),
      description: description,
    };

    // newRecordValid : 유효성 검사 결과를 받는 객체
    const newRecordValid = validCheck(newRecord);

    if (newRecordValid.valid) {
      dispatch(addRecord(newRecord));
    } else {
      alert(newRecordValid.message);
    }

    setItem("");
    setAmount("");
    setDescription("");
  };

  return (
    <RecordFormWrapper onSubmit={handleAddRecord}>
      <FormField>
        <label>날짜</label>
        <input
          type="date"
          value={date}
          placeholder="날짜"
          onChange={(e) => setDate(e.target.value)}
        />
      </FormField>
      <FormField>
        <label>항목</label>
        <input
          type="text"
          value={item}
          placeholder="항목"
          onChange={(e) => setItem(e.target.value)}
          ref={itemRef} // ref를 설정하여 autofocus 기능 구현
        />
      </FormField>
      <FormField>
        <label>금액</label>
        <input
          type="number"
          value={amount}
          placeholder="금액을 입력해주세요."
          onChange={(e) => setAmount(e.target.value)}
        />
      </FormField>
      <FormField>
        <label>내용</label>
        <input
          type="text"
          value={description}
          placeholder="내용을 입력해주세요."
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormField>
      <SubmitButton type="submit">저장</SubmitButton>
    </RecordFormWrapper>
  );
};

export default RecordForm;
// styled Components
const RecordFormWrapper = styled.form`
  display: flex;
  padding: 5px;
  border: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 40px auto;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 5px;
  width: 20vw;
  height: 80px;
  margin: 0;

  label {
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  input {
    font-size: 15px;
    height: 30px;
    width: 15vw;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    outline: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: border-color 0.2s ease-in-out;
    &:focus {
      border-color: #80bdff;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  flex: 1;
  color: white;
  padding: 15px;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;
