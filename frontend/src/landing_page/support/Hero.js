import React from "react";

function Hero() {
  return (
    <>
      <div className="container-fluid py-5" id="supportHero">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-6">
              <h3 className="fs-4 mb-0">Support Portal</h3>
            </div>
            <div className="col-6 text-end">
              <a href="/support" className="support-link">
                Track Tickets
              </a>
            </div>
          </div>

          <div className="row align-items-start gy-4">
            <div className="col-lg-6">
              <h1 className="support-title">
                Search for an answer or browse help topics to create a ticket
              </h1>
              <div className="support-search mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg. how do I activate F&O?"
                  aria-label="Search support topics"
                />
                <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
              </div>
              <div className="support-quick-links mt-3">
                <a href="/support">Track account opening</a>
                <a href="/support">Track segment activation</a>
                <a href="/support">Intraday margins</a>
                <a href="/support">Kite user manual</a>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <h2 className="fs-3 mb-3">Featured</h2>
              <ol className="support-featured ps-4">
                <li>
                  <a href="/support">
                    Current Takeovers and Delisting - January 2024
                  </a>
                </li>
                <li>
                  <a href="/support">Latest Intraday leverages - MIS & CO</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
