import React from 'react';
import Axios from "axios"
import StockDetailsComponent from './StockDetailsComponent';

export default class StockComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            stockList: []
        };
    };

    getStocks = () => {
        //debugger;
        var dataPromise = Axios.get(this.props.api);
        dataPromise.then((response) => {
            //debugger;
            var currrentStocks = [];
            currrentStocks.push(response.data);
            this.setState({
                stockList: currrentStocks
            })
        })
    }


    componentDidMount = () => {
        this.getStocks();
        setInterval(() => {
            this.getStock();
        }, 5000);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.stockList.map(stock => <StockDetailsComponent key={stock.data.DISPID} {...stock}></StockDetailsComponent>)}
                    </div>
                </div>

            </div>
        )
    }
}

