/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 80px;
    height: 80px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${(p) => p.theme.colorBrand};
    border-color: ${(p) => p.theme.colorBrand} transparent ${(p) => p.theme.colorBrand} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
