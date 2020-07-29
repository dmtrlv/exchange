/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const InputWrapper = styled.div`
  padding: 6px 4px;
  border-radius: 4px;

  .cl-input {
    font-size: 18px;
    line-height: 20px;
    color: ${(p) => p.theme.colorDarkGray};
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    margin: 0;
    background: transparent;
  }
`;
