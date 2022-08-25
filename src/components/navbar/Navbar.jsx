import React from 'react';
import "./navbar.scss";
import { FaSearch } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-items'>
                    <div className='nc-leftpart'>
                        <a className='item-name'>Coins</a>
                        <a className='item-name'>Exchanges</a>
                        <a className='item-name'>Swap</a>
                    </div>

                    <div className='nc-logo'>
                        <img src="https://coincap.io/static/logos/black.svg" alt="Coincap" />
                    </div>

                    <div className='nc-rightpart'>
                        <FaSearch />
                        <MdSettings style={{height: "20px", width: "20px"}} />
                        <button className='cw-btn'>Connect Wallet</button>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;