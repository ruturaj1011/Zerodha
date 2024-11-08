import React from 'react';
import {Link} from 'react-router-dom';

function CreateTicket() {
    return ( 
        
        <div className='container p-5 mb-5'>

            <h3 className='head-opacity'>To create a ticket, select a relevant topic</h3>

            <div className='row pt-5'>

                <div className='col-4'>

                    <h4 className="fw-normal support-ul-head"><Link className="  text-decoration-none" to='/'><i class="fa-solid fa-circle-plus pe-2"></i>Account Opening</Link></h4>

                    <ul className='info-opacity support-ul'>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Getting started</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Online</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Offline</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Charges</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Company, Partnership and HUF</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Non Resident Indian (NRI)</Link></li>

                    </ul>
                        
                </div>

                <div className='col-4'>

                    <h4 className="fw-normal support-ul-head"><Link className="  text-decoration-none" to='/'><i class="fa-regular fa-user pe-2"></i>Your Zerodha Account</Link></h4>

                    <ul className='info-opacity support-ul'>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Login credentials</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Your Profile</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Account modification and segment addition</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>CMR & DP ID</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Nomination
                        </Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Transfer and conversion of shares</Link></li>

                    </ul>
                </div>

                <div className='col-4'>

                    <h4 className="fw-normal support-ul-head"><Link className="  text-decoration-none" to='/'><i class="fa-solid fa-chart-simple pe-2"></i>Trading and Markets</Link></h4>

                    <ul className='info-opacity support-ul'>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Trading FAQs</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Kite</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Margins</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Product and order types</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Corporate actions</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Kite features</Link></li>

                    </ul>
                </div>

            </div>

            <div className='row pt-5'>

                <div className='col-4'>

                    <h4 className="fw-normal support-ul-head"><Link className="  text-decoration-none" to='/'><i class="fa-solid fa-wallet pe-2"></i>Funds</Link></h4>

                    <ul className='info-opacity support-ul'>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Fund withdrawal</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Adding funds</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Adding bank accounts</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>eMandates</Link></li>

                    </ul>
                        
                </div>

                <div className='col-4'>

                    <h4 className="fw-normal support-ul-head"><Link className="  text-decoration-none" to='/'><i class="fa-solid fa-circle-notch pe-2"></i>Console</Link></h4>

                    <ul className='info-opacity support-ul'>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>IPO</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Portfolio</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Funds statement</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Profile</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Reports
                        </Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Referral program</Link></li>

                    </ul>
                </div>

                <div className='col-4'>

                    <h4 className="fw-normal support-ul-head"><Link className="  text-decoration-none" to='/'><i class="fa-solid fa-circle-dollar-to-slot pe-2"></i>Coin</Link></h4>

                    <ul className='info-opacity support-ul'>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Understanding mutual funds and Coin</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Coin app</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Coin web</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>Transactions and reports</Link></li>

                        <li className='py-1 '><Link herf="/" className='text-decoration-none support-ticket-list-item'>National Pension Scheme (NPS)</Link></li>

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;