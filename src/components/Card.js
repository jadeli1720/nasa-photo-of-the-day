import React from "react";


export default function Card(info) {
    console.log(info);
    return (
        <div className="card">
            <img src={info.url} />
            <h1>{info.title}</h1>
            <p>{info.explanation}</p>
            <p>{info.date}</p>
            <p>{info.copyright}</p>
        </div>
    )
}

