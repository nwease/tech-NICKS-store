import React from 'react';
import Title from '../Title';
import CartPillar from './CartPillar';
import CartList from './CartList';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

const CartPage = () => {
    return (
        <section className='py-5'>
            <div className='container'>
                <Title title='Items in Your Cart' center />
            </div>
            <CartPillar/>
            <CartList/>
            <CartItem/>
            <CartTotal/>
        </section>
    );
};

export default CartPage;
