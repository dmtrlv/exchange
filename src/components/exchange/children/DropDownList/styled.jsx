/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const DropDownListWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: -1px;
  top: -1px;
  background: #fff;
  border: 1px solid ${(p) => p.theme.colorLightGray};
  border-radius: 4px;
  overflow-y: scroll;
  height: 200px;
  z-index: 2;

  .list-item {
    display: flex;
    cursor: pointer;
    padding: 16px 8px;
    align-items: center;

    &:hover {
      background: ${(p) => p.theme.colorTransparentLightGray};
    }

    &.search {
      border-bottom: 1px solid ${(p) => p.theme.colorLightGray};
      &:hover {
        background:#fff;
      }

      .cl-input {
        outline: none;
        background: transparent;
        border: none;
        font-size: 18px;
        line-height: 20px;
        color: ${(p) => p.theme.colorDarkGray}
      }
    }

    .label {
      font-weight: bold;
      text-transform: uppercase;
      color: ${(p) => p.theme.colorDarkGray};
      margin: 0px 8px;
    }

    .coin-name {
      color: ${(p) => p.theme.colorLightGray};
      margin: 0 0 0 8px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
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
  }
`;
