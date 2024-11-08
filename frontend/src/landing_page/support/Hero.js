import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid supportHero text-white'>

            <div className='d-flex justify-content-between p-5 mx-5 '>
                <h4 className='ps-2 fw-semibold'>Support Portal</h4>
                <p className=""><a href='#' className='text-white text-decoration-none supp-right-head'>Track tickets</a></p>
            </div>

            <div className='row px-5 pb-5 mx-5'>

                <div className='col-7 pb-5'>

                    <h4 className='pb-3 fw-normal'>
                    Search for an answer or browse help topics to create a ticket
                    </h4>

                    <div className='mt-3 d-flex supp-hero-inp-box'>
                        <input type="text" placeholder='
                            Eg: how do i activate F&O, why is my order getting rejected ...
                        ' className='supp-hero-search p-3'></input>
                        <i class="fa-solid fa-magnifying-glass fs-5 bg-white  p-3 text-center" style={{color: "#255255"}}></i>
                    </div>

                    <div className='d-flex flex-wrap supp-hero-links'>
                        <a href="#"  className=' text-decoration-none text-white me-3 mt-3'>Track account opening</a>
                        <a href="#" className='text-decoration-none text-white me-3 mt-3'>Track segment activation</a>
                        <a href="#" className='text-decoration-none text-white me-3 mt-3'>Intraday margins</a>
                        <a href="#" className='text-decoration-none text-white me-3 mt-3'>Kite user manual</a>
                    </div>
                </div>
                <div className='col-5 supp-featured py-5 ps-5'>

                    <h4>Featured</h4>

                    <ol>
                        <li>
                            <a href='#' className='text-white supp-left-links'>Suspension of trading - IDFC Limited</a>
                        </li>
                        <li>
                            <a href='#'  className='text-white supp-left-links'> Rights Entitlements listing in October 2024</a>
                        </li>
                    </ol>
                </div>
            </div>

        </section>
     );
}

export default Hero;