import React from "react";

export default function Media ({info}) {
    return (
        <div className="media">
            <img src={info.url} alt={info.title} />
        </div>
    )
}