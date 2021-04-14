

function Card(props){
    return (
        <div>
            
            <div class="card" style={{width: "15rem",height:"18rem",align:"center"}}>
                <img src={props.cakedata.image} className="card-img-top" alt="" style={{width: "80%",height:"80%"}}/>
                <div className="card-body"> 
                    <h5 className="card-title">{props.cakedata.name}</h5>
                    
                </div>
            </div>
                
        </div>
        
    )
}

export default Card;