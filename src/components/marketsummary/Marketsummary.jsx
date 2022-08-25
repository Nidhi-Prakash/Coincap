import React from 'react';
import "./marketsummary.scss";

const Marketsummary = () => {
    return (
        <div className='summary-container'>
            <div className='summary-items'>
                <div className='sitem-name'>
                    <p className='title'>MARKET CAP</p>
                    <p className='amount'>$1.10T</p>
                </div>

                <div className='sitem-name'>
                    <p className='title'>EXCHANGE VOL</p>
                    <p className='amount'>$47.15B</p>
                </div>

                <div className='sitem-name'>
                    <p className='title'>ASSETS</p>
                    <p className='amount'>2295</p>
                </div>

                <div className='sitem-name'>
                    <p className='title'>EXCHANGES</p>
                    <p className='amount'>73</p>
                </div>

                <div className='sitem-name'>
                    <p className='title'>MARKETS</p>
                    <p className='amount'>12785</p>
                </div>

                <div className='sitem-name'>
                    <p className='title'>BTC DOM INDEX</p>
                    <p className='amount'>37.8%</p>
                </div>
            </div>
        </div>
    );
};

export default Marketsummary;