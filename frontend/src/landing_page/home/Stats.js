import React from 'react';

function Stats() {
    return ( 
        <div className='container pt-5'>

            <div className='row'>

                <div className='col-5'>
                    <h2 className='mb-5 head-opacity'>Trust with confidence</h2>

                    <h4 className='head-opacity'>Customer-first always</h4>
                    <p className='opacity-75 lh-lg fw-medium'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h4 className='stats-head'>No spam or gimmicks</h4>
                    <p className='opacity-75 lh-lg fw-medium'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h4 className='stats-head'>The Zerodha universe</h4>
                    <p className='opacity-75 lh-lg fw-medium'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4 className='stats-head'>Do better with money</h4>
                    <p className='opacity-75 lh-lg fw-medium'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7'>
                    <img className='stats-img' src='media/images/ecosystem.png' />

                    <div className='text-center'>

                        <a href='#' className='stats-link mx-5'>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='#' className='stats-link'>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;