/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  transform: rotate(0deg);
  transition: transform 0.3s ease;

  &.active {
    transform: rotate(360deg);
    transition: transform 0.3s ease;
  }

  svg {
    fill: ${(p) => p.theme.colorBrand}
  }

  @media (max-width: ${(p) => p.theme.screenSm}) {
    margin: 8px 0;
    transform: rotate(90deg);

    &.active {
      transform: rotate(450deg);
    }
  }
`;
