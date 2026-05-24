import React from 'react';

function Universe() {
    return (
        <section className="container text-center mt-5 mb-5 pt-5 pb-5">
            <h1 className="fw-normal mb-4">The Zerodha Universe</h1>
            <p className="text-muted fs-5 mb-5">
                Extend your trading and investment experience even further with our partner platforms
            </p>

            <div className="row gy-5 mb-5">
                <div className="col-4 p-3">
                    <img src="media/images/smallcaseLogo.png" alt="smallcase" className="img-fluid mb-3" style={{ maxWidth: "240px" }} />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>

                <div className="col-4 p-3">
                    <img src="media/images/streakLogo.png" alt="Streak" className="img-fluid mb-3" style={{ maxWidth: "240px" }} />
                    <p className="text-small text-muted">Algo & strategy platform</p>
                </div>

                <div className="col-4 p-3">
                    <img src="media/images/sensibullLogo.svg" alt="Sensibull" className="img-fluid mb-3" style={{ maxWidth: "240px" }} />
                    <p className="text-small text-muted">Options trading platform</p>
                </div>

                <div className="col-4 p-3">
                    <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund House" className="img-fluid mb-3" style={{ maxWidth: "240px" }} />
                    <p className="text-small text-muted">Asset management</p>
                </div>

                <div className="col-4 p-3">
                    <img src="media/images/goldenpiLogo.png" alt="GoldenPi" className="img-fluid mb-3" style={{ maxWidth: "240px" }} />
                    <p className="text-small text-muted">Bonds trading platform</p>
                </div>

                <div className="col-4 p-3">
                    <img src="media/images/dittoLogo.png" alt="Ditto" className="img-fluid mb-3" style={{ maxWidth: "240px" }} />
                    <p className="text-small text-muted">Insurance</p>
                </div>
            </div>

            <button className="btn btn-primary px-5 py-2 fs-5">
                Sign up now
            </button>
        </section>
    );
}

export default Universe;
