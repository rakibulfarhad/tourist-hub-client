import React from 'react';

import country1 from '../../../images/country/country1.jpg'
import country2 from '../../../images/country/country2.jpg'
import country3 from '../../../images/country/country3.jpg'
import country4 from '../../../images/country/country4.jpg'
import country5 from '../../../images/country/country5.jpg'
import country6 from '../../../images/country/country6.jpg'
import country7 from '../../../images/country/country7.jpg'
import country8 from '../../../images/country/country8.jpg'
import country9 from '../../../images/country/country9.jpg'
import country10 from '../../../images/country/country10.jpg'
import country11 from '../../../images/country/country11.jpg'
import country12 from '../../../images/country/country12.jpg'
import country13 from '../../../images/country/country13.jpg'

import Country from '../Country/Country';

const countries = [
    {
        img:country1,
        name: 'Australia Visa',
        fee: '$ 49'
    },
    {
        img:country2,
        name: 'Austria Visa',
        fee: '$ 49'
    },
    {
        img:country3,
        name: 'Belgium Visa',
        fee: '$ 49'
    },
    {
        img:country4,
        name: 'Combodia Visa',
        fee: '$ 36'
    },
    {
        img:country5,
        name: 'China Visa',
        fee: '$ 69'
    },
    {
        img:country6,
        name: 'Dubai Visa',
        fee: '$ 79'
    },
    {
        img:country7,
        name: 'Egypt Visa',
        fee: '$ 39'
    },
    {
        img:country8,
        name: 'Estonia Visa',
        fee: '$ 49'
    },
    {
        img:country9,
        name: 'findland Visa',
        fee: '$ 49'
    },
    {
        img:country10,
        name: 'France Visa',
        fee: '$ 49'
    },
    {
        img:country11,
        name: 'Germany Visa',
        fee: '$ 49'
    },
    {
        img:country12,
        name: 'Greece Visa',
        fee: '$ 49'
    },
    {
        img:country13,
        name: 'Latbia Visa',
        fee: '$ 49'
    },
    
]

const Countries = () => {
    return (
        <div id="visaServices" className="container">
            <h2 className="text-primary my-5">Visa Services</h2>
            <div className="row">
                {
                    countries.map(country => <Country
                        key={country.name}
                        country={country}
                    >

                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;