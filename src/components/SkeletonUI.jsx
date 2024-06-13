import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SkeletonLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SkeletonItem = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #ccc;
  border-top-color: #333;
  animation: ${spin} 1s linear infinite;
`;

const SkeletonUI = () => {
  return (
    <SkeletonLoader>
      <SkeletonItem />
    </SkeletonLoader>
  );
};

export default SkeletonUI;
