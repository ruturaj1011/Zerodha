import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5 pb-5 pt-5'>
            <div className='row'>

                <div className='col-5'>
                    <h2 className='mb-4 head-opacity'>Unbeatable pricing</h2>
                    <p>
                        We pioneered the concept of discount broking and price transparency in india. Flat fees and no hidden charges.
                    </p>
                    <a className='text-decoration-none'>See pricing &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>

                <div className='col-2'></div>

                <div className='col-5'>
                    <div className='row text-center'>

                        <div className='col border p-3'>
                            <h2 className='pb-3'><i class="fa-solid fa-indian-rupee-sign fa-sm"></i>0</h2>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col border p-3'>
                            <h2 className='pb-3'><i class="fa-solid fa-indian-rupee-sign fa-sm"></i>20</h2>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;