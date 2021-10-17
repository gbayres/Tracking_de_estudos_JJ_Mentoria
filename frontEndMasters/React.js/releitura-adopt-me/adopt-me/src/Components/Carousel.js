import { useState } from 'react';

const Carousel = (props) => {
    const [active, setActive] = useState(0);
    let { images } = props;

    const handleIndexClick = (e) => {
        setActive(+e.target.dataset.index)
    }

    return(
        <div className="carousel">
            <img src={images[active]} alt="animal"/>
            <div className="carousel-smaller">
                {
                    images.map((photo, index) => {
                        return(
                            <img
                                key={photo}
                                src={photo}
                                onClick={handleIndexClick}
                                data-index={index}
                                className={index === active ? "active" : ""}
                                alt="animal thumbnail"
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel