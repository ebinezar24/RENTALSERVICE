import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Productlist.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
    }, []);

return(
        <div className="product-list">
            <h2 className="product-list-title">Available Rental Properties</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id} className="product-card">
                    <img src={product.imageUrl} alt={product.name} className="product-image"/>
                    <div className="product-details">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
