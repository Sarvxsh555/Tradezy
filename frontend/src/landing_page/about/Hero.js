import React from 'react';

function Hero() {
    return (
        <section className="container">
            <div className="row text-center mt-5 mb-5">
                <div className="col">
                    <h1 className="fs-2 fw-normal">
                        We pioneered the discount broking model in India.
                        <br />
                        Now, we are breaking ground with our technology.
                    </h1>
                </div>
            </div>

            <div className="border-top mb-5"></div>

            <div className="row mb-5">
                <div className="col-lg-5 col-md-6 offset-lg-1 mb-4">
                    <p className="text-muted fs-5 lh-lg">
                        We kick-started operations on the 15th of August, 2010 with
                        the goal of breaking all barriers that traders and investors
                        face in India in terms of cost, support, and technology. We
                        named the company Zerodha, a combination of Zero and
                        "Rodha", the Sanskrit word for barrier.
                    </p>

                    <p className="text-muted fs-5 lh-lg">
                        Today, our disruptive pricing models and in-house technology
                        have made us the biggest stock broker in India.
                    </p>

                    <p className="text-muted fs-5 lh-lg">
                        Over 1+ Crore clients place millions of orders every day
                        through our powerful ecosystem of investment platforms,
                        contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>

                <div className="col-lg-5 col-md-6 offset-lg-1 mb-4">
                    <p className="text-muted fs-5 lh-lg">
                        In addition, we run a number of popular open online
                        educational and community initiatives to empower retail
                        traders and investors.
                    </p>

                    <p className="text-muted fs-5 lh-lg">
                        <a href="/" className="text-decoration-none">
                            Rainmatter
                        </a>
                        , our fintech fund and incubator, has invested in several
                        fintech startups with the goal of growing the Indian capital
                        markets.
                    </p>

                    <p className="text-muted fs-5 lh-lg">
                        And yet, we are always up to something new every day. Catch
                        up on the latest updates on our blog or see what the media
                        is saying about us.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
