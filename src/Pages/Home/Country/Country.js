import React from 'react';

const Country = ({ country }) => {
    const { name, img, fee } = country;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img className="w-100" src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger mb-5">Visa Processing Fee: {fee}</h5>
        </div>
    );
};

export default Country;