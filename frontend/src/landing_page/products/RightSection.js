import React from 'react';

function RightSection(
    {
        imgURL,
        productName,
        productDescription,
        learnMore
    }) {
    return ( 
        <div className="container">

            <div className="row">

                <div className="col-4 my-5 py-4 pe-5 head-opacity">
                    
                    <h2 className="pb-3">{productName}</h2>

                    <p className="product-description">{productDescription}</p>

                    <a href="{learnMore}" className="text-decoration-none fw-semibold">Learn More <i class="fa-solid fa-arrow-right-long fa-sm"></i></a>

                </div>
                <div className='col-1'></div>
                <div className="col-7 px-5">
                    <img src={imgURL} alt="product-img" className='w-100' />
                </div>
            </div>
        </div>
     );
}

export default RightSection;