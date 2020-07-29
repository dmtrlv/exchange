/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ExchangeWrapper = styled.div`
  .main-title {
    margin: 0 0 10px 0;
  }

  .sub-title {
    color: ${(p) => p.theme.colorDarkGray};
    margin: 0;
  }

  .currencies-inputs-block {
    display: flex;
    margin: 10px 0;

    @media (max-width: ${(p) => p.theme.screenSm}) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .enter-address-block {
    margin-top: 20px;

    .enter-wallet-address-title {
      margin: 0 0 12px 0;
    }

    .flex-container {
      display: flex;
      justify-content: space-between;
      .wallet-input {
        background: #fff;
        width: 100%;
        border: 1px solid ${(p) => p.theme.colorLightGray};
        margin: 0 12px 0 0;
      }

      .start-exchange-btn {
        padding: 12px 24px;
        margin: 0 0 0 12px;
        border: none;
        outline: none;
        background: ${(p) => p.theme.colorBrand};
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: ${(p) => p.theme.screenSm}) {
    .enter-address-block{
      .flex-container {
        flex-direction: column;
        .wallet-input {
          margin: 0 0 12px 0;
          width: inherit;
        }
        .start-exchange-btn {
          margin: 12px 0 0 0;
        }
      }
    }
  }
`;
