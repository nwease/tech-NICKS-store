import React from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import logo from '../images/logo.svg';

const NavBar = () => {
    return (
        <ProductConsumer>
            {value => {
                const {cartItems, handleSideBar, handleCart} = value;
                return (
                    <wrapper>
                        <div className='nav-center'>
                            <FaBars className='nav-icon' onClick={handleSideBar} />
                            <img src={logo} alt='company logo' />
                            <div className='nav-cart'>
                                <FaCartPlus className='nav-icon' onClick={handleCart} />
                            </div>
                        </div>
                    </wrapper>
                )
            }}
        </ProductConsumer>
    );
};

const wrapper = styled.nav `

`;

export default NavBar;
