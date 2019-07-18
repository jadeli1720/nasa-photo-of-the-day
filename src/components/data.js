import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from './Card';

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2015-03-17
// https://api.nasa.gov/planetary/apod?api_key=cneyY3k8YLbbXoGH4H6xR1Nj410rdjBW96m4wSJy&date=2019-05-14
export default function Data() {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=cneyY3k8YLbbXoGH4H6xR1Nj410rdjBW96m4wSJy&date=2019-05-14`)
            .then(res => {
                setData(res.data);
                console.log('response', res);
            })
            .catch(error => {
                console.log('error', error);
            });
    }, []);
    // console.log(data)
    
    // if (!data) return <h3>Loading...</h3>;
    return (
        <div className="cardBody">
            <Card info={data}/>
        </div>
    )
}