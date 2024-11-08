import React from "react";
import {Link} from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom p-5 my-5 text-center">
        <h1 className="about-head fs-2 pb-5 head-opacity">
          We pioneered the discount broking model in India.
          <br></br>Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="about-info-box row m-5 p-5 gap-3 info-opacity">
        <div className="col">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
          <Link to="/" className="text-decoration-none">Rainmatter</Link>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
          And yet, we are always up to something new every day. Catch
            up on the latest updates on our  <Link className="text-decoration-none" to="/">blog</Link> or see what the media is <Link className="text-decoration-none" to="/">saying
            about us.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
