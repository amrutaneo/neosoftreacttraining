var img1 = "img.jpg";
var img2 = "image4.jpeg";
var img3 = "image2.jpeg";

var imgheightwidth = { 
    width:100,
    height:300
}

function Courosal(){
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={img1} style={imgheightwidth} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={img2} style={imgheightwidth} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={img3} style={imgheightwidth} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Courosal;