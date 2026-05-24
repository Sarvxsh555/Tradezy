import React from "react";

function LeftSection({imgURL, productName, productDesc, tryDemo, learnMore, googlePlay, appStore}) {
  return (
    <>
      <div className="container mt-5 mb-5 pt-5 pb-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 text-center mb-5 mb-md-0">
            <img
              src={imgURL}
              alt={productName}
              className="img-fluid"
              style={{ maxWidth: "85%" }}
            />
          </div>
          <div className="col-lg-5 col-md-6 offset-lg-1">
            <h1 className="fw-normal mb-4">{productName}</h1>
            <p className="text-muted fs-5 lh-base mb-4">
              {productDesc}
            </p>

            <div className="mb-4">
              <a href={tryDemo} className="text-decoration-none me-5 fs-5">
                Try demo <i className="fa-solid fa-arrow-right-long ms-1"></i>
              </a>
              <a href={learnMore} className="text-decoration-none fs-5">
                Learn More <i className="fa-solid fa-arrow-right-long ms-1"></i>
              </a>
            </div>

            <div className="d-flex gap-4 align-items-center flex-wrap">
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Get it on Google Play"
                  style={{ width: "180px" }}
                />
              </a>
              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="Download on the App Store"
                  style={{ width: "165px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
