import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Countries/Countries';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;