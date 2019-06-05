import React from 'react';
import ProductsPage from '../components/Products/ProductsPage';
import productsBcg from '../images/productsBcg.jpeg';
import Hero from '../components/Hero';

const Products = () => {
    return (
        <React.Fragment>
            <Hero img={productsBcg} />
            <ProductsPage />
        </React.Fragment>
    );
};

export default Products;