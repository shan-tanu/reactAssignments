import React from "react";
import Axios from "axios";
import {connect} from "react-redux";

class ProductCountComponent extends React.Component {
    render() {
        //debugger;
        return (
            <div>
                <h1>Total Product Count: {this.props.products.length}</h1>
            </div>
        )
    }   
}

function mapPropsToStore(store){
    return {
        products: store.products
    }
}

export default connect(mapPropsToStore, null)(ProductCountComponent)