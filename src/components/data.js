import React, { useEffect, useState } from "react";
import axios from "axios";

// https://api.nasa.gov/planetary/apod
export default function AxiosData() {
    const [file, setFile] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod`)
            .then(response => {
                const images = response.data;
                console.log("nasa api", images);
                setFile(images);
            });
    }, []);

}