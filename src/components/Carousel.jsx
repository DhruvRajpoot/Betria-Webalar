import { LazyLoadImage } from "react-lazy-load-image-component"

const Carousel = (props) => {
    const [, ...images] = props.images
    return (
        <>
            <div className="carouselDiv">
                <div id="carouselExampleCaptions" className="carousel slide carousel-light " data-bs-ride="false" style={{ width: `${props.width}`, height: `${props.height}`, margin: '0 auto' }}>
                    <div className="carousel-indicators">
                        <button type="button" className="active" style={{width:'.5rem',height:'.5rem',borderRadius:'50%'}} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true"></button>
                        {images.map((element, index) => {
                            return <button type="button" style={{width:'.5rem',height:'.5rem',borderRadius:"50%"}} key={index} data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index + 1} ></button>
                        })}
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <LazyLoadImage effect="blur" src={props.images[0].image} className="d-block w-100" alt="..." style={{ width: `${props.width}`, height: `${props.height}`, margin: '0 auto',transform:'translateY(-3rem)' }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{props.images[0].caption}</h5>
                                <p style={{fontSize:'.7rem'}}>{props.images[0].para}</p>
                            </div>
                        </div>

                        {images.map((element, index) => {
                            return <div className="carousel-item" key={index}>
                                <LazyLoadImage effect="blur" src={element.image} className="d-block w-100" alt="..." style={{ width: `${props.width}`, height: `${props.height}`, margin: '0 auto',transform:'translateY(-3rem)' }} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{element.caption}</h5>
                                    <p style={{fontSize:'.7rem'}}>{element.para}</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Carousel;