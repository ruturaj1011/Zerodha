import React from "react";

function LeftSection({
    imgURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    coin,
    playStore,
    appStore,
    }) {

    return (

        <div className="container p-5 m-5">

            <div className="row">

                <div className="col-8">
                    <img src={imgURL} alt="product-img" />
                </div>

                <div className="col-4 py-5 head-opacity">

                    <h2 className="pb-3">{productName}</h2>
                    <p className="product-description">{productDescription}</p>

                    
                    {(!coin) && (tryDemo) ? <div>
                        <a href="{tryDemo}" className="text-decoration-none pe-5 fw-semibold">Try Demo <i class="fa-solid fa-arrow-right-long fa-sm"></i></a>

                        <a href="{learnMore}" className="text-decoration-none ps-3 fw-semibold" >Learn More <i class="fa-solid fa-arrow-right-long fa-sm"></i></a>

                        <br />
                        </div> : "" 
                    }
                    {(!tryDemo) && (coin) ? 
                        <div>
                            <br/>
                            <a href="{coin}" className="text-decoration-none pe-5 fw-semibold">Coin <i class="fa-solid fa-arrow-right-long fa-sm"></i></a>
                        </div> : ""
                    }
                    
                    <a href="{playStore}" >
                        <img src="media/images/googlePlayBadge.svg" className="mt-4 me-3 store-svg" alt="PlayStore" />
                    </a>
                    
                    <a href="{appStore}" className="mt-3">
                        <img src="media/images/appstoreBadge.svg" className="mt-4 store-svg"  alt="appstroe" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
