export default function DisplayEmp(props){
    return(
        <div>
            <img src={props.avatar} alt="Avatar" height="150px" width="150px"/>
            <div style={{textAlign:"center"}}>
            <b style={{display:'inline'}}><h3>Name</h3></b><p style={{display:'inline'}}>{props.name}</p>
            </div>
            <b><h3>Created Date</h3></b><p>{props.createdAt}</p>
            <b><h3>ID</h3></b><p>{props.id}</p>            
        </div>
    )
    
}

