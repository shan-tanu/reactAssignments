export default function StockDetailsComponent(props) {

    // pending,name,qty,price

    var styleObject = {
        containerStyle: {
            // width: "18rem",
            // margin: "20px",
            // display: "inline-block"
        }
    };

    return (
        <div className="card" style={styleObject.containerStyle}>
            <div className="card-body">
                <p>Stock Symbol : <b>{props.data.symbol}</b></p>
                <h2 className="card-title">{props.data.SC_FULLNM}</h2>
                <p>Market Cap : {props.data.MKTCAP}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Lower Circuit</th>
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
                <br/>
                <p>Current Price: <b>{props.data.pricecurrent}</b></p>

            </div> 
        </div>
    )
}