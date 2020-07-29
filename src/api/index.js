/* eslint-disable no-console */
import axios from 'axios';
import { GET_ALL_CURRENCIES, GET_MIN_AMOUNT, UPDATE_AMOUNT_TO } from '../constants/api';

const request = axios.create({
  baseURL: '',
});

// get all currencies method
export default {
  async getAllCurrencies() {
    try {
      const data = await request.get(GET_ALL_CURRENCIES);
      return data;
    } catch (err) {
      return [];
    }
  },

  async getMinAmount(from, to) {
    try {
      const { data } = await request.get(`${GET_MIN_AMOUNT}/${from.toLowerCase()}_${to.toLowerCase()}`);
      return { data, error: false };
    } catch (err) {
      const { error } = err.response.data;
      return { data: error, error: true };
    }
  },

  async getEstimate(from, to, amountFrom) {
    try {
      const { data } = await request.get(`${UPDATE_AMOUNT_TO}/${amountFrom}/${from.toLowerCase()}_${to.toLowerCase()}`);
      return { data, error: false };
    } catch (err) {
      const { error } = err.response.data;
      return { data: error, error: true };
    }
  },
};
