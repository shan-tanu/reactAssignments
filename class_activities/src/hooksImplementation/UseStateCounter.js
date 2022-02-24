import { useEffect, useState } from "react";
import Axios from "axios";

export default function UseStateCounter() {
    var [stock, setStock] = useState(null);
    var [counter, setCounter] = useState(0);
    
    useEffect(()=>{
        getStocks();
    },[])    
    
    function getStocks() {
        var url = "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI";
        var dataPromise = Axios.get(url);
        dataPromise.then((response) => {
            //debugger;
            setStock(response.data);
        })
    }

    function automate() {
        //     setInterval(() => {
        //     setCounter(counter+1);
        //     console.log("hi"+counter);
        // }, 1000);
    }

    var styleObject = {
        containerStyle: {
            width: "18rem",
            margin: "20px",
            borderRadius: "10px",
            boxShadow: "10px 5px 5px gray",
            // display: "inline-block",
        }
    };

    return (
        <>
            <h1>Click here to get stock details</h1>
            <input type="button" value="Get Stock" onClick={getStocks} />
            {stock != null && <div className="col-lg-4 d-flex align-items-stretch">
                <div className="card" style={styleObject.containerStyle}>
                    <div className="card-body">
                        <p className="card-text">Stock Symbol : <b>{stock.data.symbol}</b></p>
                        <h2 className="card-text">{stock.data.SC_FULLNM}</h2>
                        <p className="card-text">Market Cap : {stock.data.MKTCAP}</p>
                        <table className="card-text">
                            <thead>
                                <tr>
                                    <th>Previous Close&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                    <th>Opening Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{stock.data.priceprevclose}</td>
                                    <td>{stock.data.OPN}</td>
                                </tr>
                            </tbody>
                        </table><br />
                        <table className="text-muted" style={{ fontSize: "0.8rem" }}>
                            <thead>
                                <tr>
                                    <th>Lower Circuit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                    <th>Upper Circuit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{stock.data.lower_circuit_limit}</td>
                                    <td>{stock.data.upper_circuit_limit}</td>
                                </tr>
                            </tbody>

                        </table>
                        <br />
                        <p className="card-text">Current Price: <b style={{ fontSize: "1.5rem" }}>{stock.data.pricecurrent}</b></p>

                    </div>
                </div>
            </div>
            }
            <br /><br /><br />
            <h1>The counter value is : {counter}</h1>
            <input type="button" onClick={automate} value="Increment" />
        </>

    )
}