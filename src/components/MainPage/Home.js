import React from 'react';
import './Home.css';
import CarouselVehicle from '../../pages/Carousel/Carousel'
import SearchTrip from '../Search/SearchTrip';

export default function Home() {
    return (
        <main className='container'>
            <CarouselVehicle></CarouselVehicle>
            <SearchTrip></SearchTrip>
        </main>
    )
}
