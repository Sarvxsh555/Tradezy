import React from 'react';

function RightSection({imgURL, productName, productDesc, learnMore}) {
    return (
        <>
        <div className="container mt-5 mb-5 pt-5 pb-5">
        <div className="row align-items-center">
          
          <div className="col-lg-5 col-md-6 offset-lg-1">
            <h1 className="fw-normal mb-4">{productName}</h1>
            <p className="text-muted fs-5 lh-base mb-4">
              {productDesc}
            </p>

            <div className="mb-4">
              <a href={learnMore} className="text-decoration-none fs-5">
                Learn More <i className="fa-solid fa-arrow-right-long ms-1"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text-center mb-5 mb-md-0">
            <img
              src={imgURL}
              alt={productName}
              className="img-fluid"
              style={{ maxWidth: "85%" }}
            />
          </div>
        </div>
      </div>
        </>
    );
}

export default RightSection;
