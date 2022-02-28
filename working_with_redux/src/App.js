import React from "react";
import Axios from "axios";
import { connect } from "react-redux";

import * as actions from "./Actions/productActions"

import ProductDetailsComponent from "./ProductDetailsComponent";


class App extends React.Component {
    getProducts = () => {
        var dataPromise = Axios.get("https://localhost:5001/api/Product");
        dataPromise.then((response) => {
            this.props.setProductList(response.data)
        })
    }

    render() {
        return (
            <div>
                <input type="button" value="Get Data" onClick={this.getProducts} />
                <input type="button" value="Delete All Products" onClick={this.props.deleteAllProducts} /><br/>
                {this.props.products.map((product) =>
                    <ProductDetailsComponent {...product} />
                )}
            </div>
        )
    }
}

function mapPropsToStore(store) {
    return {
        products: store.products
    }
}

export default connect(mapPropsToStore, actions)(App)
