import React from "react";


export default function Card({info}) {
    console.log(info)
    return (
        <div className="card">
            <img src={info.url} alt={info.title}/>
            <h1>{info.title}</h1>
            <div>{info.explanation}</div>
            <p>{info.date}</p>
            <p>{info.copyright}</p>
        </div>
    )
}

