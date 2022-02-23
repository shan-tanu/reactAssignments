export default function StockDetailsComponent(props) {

    // pending,name,qty,price

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
        <div className="col-lg-4 d-flex align-items-stretch">
            <div className="card" style={styleObject.containerStyle}>
                <div className="card-body">
                    <p className="card-text">Stock Symbol : <b>{props.data.symbol}</b></p>
                    <h2 className="card-text">{props.data.SC_FULLNM}</h2>
                    <p className="card-text">Market Cap : {props.data.MKTCAP}</p>
                    <table className="card-text">
                        <thead>
                            <tr>
                                <th>Previous Close&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                <th>Opening Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.data.priceprevclose}</td>
                                <td>{props.data.OPN}</td>
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
                                <td>{props.data.lower_circuit_limit}</td>
                                <td>{props.data.upper_circuit_limit}</td>
                            </tr>
                        </tbody>

                    </table>
                    <br />
                    <p className="card-text">Current Price: <b style={{ fontSize: "1.5rem" }}>{props.data.pricecurrent}</b></p>

                </div>
            </div>
        </div>

    )
}