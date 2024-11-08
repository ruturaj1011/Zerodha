import React from 'react';

function Hero() {
    return ( 
        
        <div className='container p-5'>

            <div className='row text-center border-bottom'>
                <h1 className='head-opacity'>Pricing</h1>
                <p className='mt-3 mb-5 fs-5'>Free equity investment and flat ₹20 intraday and F&O trades</p>
            </div>

            <div className='row head-opacity pt-5 mt-5 text-center'  >

                <div className='col-4 pt-5'>
                    <img className="pricing-hero-icons" src='media/images/pricing0.svg' />

                    <div className='mt-2'>
                        <h3>Free equity delivery</h3>
                        <p className='pricing-hero-p pt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                </div>

                <div className='col-4 pt-5'>
                    <img className="pricing-hero-icons" src='media/images/intradayTrades.svg' />

                    <div className='mt-2'>
                        <h3>Intraday and F&O trades</h3>
                        <p className='pricing-hero-p pt-3'>Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                </div>

                <div className='col-4 pt-5'>
                    <img className="pricing-hero-icons" src='media/images/pricingMF.svg' />

                    <div className='mt-2'>
                        <h3>Free direct MF</h3> 
                        <p className='pricing-hero-p pt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;