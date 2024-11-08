import React from 'react';
import { Link } from 'react-router-dom';

import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function PRoductsPage() {
    return ( 
        <>
            <Hero />

            <LeftSection 
                imgURL="media/images/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo="/"
                learnMore="/"
                playStore="/"
                appStore="/"
            />

            <RightSection 
                imgURL="media/images/console.png"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore="/"
            />

            <LeftSection 
                imgURL="media/images/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                coin="/"
                playStore="/"
                appStore="/"
            />

            <RightSection 
                imgURL="media/images/kiteconnect.png"
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore="/"
            />

            <LeftSection 
                imgURL="media/images/varsity.png"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                playStore="/"
                appStore="/"
            />

            <p className='fs-5 text-center'>Want to know more about our technology stack? Check out the <Link to="/" className="text-decoration-none" >Zerodha.tech</Link> blog.</p>

            <Universe />
        </>
     );
}

export default PRoductsPage;