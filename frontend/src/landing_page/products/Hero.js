import React from 'react';

function Hero() {
    return (
        <>
            <div className='container'>
                <div className='row text-center mt-5 border-bottom'>
                    <h1 className='p-2'>Technology</h1>
                    <h3 className='text-muted p-2'>Sleek,modern nd intuitive trading platforms</h3>
                    <p className='text-muted p-2 mb-5 '>Check out our <a href='#'  style={{textDecoration:'none'}}>investment offerings<i class="fa-solid fa-magnifying-glass-arrow-right"></i></a></p>
                </div>
            </div>
        </>
    );
}

export default Hero;
