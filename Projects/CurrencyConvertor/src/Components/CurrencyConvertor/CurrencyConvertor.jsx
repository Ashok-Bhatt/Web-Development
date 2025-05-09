import React, { useEffect, useState } from 'react'
import "./CurrencyConvertor.css"
import InputBox from "../InputBox/InputBox"
import useCurrency from "../../Hooks/useCurrency"

function CurrencyConvertor() {

  const currencyInfo = useCurrency();
  const currencyOptions = currencyInfo ? Object.keys(currencyInfo) : [];

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  function swapCurrencies(){
    const tempCurrency = fromCurrency;
    const tempAmount = fromAmount;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  }

  useEffect(() => {
    if (currencyInfo && currencyInfo[toCurrency] && currencyInfo[fromCurrency]) {
        setToAmount(fromAmount * (currencyInfo[toCurrency].value / currencyInfo[fromCurrency].value));
    }
  }, [fromAmount, fromCurrency, currencyInfo]);

  // useEffect(() => {
  //     if (currencyInfo && currencyInfo[toCurrency] && currencyInfo[fromCurrency]) {
  //         setFromAmount(toAmount * (currencyInfo[fromCurrency].value / currencyInfo[toCurrency].value));
  //     }
  // }, [toAmount, toCurrency, currencyInfo]);

  return (
    <div className='currency-convertor-container'>
      <InputBox text="From" currency={fromCurrency} amount={fromAmount} changeCurrency={(currency)=>setFromCurrency(currency)} changeAmount={(amount)=>setFromAmount(amount)} currencyOptions={currencyOptions}/>
      <button className='swap-button' onClick={swapCurrencies}>SWAP</button>
      <InputBox text="To" currency={toCurrency} amount={toAmount} changeCurrency={(currency)=>setToCurrency(currency)} changeAmount={(amount)=>setToAmount(amount)} currencyOptions={currencyOptions}/>
    </div>
  )
}

export default CurrencyConvertor;