import React from 'react';
import Title from '../Title';
import CartPillar from './CartPillar';
import CartList from './CartList';
import CartTotal from './CartTotal';

const CartPage = () => {
    return (
        <div>
            <CartPillar/>
            <CartList/>
            <CartTotal/>
        </div>
    );
};

export default CartPage;
