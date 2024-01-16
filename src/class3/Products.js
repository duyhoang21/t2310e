import React, {useEffect, useState} from "react";
import axios from "axios";
import Product from "./Product";

const Products = () => {
    //member products to store all Products from JSON file
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Use axios or fetch to get the data from your JSON file
        axios.get('./products.json')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products', error));
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            {products.map(product => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
};

export default Products;