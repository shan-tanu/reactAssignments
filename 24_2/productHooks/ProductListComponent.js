import React, { useState, useEffect } from 'react';
import Axios from "axios"
import ProductDetailsComponent from "./ProductDetailsComponent"



export default function ProductListComponent() {
    var [productList, setProductList] = useState([]);
    var [pid, setPid] = useState("");
    var [pname, setPname] = useState("");
    var [qty, setQty] = useState("");
    var [price, setPrice] = useState("");

    useEffect(() => {
        var dataPromise = Axios.get("https://localhost:5001/api/Product");
        dataPromise.then((response) => {
            //debugger;
            setProductList(response.data);
        })
    }, []);

    var getProducts = () => {
        var dataPromise = Axios.get("https://localhost:5001/api/Product");
        dataPromise.then((response) => {
            //debugger;
            setProductList(response.data);
        })
    }

    var createProduct = () => {
        const postData = {
            pid: pid,
            pname: pname,
            qty: qty,
            price: price
        };

        var url = "https://localhost:5001/api/Product";
        var postPromise = Axios.post(url, postData)
        postPromise.then((response) => {
            console.log("new product added");
            getProducts();
        }, (reject) => {
            console.log("fail");
        });

        setPid("");
        setPname("");
        setQty("");
        setPrice("");
    }

    var deleteProduct = (e) => {
        var url = "https://localhost:5001/api/Product/" + e.target.id;
        var delPromise = Axios.delete(url);
        delPromise.then((response) => {
            console.log("success");
            //debugger;
            getProducts();
        }, (reject) => {
            console.log("fail");
        })
    }

    var fetchUpdate = (e) => {
        var dataPromise = Axios.get("https://localhost:5001/api/Product/" + e.target.id);
        dataPromise.then((response) => {
            //debugger;
            var productData = response.data;
            setPid(productData.pid);
            setPname(productData.pname);
            setQty(productData.qty);
            setPrice(productData.price);
        })

    }

    var updateProduct = () => {
        //debugger;
        var putData = {
            pid: pid,
            pname: pname,
            qty: qty,
            price: price
        };

        var url = "https://localhost:5001/api/Product/" + pid;
        var putPromise = Axios.put(url, putData)
        putPromise.then((response) => {
            console.log("updated product");
            getProducts();
        }, (reject) => {
            console.log("fail");
        });

        setPid("");
        setPname("");
        setQty("");
        setPrice("");
    }


    return (
        <div>
            <h1>Product List is given Below:</h1>
            {productList.map((product) => {
                return <ProductDetailsComponent key={product.pid} {...product} delete={deleteProduct} fetchUpdate={fetchUpdate}></ProductDetailsComponent>
            })}

            <form className="form-horizontal" style={{ padding: "20px", margin: "14px 30px" }}>
                <fieldset>

                    <h3>Add Product Functionality</h3>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="pid">Product ID</label>
                        <div className="col-md-4">
                            <input id="pid" name="pid" type="text" placeholder="" className="form-control input-md" required="" value={pid} onChange={(e) => setPid(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="pname">Product Name</label>
                        <div className="col-md-4">
                            <input id="pname" name="pname" type="text" placeholder="" className="form-control input-md" required="" value={pname} onChange={(e) => setPname(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="qty">Quantity</label>
                        <div className="col-md-4">
                            <input id="qty" name="qty" type="text" placeholder="" className="form-control input-md" required="" value={qty} onChange={(e) => setQty(e.target.value)} />

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="price">Price </label>
                        <div className="col-md-4">
                            <input id="price" name="price" type="text" placeholder="" className="form-control input-md" value={price} required="" onChange={(e) => setPrice(e.target.value)} />

                        </div>
                    </div>

                    <div className="float-container">
                        <label className="col-md-4 control-label" htmlFor=""></label>
                        <div className="col-md-4">
                            <button id="" name="" className="btn btn-primary" onClick={createProduct}>Add Product</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor=""></label>
                        <div className="col-md-4">
                            <button id="" name="" className="btn btn-primary" onClick={updateProduct}>Update Product</button>
                        </div>
                    </div>

                </fieldset>
            </form>
        </div>
    )
}


