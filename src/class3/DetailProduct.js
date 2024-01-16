// Product.js
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
    const { id } = useParams();

    const [data, setData] = useState([]);

    // Fetch product details based on id or use the passed data

    // Use axios or fetch to get the data from your JSON file
    axios.get('../products.json')
        .then(response => setData(response.data.find((d) => d.id == id)  ))
        .catch(error => console.error('Error fetching products', error));

    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <h5 className="card-title">${data.price}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );

};

export default DetailProduct;
