import {
  SET_CURRENCIES_LIST,
  SET_MIN_AMOUNT,
  UPDATE_AMOUNT_TO,
  SET_ESTIMATE_ERROR,
  SET_CURRENCY_FROM,
  SET_CURRENCY_TO,
  SWITCH_CURRENCY,
  UPDATE_AMOUNT_FROM,
} from '../constants/exchange';

const initialState = {
  currencies: [],
  minAmount: 0,
  from: 'btc',
  to: 'eth',
  amountFrom: '0.01',
  amountTo: '...',
  estimateErrors: '',
};

export default function app(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_AMOUNT_FROM:
      return {
        ...state,
        amountFrom: payload,
      };
    case UPDATE_AMOUNT_TO: {
      return {
        ...state,
        amountTo: payload,
      }; }
    case SET_CURRENCY_FROM:
      return {
        ...state,
        from: payload,
      };
    case SET_CURRENCY_TO:
      return {
        ...state,
        to: payload,
      };
    case SWITCH_CURRENCY: {
      const { from, to } = payload;
      return {
        ...state,
        to: from,
        from: to,
      };
    }
    case SET_CURRENCIES_LIST:
      return {
        ...state,
        currencies: payload,
      };
    case SET_MIN_AMOUNT:
      return {
        ...state,
        minAmount: payload,
      };
    case SET_ESTIMATE_ERROR:
      return {
        ...state,
        estimateErrors: payload,
      };

    default:
      return state;
  }
}
