import React from 'react';

function Brokerage() {
    return (
        <div className="container mb-5 border-top   3">
            <div className="row mb-5">
                <div className="col-6 text-center">
                    <a href="/" style={{ textDecoration: "none" }}>
                        <h3>Brokerage calculator</h3>
                    </a>
                </div>
                <div className="col-6 text-center">
                    <a href="/" style={{ textDecoration: "none" }}>
                        <h3>List of charges</h3>
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <ul className="text-muted fs-6">
                        <li className="mb-4">Call &amp; Trade and RMS auto-squareoff: Additional charges of Rs. 50 + GST per order.</li>
                        <li className="mb-4">Digital contract notes will be sent via e-mail.</li>
                        <li className="mb-4">Physical copies of contract notes, if required, shall be charged Rs. 20 per contract note. Courier charges apply.</li>
                        <li className="mb-4">For NRI account (non-PIS), 0.5% or Rs. 100 per executed order for equity (whichever is lower).</li>
                        <li className="mb-4">For NRI account (PIS), 0.5% or Rs. 200 per executed order for equity (whichever is lower).</li>
                        <li className="mb-4">If the account is in debit balance, any order placed will be charged Rs. 40 per executed order instead of Rs. 20 per executed order.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
