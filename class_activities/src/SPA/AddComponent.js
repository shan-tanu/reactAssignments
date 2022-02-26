import Axios from 'axios';
import React from 'react';

export default class UpdateComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            pname: "",
            pid: "",
            qty: "",
            price: ""
        }
    }


    addProduct = () => {
        //debugger;
        var postData = {
            pid: this.state.pid,
            pname: this.state.pname,
            qty: this.state.qty,
            price: this.state.price
        };

        var url = "https://localhost:5001/api/Product";

        var postPromise = Axios.post(url, postData);
        postPromise.then((response) => {
            console.log("added new product");
            //getProducts();
        }, (reject) => {
            console.log("fail");
        });

        this.setState({pid:"",pname:"",qty:"",price:""})
        this.props.history.push("/");
    }

    render() {
        return (
            <form  className="form-horizontal" style={{ padding: "20px", margin: "14px 30px" }}>
            <fieldset>

                <h3>Add New Product Functionality</h3>

                <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="pid">Product ID</label>
                    <div className="col-md-4">
                        <input id="pid" name="pid" type="text" placeholder="" className="form-control input-md" value={this.state.pid} required="" onChange={(e) => this.setState({ productList: this.state.productList, pid: e.target.value, pname: this.state.pname, qty: this.state.qty, price: this.state.price })} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="pname">Product Name</label>
                    <div className="col-md-4">
                        <input id="pname" name="pname" type="text" placeholder="" className="form-control input-md" required="" value={this.state.pname} onChange={(e) => this.setState({ productList: this.state.productList, pid: this.state.pid, pname: e.target.value, qty: this.state.qty, price: this.state.price })} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="qty">Quantity</label>
                    <div className="col-md-4">
                        <input id="qty" name="qty" type="text" placeholder="" className="form-control input-md" required="" value={this.state.qty} onChange={(e) => this.setState({ productList: this.state.productList, pid: this.state.pid, pname: this.state.pname, qty: e.target.value, price: this.state.price })} />

                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="price">Price </label>
                    <div className="col-md-4">
                        <input id="price" name="price" type="text" placeholder="" className="form-control input-md" required="" value={this.state.price} onChange={(e) => this.setState({ productList: this.state.productList, pid: this.state.pid, pname: this.state.pname, qty: this.state.qty, price: e.target.value })} />

                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor=""></label>
                    <div className="col-md-4">
                        <button id="" name="" className="btn btn-primary" onClick={this.addProduct}>Add Product</button>
                    </div>
                </div>

            </fieldset>
        </form>
        )
    }
}







