import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login'; // Keep this import
import About from './Components/About';
import Contact from './Components/Contact';
import ProductList from './Components/productList';
import AdminAddProduct from './Components/AdminAddProduct';
import Signup from './Components/Signup';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                
                <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/products">Product List</Link></li>
                        <li><Link to="/admin-add-product">Add Product</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/admin-add-product" element={<AdminAddProduct />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
