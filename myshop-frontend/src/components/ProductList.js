// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products/')
            .then(response => {
                setProducts(response.data);
            });
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product.id} className="card">
                    <Link to={`/product/${product.id}/${product.slug}`}>
                        <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
