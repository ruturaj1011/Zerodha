import React from 'react';
import {Link} from "react-router-dom";

function Team() {
    return ( 
        <div className='container'>

            <div className='row text-center pb-5'>
                <h2 className='head-opacity'>People</h2>
            </div>
            
            <div className='row p-5 pt-3'>

                <div className='col-5 text-center'>

                    
                    <img src='media/images/nithinKamath.jpg' className='about-ceo-img rounded-circle'></img>
                    

                    
                    <h5 className='fw-semibold mt-3'>Nithin Kamath</h5>
                    <p className='fs-6 p-3 opacity-75'>Founder, CEO</p>
                    

                </div>
                <div className='col-7 pe-5 ps-3 pt-3 about-ceo-info info-opacity'>

                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>
                    Connect on <Link to="/" className='text-decoration-none'>Homepage</Link> / <Link to="/" className='text-decoration-none'>TradingQnA</Link> / <Link to="/" className='text-decoration-none'>Twitter</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;