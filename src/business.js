import React from 'react';

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipcode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

function Business() {
    return (    
        <div>
            <image src={business.image} />
            <h1>{business.imageSrc}</h1>
                <p>{business.address}</p>
                <p>{business.city}, {business.state}</p>
                <p>{business.zipcode}</p>
                <p>{business.rating}</p>
                <p>{business.reviewCount}</p>
        </div>
    );
    };

export default Business;