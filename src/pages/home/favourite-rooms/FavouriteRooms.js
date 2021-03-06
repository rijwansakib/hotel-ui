import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Slider from "react-slick";
import Room from '../room/Room';
import './FavouriteRooms.css';

const FavouriteRooms = () => {
    const [rooms, setRooms] = useState(null);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/rooms/room-list`;
        // const url = `http://localhost:5000/api/rooms/room-list`;


        fetch(url)
            .then(res => res.json())
            .then(json => setRooms(json.data))

    }, [])
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            {
                rooms
                    ?
                    <div>
                        <h2 className='text-center mb-5'>OUR FAVOURITE ROOMS</h2>
                        <Slider {...settings} className='favourite__room__container'>
                            {
                                rooms.map(room => <Room room={room}></Room>)
                            }
                        </Slider>
                    </div>
                    :
                    <Spinner animation="border" variant="primary" />
            }
        </div>
    );
};

export default FavouriteRooms;