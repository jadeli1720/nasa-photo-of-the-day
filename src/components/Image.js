import React from "react";

export default function Image({ imgUrl }) {
    return (
        <div className="image">
            this is an image
            <img src={imgUrl} style = {{maxWidth: '200px'}} />
        </div>
    );
}