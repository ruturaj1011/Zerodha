import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        
        <div className='container'>

            <div className='row text-center border-bottom mt-5 py-5'>

                <h1 className='products-hero-head head-opacity'>Technology</h1>

                <h5 className="pt-2 products-hero-info head-opacity">Sleek, modern, and intuitive trading platforms</h5>

                <p className='mb-5 p-3'>Check out our <Link to="/" className='text-decoration-none'>investment offerings →</Link></p>
            </div>
        </div>
    );
}

export default Hero;