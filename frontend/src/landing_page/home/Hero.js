import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>

            <div className='row text-center'>
                
                <img src='media/images/homeHero.png' className='mb-5 home-hero-img' alt='Hero Img' />

                <h1 className='head-opacity'>Invest in everything</h1>
                <p className='fs-4 info-opacity'>Online platform to invest is stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

                <button className='p-1.5 mt-3 btn btn-primary fs-5 home-hero-signup'>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;