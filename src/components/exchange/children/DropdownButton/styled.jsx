/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const DropDownWrapper = styled.div`
  .label-container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 8px 8px 6px;
    border-left: 1px solid ${(p) => p.theme.colorLightGray};
  }

  .label {
    margin-top: 2px;
    text-transform: uppercase;
  }

  .coin-icon {
    display: flex;
    svg {
      width: 24px;
      height: 24px;
      fill: ${(p) => p.theme.colorBrand};
      path {
        fill: ${(p) => p.theme.colorBrand};
      }
    }
  }
`;
