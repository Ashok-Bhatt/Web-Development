import React from 'react'
import "./InputBox.css"

function InputBox({text, currency, amount, changeCurrency, changeAmount, currencyOptions=[]}) {
  return (
    <div className='input-box'>
      <div className="input-field amount-field">
        <label htmlFor="currency-amount">{text}</label>
        <input type="number" name="currency-amount" id="currency-amount" value={amount} onChange={(e)=>{changeAmount(e.target.value)}} />
      </div>
      <div className="input-field currency-field">
        <label htmlFor="currency-type">Currency Type</label>
        <select name="currency-type" id="currency-type" value={currency} onChange={(e)=>{changeCurrency(e.target.value)}}>
            {
                currencyOptions.map((element)=>(
                    <option value={element} key={element}>{element}</option>
                ))
            }
        </select>
      </div>
    </div>
  )
}

export default InputBox;
