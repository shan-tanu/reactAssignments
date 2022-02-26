import React from 'react';
import Axios from "axios"
import ProductDetailsComponent from "./ProductDetailsComponent"

export default class ProductListComponent extends React.Component {
    constructor() {
        super(); 
        this.state = {
            productList: [], 
            pid: "",
            pname: "",
            qty: "",
            price: ""
        }
    }

    getProducts() {
        var dataPromise = Axios.get("https://localhost:5001/api/Product");
        dataPromise.then((response) => {
            //debugger;
            this.setState({
                productList: response.data
            })
        })
    }

    deleteProduct = (pid) => {
        var url = "https://localhost:5001/api/Product/" + pid;
        var delPromise = Axios.delete(url);
        delPromise.then((response) => {
            console.log("success");
            //debugger;
            this.getProducts();
        }, (reject) => {
            console.log("fail");
        })
    }

    updateProduct = (event) => {
        //debugger;
        var pid = event.target.id;
        this.props.history.push("/update/" + pid);
    }

    componentDidMount() {
        this.getProducts();
    }

    createProduct = () => {
        const postData = {
            pid: this.state.pid,
            pname: this.state.pname,
            qty: this.state.qty,
            price: this.state.price
        };

        var url = "https://localhost:5001/api/Product";

        var postPromise = Axios.post(url, postData)
        postPromise.then((response) => {
            console.log("new product added");
            this.getProducts();
        }, (reject) => {
            console.log("fail");
        });
    }

    render() {
        return (
            <div>
                <h1>Product List is given Below:</h1>
                {this.state.productList.map((product) => {
                    return <ProductDetailsComponent key={product.pid} {...product} deleteProduct={this.deleteProduct} updateProduct={this.updateProduct}></ProductDetailsComponent>
                })}

                {/* <form  className="form-horizontal" style={{ padding: "20px", margin: "14px 30px" }}>
                    <fieldset>

                        <h3>Add Product Functionality</h3>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="pid">Product ID</label>
                            <div className="col-md-4">
                                <input id="pid" name="pid" type="text" placeholder="" className="form-control input-md" required="" onChange={(e) => this.setState({ productList: this.state.productList, pid: e.target.value, pname: this.state.pname, qty: this.state.qty, price: this.state.price })} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="pname">Product Name</label>
                            <div className="col-md-4">
                                <input id="pname" name="pname" type="text" placeholder="" className="form-control input-md" required="" onChange={(e) => this.setState({ productList: this.state.productList, pid: this.state.pid, pname: e.target.value, qty: this.state.qty, price: this.state.price })} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="qty">Quantity</label>
                            <div className="col-md-4">
                                <input id="qty" name="qty" type="text" placeholder="" className="form-control input-md" required="" onChange={(e) => this.setState({ productList: this.state.productList, pid: this.state.pid, pname: this.state.pname, qty: e.target.value, price: this.state.price })} />

                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="price">Price </label>
                            <div className="col-md-4">
                                <input id="price" name="price" type="text" placeholder="" className="form-control input-md" required="" onChange={(e) => this.setState({ productList: this.state.productList, pid: this.state.pid, pname: this.state.pname, qty: this.state.qty, price: e.target.value })} />

                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor=""></label>
                            <div className="col-md-4">
                                <button id="" name="" className="btn btn-primary" onClick={this.createProduct}>Add Product</button>
                            </div>
                        </div>

                    </fieldset>
                </form> */}

            </div>
        )
    }
}

