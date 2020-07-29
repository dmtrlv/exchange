import { batch } from 'react-redux';
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
import api from '../api';

export const getAllCurrencies = () => async (dispatch) => {
  const { data } = await api.getAllCurrencies();
  dispatch({ type: SET_CURRENCIES_LIST, payload: data });
};

export const getMinAmount = (from, to) => async (dispatch) => {
  const { data, error } = await api.getMinAmount(from, to);
  const { minAmount } = data;
  if (!error) {
    dispatch({ type: SET_MIN_AMOUNT, payload: minAmount.toString() });
  }
};

export const getEstimate = (from, to, amountFrom) => async (dispatch) => {
  dispatch({ type: SET_ESTIMATE_ERROR, payload: '' });
  const { data, error } = await api.getEstimate(from, to, amountFrom);
  const { estimatedAmount } = data;
  if (!error) {
    dispatch({ type: UPDATE_AMOUNT_TO, payload: estimatedAmount.toString() });
  } else {
    batch(() => {
      dispatch({ type: SET_ESTIMATE_ERROR, payload: data });
      dispatch({ type: UPDATE_AMOUNT_TO, payload: '...' });
    });
  }
};

export const setCurrencyFrom = (from) => async (dispatch) => {
  dispatch({ type: SET_CURRENCY_FROM, payload: from });
};

export const setCurrencyTo = (to) => async (dispatch) => {
  dispatch({ type: SET_CURRENCY_TO, payload: to });
};

export const switchCurrency = (from, to) => async (dispatch) => {
  dispatch({ type: SWITCH_CURRENCY, payload: { from, to } });
};

export const updateAmountFrom = (value) => async (dispatch) => {
  dispatch({ type: UPDATE_AMOUNT_FROM, payload: value });
};
