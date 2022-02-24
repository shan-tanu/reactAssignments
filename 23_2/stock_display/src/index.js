import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StockComponent from './StockComponent';

var stockAPIs = [
  "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI",
  "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/NLC",
]

ReactDOM.render(
  <React.StrictMode>
    <>
      <h1 style={{ margin: "20px 12px", textAlign: "center", fontFamily: "'Fira Sans', sans-serif" }}>Stock Data Application</h1><br />
      {stockAPIs.map((apie) => {
        return <StockComponent api={apie}/>
      })}
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

