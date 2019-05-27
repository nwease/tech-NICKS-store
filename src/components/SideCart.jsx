import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';

const SideCart = () => {
    return (
        <ProductConsumer>
            {value => {
                const { cartOpen, closeCart, cart } = value;

                return (
                    <CartWrapper show={cartOpen} onClick={closeCart}>
                        <p>Cart Items</p>
                    </CartWrapper>
                )
            }}
        </ProductConsumer>
    );
};

const CartWrapper = styled.div `
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGray);
  z-index: 1;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  
  @media(min-width: 576px) {
    width: 20rem;
  }
`;

export default SideCart;
