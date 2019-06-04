import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaCartPlus } from 'react-icons/fa';
import { ProductConsumer } from '../context';

const Product = ({product}) => {
    return (
        <ProductConsumer>
            {value => {
                const {addToCart, setSingleProduct} = value;

                return (
                    <ProductWrapper className='col-10 mx-auto cl-sm-8 col-md-6 col-lg-4 my-3'>
                        <div className='card'>
                            <div className='img-container'>
                                <img
                                    className='card-img-top p-5'
                                    src={product.image}
                                    alt='product'
                                    style={{height:'320px'}}
                                />
                            </div>
                        </div>
                    </ProductWrapper>
                )
            }}
        </ProductConsumer>
    );
};

const ProductWrapper = styled.div `

`;

export default Product;
