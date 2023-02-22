import React from 'react';
import './Home.css';
import CarouselVehicle from '../../pages/Carousel/Carousel'
import SearchTrip from '../Search/SearchTrip';
import Content from './Content';
import SpecialTrip from '../TripList/SpecialTrip';

export default function Home() {
    return (
        <main className='container-fluid p-0'>
            <CarouselVehicle></CarouselVehicle>
            <SearchTrip></SearchTrip>
            <SpecialTrip></SpecialTrip>
            <Content></Content>
        </main>
    )
}
