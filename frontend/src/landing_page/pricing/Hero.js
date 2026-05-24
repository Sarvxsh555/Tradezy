import React from 'react';

function Hero() {
    return (
        <section className="container">
            <div className="row text-center mt-5 mb-5 border-bottom">
                <div className="col">
                    <h1 className="p-2">Pricing</h1>
                    <h3 className="text-muted p-2 mb-5">
                        Free equity investments and flat Rs. 20 intraday and F&amp;O trades
                    </h3>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-4 p-4">
                    <img src="media/images/pricing0.svg" alt="Zero brokerage" />
                    <h3 className="p-3">Free equity delivery</h3>
                    <p className="text-muted">
                        All equity delivery investments (NSE, BSE), are absolutely free - Rs. 0 brokerage.
                    </p>
                </div>

                <div className="col-4 p-4">
                    <img src="media/images/intradayTrades.svg" alt="Rs. 20 intraday trades" />
                    <h3 className="p-3">Intraday and F&amp;O trades</h3>
                    <p className="text-muted">
                        Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
                    </p>
                </div>

                <div className="col-4 p-4">
                    <img src="media/images/pricingMF.svg" alt="Zero mutual fund commission" />
                    <h3 className="p-3">Free direct MF</h3>
                    <p className="text-muted">
                        All direct mutual fund investments are absolutely free - Rs. 0 commissions and DP charges.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
