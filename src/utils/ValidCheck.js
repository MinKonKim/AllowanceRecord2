import { validate as uuidValidate } from "uuid";
const validCheck = (record) => {
  const { id, date, item, amount, description } = record;
  if (!uuidValidate(id)) {
    return { valid: false, message: "올바른 ID값이 아닙니다." };
  }
  if (!date) {
    return { valid: false, message: "날짜를 적어주세요." };
  }
  if (item.length <= 0) {
    return { valid: false, message: "항목을 적어주세요." };
  }
  if (isNaN(amount) || amount <= 0) {
    return { valid: false, message: "올바른 금액을 적어주세요." };
  }
  if (description.length <= 0) {
    return { valid: false, message: "내용을 입력해 주세요." };
  }
  return { valid: true, message: "올바른 객체입니다." };
};
export default validCheck;
