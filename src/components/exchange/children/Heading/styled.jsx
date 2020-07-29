/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeadingWrapper = styled.div`
  display: flex;

  .title { 
    font-size: 32px;
    line-height: 34px;
    color: ${(p) => p.theme.colorBrand};
    margin: 0;
  }
`;
