import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./Image";
import Card from './Card';

//
// https://api.nasa.gov/planetary/apod/&date=2012-03-14
export default function Data() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('A title');

    
    // const [img, imgFile] = useState();
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=cneyY3k8YLbbXoGH4H6xR1Nj410rdjBW96m4wSJy&date=2019-03-14`)
            .then(response => {
                setData(response.data)
                setTitle(response.data.title)
                console.log('response', response);
            })
            .catch(error => {
                console.log('error', error);
            });
    }, []);
    console.log(data)
    return (
        <div>
            <Card title ={title}/>
             <img src={data.url} alt="nasa of the day"></img>
            <div>{data.explanation}</div>
            <div>{data.date}</div>
            <div>{data.copyright}</div>
        </div>
    )

}