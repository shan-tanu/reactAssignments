

export default function EmployeeDetailsComponent(props) {
    
    var cardStyle = {
        width: "18rem",
        margin: "14px",
        display: "inline-block",
        verticalAlign: "middle",
        color: "black"
    }

    return (
        <div className="card" style={cardStyle}>
            <img src={props.avatar} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <h5 className="card-text">ID : {props.id} </h5>
                <p className="card-text"><b>Date of Joining : </b><h6>{props.createdAt}</h6>Sample text about the employee to give a brief introduction about them so that we can know about.</p>
                <a href={props.know}><input type="button" className="btn btn-primary" value="Know from Google" /></a>
            </div>
        </div>
    )
}