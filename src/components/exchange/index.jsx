import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEstimate,
  getAllCurrencies,
  getMinAmount,
  setCurrencyFrom,
  setCurrencyTo,
  switchCurrency,
  updateAmountFrom,
} from '../../action/exchange';

import Input from './children/Input';
import Heading from './children/Heading';
import Currency from './children/Currency';
import SwitchButton from './children/SwitchButton';
import AlertMessage from './children/AlertMessage';
import Loader from './children/Loader';

import { ExchangeWrapper } from './styled';

const errorsResponse = {
  amount: 'deposit_too_small',
  unsupportedPair: 'pair_is_inactive',
};

const ExchangePage = () => {
  const dispatch = useDispatch();
  const [walletAddress, setWalletAddress] = useState('');

  const {
    currencies,
    from,
    to,
    amountFrom,
    amountTo,
    minAmount,
    estimateErrors,
  } = useSelector((s) => ({
    currencies: s.exchange.currencies,
    from: s.exchange.from,
    to: s.exchange.to,
    amountFrom: s.exchange.amountFrom,
    amountTo: s.exchange.amountTo,
    minAmount: s.exchange.minAmount,
    estimateErrors: s.exchange.estimateErrors,
  }));

  useEffect(() => {
    dispatch(getAllCurrencies());
  }, []);

  useEffect(() => {
    dispatch(getMinAmount(from, to));
    dispatch(getEstimate(from, to, amountFrom));
  }, [from, to, amountFrom]);

  const setCurrency = (e, ticker, type) => {
    if (type === 'from') {
      if (ticker === to) {
        dispatch(switchCurrency(from, to));
      }
      dispatch(setCurrencyFrom(ticker));
    } else if (type === 'to') {
      if (ticker === from) {
        dispatch(switchCurrency(from, to));
      }
      dispatch(setCurrencyTo(ticker));
    }
  };

  const handleChangeAmountFrom = (value) => {
    dispatch(updateAmountFrom(value));
  };

  const enterAddress = (value) => {
    setWalletAddress(value);
  };

  const renderAlertMessage = () => {
    if (estimateErrors === errorsResponse.amount) {
      return (
        <AlertMessage onClick={() => dispatch(updateAmountFrom(minAmount))}>
          Minimum amount: &nbsp;
          {minAmount}
            &nbsp;
          {from.toUpperCase()}
        </AlertMessage>
      );
    } if (estimateErrors === errorsResponse.unsupportedPair) {
      return (
        <AlertMessage>
          Unsupported exchange pair
        </AlertMessage>
      );
    }
    return <AlertMessage>Internal server error</AlertMessage>;
  };

  const [selectedFrom, selectedTo, memorizedCurrenciesFrom, memorizedCurrenciesTo] = useMemo(() => {
    const selectCurrencyFrom = currencies.find((currency) => currency.ticker === from);
    const selectCurrencyTo = currencies.find((currency) => currency.ticker === to);
    const filteredCurrenciesListFrom = currencies.filter((currency) => currency.ticker !== from);
    const filteredCurrenciesListTo = currencies.filter((currency) => currency.ticker !== to);
    return [
      selectCurrencyFrom,
      selectCurrencyTo,
      filteredCurrenciesListFrom,
      filteredCurrenciesListTo,
    ];
  }, [from, to, currencies]);

  return (
    <ExchangeWrapper>
      {currencies.length <= 0 ? <Loader />
        : (
          <>
            <Heading content="Crypto Exchange" className="main-title" />
            <p className="sub-title">Exchange fast and easy</p>
            <div className="currencies-inputs-block">
              <div>
                <Currency
                  selectedItem={selectedFrom}
                  list={memorizedCurrenciesFrom}
                  onClick={(e, itemTicker) => setCurrency(e, itemTicker, 'from')}
                  value={amountFrom}
                  onChange={handleChangeAmountFrom}
                  type="number"
                />
              {estimateErrors.length > 0 ? renderAlertMessage(estimateErrors) : null}
              </div>

              <SwitchButton onClick={() => dispatch(switchCurrency(from, to))} />

              <Currency
                selectedItem={selectedTo}
                list={memorizedCurrenciesTo}
                onClick={(e, itemTicker) => setCurrency(e, itemTicker, 'to')}
                value={amountTo}
              />

            </div>
            {/* {estimateErrors.length > 0 ? renderAlertMessage(estimateErrors) : null} */}
            <div className="enter-address-block">
              <p className="enter-wallet-address-title">
                Enter your&nbsp;
                {selectedTo.name}
                &nbsp;wallet address
              </p>
              <div className="flex-container">
                <Input
                  type="text"
                  placeholder={`Enter your ${to.toUpperCase()} wallet address`}
                  onChange={enterAddress}
                  value={walletAddress}
                  className="wallet-input"
                />
                <button type="button" className="start-exchange-btn">
                  EXCHANGE
                </button>
              </div>
            </div>
          </>
        )}
    </ExchangeWrapper>
  );
};

export default ExchangePage;
