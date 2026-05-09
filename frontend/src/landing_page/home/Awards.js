import React from 'react';

function Awards() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-3'>
                    <img src='media/images/largestBroker.svg' alt=''></img>
                </div>
                <div className='col-6'>
                <h1>Largest stock broker in India</h1>
                <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                
                <div className='row'>
                    <div className='col p-5'>
                        <ul>
                            <li className='mb-3'>Futures and Options</li>
                            <li className='mb-3'>Commodity derivatives</li>
                            <li className='mb-3'>Currency derivatives</li>
                        </ul>
                    </div>
                    <div className='col p-5'>
                        <ul >
                            <li className='mb-3'>Stocks & IPOs</li>
                            <li className='mb-3'>Direct mutual funds</li>
                            <li className='mb-3'>Bonds and Government securities</li>
                        </ul>
                    </div>
                    <img src='media/images/pressLogos.png' alt='pressLogo' style={{width:'90%'}}></img>
                </div>
                
                </div>
            </div>
        </div>
    );
}

export default Awards;
