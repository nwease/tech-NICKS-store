import React from 'react';
import Product from '../Product';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
import Title from '../Title';

const Featured = () => {
    return (
        <section className='py-5'>
            <div className='container'>
                <Title title='Featured Products' center />

                <div className='row'>
                    <ProductConsumer>
                        {value => {
                            const {featuredProducts} = value;
                            return (
                                featuredProducts.map(product => (
                                    <Product key={product.id} product={product}>

                                    </Product>)
                                )
                            )
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </section>
    );
};

export default Featured;
