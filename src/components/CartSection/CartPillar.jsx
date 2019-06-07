import React from 'react';

const CartPillar = () => {
    return (
        <div className='container-fluid text-center d-none d-lg-block my-5'>
            <div className='row'>
                <div className='col-lg-2'>
                    <p className='text-uppercase'>
                        PRODUCT
                    </p>
                </div>

                <div className='col-lg-2'>
                    <p className='text-uppercase'>
                        NAME
                    </p>
                </div>

                <div className='col-lg-2'>
                    <p className='text-uppercase'>
                        PRICE
                    </p>
                </div>

                <div className='col-lg-2'>
                    <p className='text-uppercase'>
                        QUANTITY
                    </p>
                </div>

                <div className='col-lg-2'>
                    <p className='text-uppercase'>
                        REMOVE
                    </p>
                </div>

                <div className='col-lg-2'>
                    <p className='text-uppercase'>
                        TOTAL
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartPillar;
