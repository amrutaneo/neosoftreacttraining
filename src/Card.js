import {Link} from "react-router-dom";

function Card(props){
    return (
        <div>
            
            <div className="card" style={{width: "19.9rem"}}>
                <Link to={"/cake/"+props.cakedata.cakeid}><img src={props.cakedata.image} className="card-img-top" alt="" style={{height:"200px"}} /></Link>
                <div className="card-body"> 
                    <h5 className="card-title">{props.cakedata.name}</h5>
                    
                </div>
            </div>
                
        </div>
        
    )
}

export default Card;