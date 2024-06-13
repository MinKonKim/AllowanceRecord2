import styled, { keyframes } from "styled-components";

function SkeletonUI({ width, height }) {
  return <SkeletonWrapper width={width} height={height} />;
}

export default SkeletonUI;

const LoadingAnimation = keyframes`
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
`;

const SkeletonWrapper = styled.div`
  display: inline-block;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "1em"};
  background-color: #f0f0f0;
  animation: ${LoadingAnimation} 1s infinite;
`;
