var img1 = "image.jpeg";

function CardDetail(){
    return (
        <div>      
            <div class="container-fluid" style={{margin:"10px"}}>
                
                    
                    <div class="card-body" >
                        <h5 class="card-title">Product Detail</h5>
                        <div class="row">
                            <div class="col">
                                <img src={img1} style={{height:"100%",width:"100%"}} alt="" />
                            </div>
                            <div class="col">
                                <p>description of the product</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div> 
       
        
    )
}

export default CardDetail;