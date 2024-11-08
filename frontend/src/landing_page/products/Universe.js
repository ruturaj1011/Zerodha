import React from "react";

function Universe() {
  return (
    <div className="container mt-5 p-5">
      <div className="row text-center">
        <h2 className="head-opacity">The Zerodha Universe</h2>
        <p className="pt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            className="universe-logo"
          />
          <p className="universe-images-info pt-3 px-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-5">
          <img src="media/images/sensibullLogo.svg" className="universe-logo" />
          <p className="universe-images-info pt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 p-5">
          <img
            src="media/images/goldenpiLogo.png"
            className="universe-logo"
          />
          <p className="universe-images-info pt-3 px-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 px-5 pb-5">
          <img src="media/images/streakLogo.png" className="universe-logo" />
          <p className="universe-images-info pt-3 px-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-4 px-5 pb-5">
          <img src="media/images/smallcaseLogo.png" className="universe-logo" />
          <p className="universe-images-info pt-3 px-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 px-5 pb-5">
          <img src="media/images/dittoLogo.png" className="universe-logo" />
          <p className="universe-images-info pt-3 px-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>

        <button className='p-1.5 btn btn-primary fs-5 open-acc-signup-btn mt-1 mb-5'>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
