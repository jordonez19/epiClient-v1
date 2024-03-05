const Carousel = () => {

    return (
        <div className="bg-primary p-5 container bg-banners">

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner rounded">
                    <div className="carousel-item active">
                        <img
                            style={{ borderRadius: '10px', height: '500px', objectFit: 'contain' }}
                            className="d-block w-auto mx-auto"
                            src={require("../../assets/img/brand/Comics.jpg")} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img
                            style={{ borderRadius: '10px', height: '500px', objectFit: 'contain' }}
                            className="d-block w-auto mx-auto"
                            src={require("../../assets/img/brand/Comics.jpg")} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img
                            style={{ borderRadius: '10px', height: '500px', objectFit: 'contain' }}
                            className="d-block w-auto mx-auto"
                            src={require("../../assets/img/brand/Comics.jpg")} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel
