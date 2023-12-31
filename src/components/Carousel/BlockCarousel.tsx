import React from 'react';
import {Carousel} from 'antd';
import data from "../../assets/carousel.json";
import ItemCarousel from "./ItemCarousel.tsx";
import type { CarouselRef } from "antd/es/carousel";
import {useNavigate} from "react-router-dom";

const BlockCarousel: React.FC = () => {
    const ref = React.useRef<CarouselRef>(null);
    const navigate = useNavigate()
    const [value, setValue] = React.useState<number>(0);

    const goTo = (slide: number) => {
        ref.current?.goTo(slide, false);
    };

    const setSlide = (current: number) => {
        setValue(current);
    };

    const clickCarouselItem = (id: number) => {
        navigate(`/sneakers/${id}`)
    }

    return (
        <div className="carousel-block">
            <Carousel
                ref={ref}
                className="carousel"
                pauseOnHover
                draggable
                autoplay
                dots={false}
                afterChange={setSlide}
            >
                {
                    data.map(item => {
                        return <ItemCarousel
                            key={`carousel ${item.id}`}
                            id={item.id}
                            imageName={item.imageName}
                            title={item.title}
                            brand={item.brand}
                            price={item.price}
                            clickCarouselItem={clickCarouselItem}
                        />
                    })
                }
            </Carousel>
            <div className="carousel-down-button">
                <button
                    className={value === 0 ? "active" : ""}
                    onClick={() => goTo(0)}
                ></button>
                <button
                    className={value === 1 ? "active" : ""}
                    onClick={() => goTo(1)}
                ></button>
                <button
                    className={value === 2 ? "active" : ""}
                    onClick={() => goTo(2)}
                ></button>
                <button
                    className={value === 3 ? "active" : ""}
                    onClick={() => goTo(3)}
                ></button>
            </div>
        </div>
    );
}

export default BlockCarousel;