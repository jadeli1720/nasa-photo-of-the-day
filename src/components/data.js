import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from './Card';

//
// https://api.nasa.gov/planetary/apod?api_key=cneyY3k8YLbbXoGH4H6xR1Nj410rdjBW96m4wSJy&date=2019-05-14
export default function Data() {
    const [data, setData] = useState([]);
    // const [image, setImage] = useState('Image');
    // const [title, setTitle] = useState('A title');

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2015-03-17`)
            .then(response => {
                setData(response.data);
                // setTitle(response.data.title);
                // setImage(response.data.url[0]);
                console.log('response', response);
            })
            .catch(error => {
                console.log('error', error);
            });
    }, []);
    // console.log(data)
    
    // if (!data) return <h3>Loading...</h3>;
    return (
        <div className="cardBody">
            {/* <Media info={data}/> */}
            <img src={data.url}  alt={data.title}></img>
            <Card info={data}/>
        </div>
    )
}