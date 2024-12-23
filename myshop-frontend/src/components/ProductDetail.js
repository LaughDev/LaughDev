// src/components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id, slug } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`/api/products/${id}/${slug}/`)
            .then(response => {
                setProduct(response.data);
            });
    }, [id, slug]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
};

export default ProductDetail;
