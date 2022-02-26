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


    componentDidMount = () => {
        //debugger;
        var id = this.props.match.params.userId;
        var url = "https://localhost:5001/api/Product/" + id;
        var getPromise = Axios.get(url);
        getPromise.then((response) => {
        //debugger;    
        this.setState({
                pid: response.data.pid,
                pname: response.data.pname,
                qty: response.data.qty,
                price: response.data.price
            })
        })
    }



    updateProduct = () => {
        //debugger;
        var putData = {
            pid: this.state.pid,
            pname: this.state.pname,
            qty: this.state.qty,
            price: this.state.price
        };

        var url = "https://localhost:5001/api/Product/" + this.state.pid;
        var putPromise = Axios.put(url, putData);
        putPromise.then((response) => {
            console.log("updated product");
            //getProducts();
        }, (reject) => {
            console.log("fail");
        });

        this.setState({pid:"",pname:"",qty:"",price:""})
    }

    render() {
        return (
            <form  className="form-horizontal" style={{ padding: "20px", margin: "14px 30px" }}>
            <fieldset>

                <h3>Update Product Functionality</h3>

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
                        <button id="" name="" className="btn btn-primary" onClick={this.updateProduct}>Update Product</button>
                    </div>
                </div>

            </fieldset>
        </form>
        )
    }
}







