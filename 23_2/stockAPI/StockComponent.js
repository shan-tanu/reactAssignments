import React from 'react';
import Axios from "axios"
import StockDetailsComponent from './StockDetailsComponent';

export default class StockComponent extends React.Component {
    constructor() {
        super();
        this.apis = ["https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI", "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/NLC"];
        this.state = {
            stockList: []
        }
    }

    getStocks() {
        this.apis.map((ele) => {
            var dataPromise = Axios.get(ele);
            dataPromise.then((response) => {
                //debugger;
                var currrentStocks = this.state.stockList;
                currrentStocks.push(response.data);
                this.setState({
                    stockList: currrentStocks
                })
            })
        })
    }

    componentDidMount() {
        this.getStocks();
    }

    render() {
        return (
            <div>
                <h1 style={{margin: "20px 12px", textAlign: "center", fontFamily: "'Fira Sans', sans-serif"}}>Stock Data Application</h1><br/>
                {this.state.stockList.map((stock) => {
                    return <StockDetailsComponent key={stock.data.DISPID} {...stock}></StockDetailsComponent>
                })}
            </div>
        )
    }
}

