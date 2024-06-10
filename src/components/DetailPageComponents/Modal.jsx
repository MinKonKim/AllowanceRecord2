import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Modal = ({ show, onClose, onConfirm, message }) => {
  return (
    <ModalBackdrop show={show}>
      <ModalView>
        <p>{message}</p>
        <div>
          <Link to="/">
            <Button onClick={onConfirm}>확인</Button>
          </Link>
          <Button onClick={onClose}>취소</Button>
        </div>
      </ModalView>
    </ModalBackdrop>
  );
};

export default Modal;

// style Components
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translate(-50%, -60%);
  }

  to {
    transform: translate(-50%, -50%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translate(-50%, -50%);
  }

  to {
    transform: translate(-50%, -60%);
  }
`;
const ModalBackdrop = styled.div`
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.3s ease-out
    forwards;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalView = styled.div`
  animation: ${(props) => (props.show ? slideIn : slideOut)} 0.3s ease-out
    forwards;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
  background: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
