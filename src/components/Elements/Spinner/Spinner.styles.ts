import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Svg = styled.svg`
  animation: ${spin} 1s linear infinite;

  &.sm {
    height: 1rem;
    width: 1rem;
  }

  &.md {
    height: 2rem;
    width: 2rem;
  }

  &.lg {
    height: 4rem;
    width: 4rem;
  }

  &.xl {
    height: 6rem;
    width: 6rem;
  }

  &.light {
    color: white;
  }

  &.primary {
    color: black;
  }
`;

export const Circle = styled.circle`
  opacity: 25%;
`;

export const Path = styled.path`
  opacity: 75%;
`;
