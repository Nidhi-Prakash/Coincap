import React, { useEffect, useState } from 'react';
import "./currencylist.scss";
import { MdArrowDropUp } from "react-icons/md";

//https://assets.coincap.io/assets/icons/<lowercase of currency symbol>@2x.png

const Currencylist = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchcoins = async () => {
            try {
                let url = `https://api.coincap.io/v2/assets?limit=50`;

                let res = await fetch(url);
                let data = await res.json();
                console.log(data.data);
                setCoins(data.data)
            } catch (error) {
                console.log(error);
            }
        };

        fetchcoins();
    }, []);


    return (
        <table className='currency-container'>
            <thead className='thead-container'>

                <tr className='headings'>

                    <div className='fir-sec'>
                        <th className='heading-name' style={{ color: "black", fontWeight: "600" }}>Rank <MdArrowDropUp style={{ color: "black", position: "absolute", top: "3px" }} /> </th>
                        <th className='heading-name'>Name</th>
                    </div>

                    <div className='othername'>
                        <th className='heading-name'>Price</th>
                        <th className='heading-name'>Market Cap</th>
                        <th className='heading-name'>VWAP(24Hr)</th>
                        <th className='heading-name'>Supply</th>
                        <th className='heading-name'>Volume(24Hr)</th>
                        <th className='heading-name'>Change(24Hr)</th>
                    </div>

                </tr>

            </thead>


            <tbody className='tbody-container'>
                {
                    coins.map(({ id, rank, name, priceUsd, supply, marketCapUsd, vwap24Hr, volumeUsd24Hr, changePercent24Hr, symbol }) => (
                        <tr key={id} className="currency-rows">

                            <div className='fir-two-cur'>
                                <td className='cur-items'>{rank}</td>
                                <td className='cur-items'>{name}</td>
                            </div>

                            <div className='other-cur'>
                                <td className='cur-items'>${parseFloat(priceUsd).toFixed(2)}</td>
                                <td className='cur-items'>${parseFloat(Math.floor(marketCapUsd) / 100000000).toFixed(2)}</td>
                                <td className='cur-items'>${parseFloat(vwap24Hr).toFixed(2)}</td>
                                <td className='cur-items'>{parseFloat(Math.floor(supply) / 100000000).toFixed(2)}</td>
                                <td className='cur-items'>${parseFloat(Math.floor(volumeUsd24Hr) / 100000000).toFixed(2)}</td>
                                <td className='cur-items'>{parseFloat(changePercent24Hr).toFixed(2)}%</td>
                            </div>

                        </tr>
                    ))
                }
            </tbody>
        </table>
        
    );
};

export default Currencylist;