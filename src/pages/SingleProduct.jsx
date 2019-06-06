import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import singleProductBcg from '../images/singleProductBcg.jpeg';
import { ProductConsumer } from '../context';

const SingleProduct = () => {
    return (
        <React.Fragment>
            <Hero img={singleProductBcg} title='Single Product' />

            <ProductConsumer>
                {value => {
                    const {singleProduct, addToCart, loading} = value;

                    if (loading) {
                        console.log('HELLO');
                        return (
                            <h1>
                                product loading...
                            </h1>
                        )
                    }

                    const {company, description, id, price, title, image} = singleProduct;
                    return (
                        <section className='py-5'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-10 mx-auto col-sm-8 col-md-6 my-3'>
                                        <img
                                            className='img-fluid'
                                            src={`../${image}`} // src={image}
                                            alt='single product'
                                        />
                                    </div>

                                    <div className='col-10 mx-auto col-sm-8 col-md-6 my-3'>
                                        <h5 className='text-title mb-4'>
                                            Model: {title}
                                        </h5>

                                        <h5 className='text-capitalize text-muted mb-4'>
                                            Company: {company}
                                        </h5>

                                        <h5 className='text-main text-capitalize mb-4'>
                                            Price: {price}
                                        </h5>

                                        <p className='text-capitalize text-title mt-3'>
                                            Information about this product:
                                        </p>

                                        <p>
                                            {description}
                                        </p>

                                        <button
                                            className='main-link'
                                            type='button'
                                            style={{margin:'0.75rem'}}
                                            onClick={() => addToCart(id)}
                                        >
                                            ADD TO CART
                                        </button>

                                        <Link
                                            to='/products'
                                            className='main-link'
                                            style={{margin:'0.75rem'}}
                                        >
                                            RETURN TO MENU
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }}
            </ProductConsumer>
        </React.Fragment>
    );
};

export default SingleProduct;