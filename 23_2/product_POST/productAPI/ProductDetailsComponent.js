export default function ProductDetailsComponent(props) {

    // pid,name,qty,price

    var styleObject = {
        containerStyle: {
            width: "18rem",
            margin: "20px",
            display: "inline-block" 
        }
    };

    const deleteChild = () => {
        return props.deleteProduct(props.pid);
    }

    return (
        <div className="card" style={styleObject.containerStyle}>
            <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
            <div className="card-body">
                <div>
                    <div>
                        <p className="card-text">{props.pid} <b>{props.name}</b> Description of the product for better understanding.</p>
                        <h5>The quantity : {props.qty}</h5>
                        <h4>The price of each : {props.price}</h4>
                    </div>
                    <input type="button" className="btn btn-primary" value="Delete" onClick={deleteChild}/>
                </div>
            </div>
        </div>
    )
}