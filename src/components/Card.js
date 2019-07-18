import React from "react";


export default function Card({info}) {
    return (
        <div className="card">
            <h1>{info.title}</h1>
            <div>{info.explanation}</div>
            <p>{info.date}</p>
            <p>{info.copyright}</p>
        </div>
    )
}

