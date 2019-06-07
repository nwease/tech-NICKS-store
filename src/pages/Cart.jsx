import React from 'react';
import Hero from '../components/Hero';
import storeBcg from '../images/storeBcg.jpeg';
import CartPage from '../components/CartSection';

const Cart = () => {
    return (
        <React.Fragment>
            <Hero img={storeBcg} />
            <CartPage />
        </React.Fragment>
    );
};

export default Cart;