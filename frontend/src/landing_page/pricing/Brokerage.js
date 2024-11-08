import React from 'react';

function Brokerage() {
    return ( 
        <div className='container border-top p-5 m-5 info-opacity'>

            <div className='row'>

                <div className='col-8 p-3'>

                    <h4 className='text-center fs-5 py-3'><a className='text-decoration-none' href="/" >Brokerage Calculator </a> </h4>

                    <ul className='pricing-brok-ul info-opacity'>

                        <li>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order.</li>

                        <li>Digital contract notes will be sent via e-mail. </li>

                        <li>Physical copies of contarct notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>

                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>

                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>

                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed instead of ₹20 per executed order</li>
                    </ul>

                </div>

                <div className='col-4 p-3'>

                    <h4 className='fs-5 py-3'><a className='text-decoration-none' href="/"> List of charges </a> </h4>
                </div>

            </div>
        </div>
     );
}

export default Brokerage;