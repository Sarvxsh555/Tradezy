import React from 'react';

function Team() {
    return (
        <section className="container mb-5">
            <div className="border-top mb-5"></div>

            <div className="row text-center mb-5">
                <div className="col">
                    <h2 className="fw-normal">People</h2>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6 offset-lg-1 text-center mb-5">
                    <img
                        src="media/images/sarvesh-hq.jpg"
                        alt="Sarvesh arun"
                        className="rounded-circle mb-4"
                        style={{ width: "65%", maxWidth: "320px" }}
                    />
                    <h4 className="fw-normal">Sarvesh Arun</h4>
                    <p className="text-muted fs-5">Founder, CEO</p>
                </div>

                <div className="col-lg-5 col-md-6 mb-5">
                    <p className="text-muted fs-5 lh-lg">
                        Sarvesh bootstrapped and founded Tradezy in 2026 to overcome
                        the hurdles he faced during his decade long stint as a trader.
                        Today, Zerodha has changed the landscape of the Indian broking
                        industry.
                    </p>

                    <p className="text-muted fs-5 lh-lg">
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>

                    <p className="text-muted fs-5 lh-lg">
                        Playing basketball is his zen.
                    </p>

                    <p className="text-muted fs-5 lh-lg">
                        Connect on{" "}
                        <a href="/" className="text-decoration-none">Homepage</a>
                        {" / "}
                        <a href="/" className="text-decoration-none">TradingQnA</a>
                        {" / "}
                        <a href="/" className="text-decoration-none">Twitter</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Team;
