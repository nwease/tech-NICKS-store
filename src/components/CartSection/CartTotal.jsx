import React from 'react';
import { ProductConsumer } from '../../context';

const CartTotal = () => {
    return (
        <div className='container'>
            <div className='row'>
                <ProductConsumer>
                    {value => {
                        const {clearCart, cartSubTotal, cartTotal} = value;

                        return (
                            <div className='col text-title text-center my-4'>
                                <button className='btn btn-outline-danger text-capitalize mb-4' onClick={clearCart}>
                                    CLEAR CART
                                </button>

                                <h3>
                                    SUBTOTAL: ${cartSubTotal}
                                </h3>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </div>
        </div>
    );
};

export default CartTotal;
