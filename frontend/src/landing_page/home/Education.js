import React from 'react';

function Education() {
    return ( 
        
        <div className='container mt-5 mb-5 pt-5'>
            <div className='row'>

                <div className='col-6'>
                    <img className='home-education-img' src='media/images/education.svg' />
                </div>

                <div className='col-6'>

                    <h3 className='mb-4 head-opacity'>Free and open market education</h3>

                    <p className=''>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a className='text-decoration-none'>Varsity &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>

                    <p className='mt-5'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a className='text-decoration-none'>TradingQ&A &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
                    
                </div>
            </div>
        </div>
    );
}

export default Education;