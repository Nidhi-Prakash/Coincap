import React, { useEffect, useState } from 'react';
import "./currencylist.scss";
import { MdArrowDropUp } from "react-icons/md";


const Currencylist = () => {

    const [coins, setCoins] = useState([]);
    const [limit, setLimit] = useState(50);

    useEffect(() => {
        const fetchcoins = async () => {
            try {
                let url = `https://api.coincap.io/v2/assets?limit=${limit}`;
                let res = await fetch(url);
                let data = await res.json();
                setCoins(data.data)
            } catch (error) {
                console.log(error);
            }
        };

        fetchcoins();

    }, [limit])

    const readableNumber = (number) => {
        let s = "";
        let arr: String[] = number.split(".");
        if (arr[0].length >= 9) {
            s = "b";
            arr[0] = arr[0].slice(0, arr[0].length - 9) + "." + arr[0].slice(arr[0].length - 9)
        } else if (arr[0].length >= 6) {
            s = "m";
            arr[0] = arr[0].slice(0, arr[0].length - 6) + "." + arr[0].slice(arr[0].length - 6)
        }
        console.log();
        return parseFloat(arr[0] + arr[1]).toFixed(2) + s
    };
    


    return (
        <>
            <div className="currency-table-container">
                <table className='currency-table'>
                    <tr>
                        <th style={{ color: "black", fontWeight: "600" }}>Rank <MdArrowDropUp style={{ color: "black", position: "relative", top: "3px" }} /> </th>
                        <th >Name</th>
                        <th >Price</th>
                        <th >Market Cap</th>
                        <th >VWAP(24Hr)</th>
                        <th >Supply</th>
                        <th >Volume(24Hr)</th>
                        <th >Change(24Hr)</th>
                    </tr>
                    {
                        coins.map(({ id, rank, name, priceUsd, supply, marketCapUsd, vwap24Hr, volumeUsd24Hr, changePercent24Hr, symbol }) => (
                            <tr key={id} className="headings">

                                <td >{rank}</td>
                                <td >{name} </td>
                                <td >${parseFloat(priceUsd).toFixed(2)}</td>
                                <td >${readableNumber(marketCapUsd)}</td>
                                <td >${parseFloat(vwap24Hr).toFixed(2)}</td>
                                <td >{readableNumber(supply)}</td>
                                <td >${readableNumber(volumeUsd24Hr)}</td>
                                <td >{parseFloat(changePercent24Hr).toFixed(2)}%</td>

                            </tr>
                        ))
                    }
                </table>
            </div>

            <button className='vm-btn' onClick={() => setLimit(limit + 50)}>View More</button>
        </>



    );
};

export default Currencylist;