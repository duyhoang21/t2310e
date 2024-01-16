// Product.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({ id, name, price }) => (

    <div className="card">
        <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title">${price}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href={`products/${id}`} className="btn btn-primary">Show detail</a>
            </div>
    </div>
);

export default Product;
