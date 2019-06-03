import React, {Component} from 'react';
import { linkData } from './linkData';
import {socialData} from './socialData';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        sideBarOpen: false,
        cartOpen: false,
        cartItems: 0,
        links: linkData,
        socialLinks: socialData,
        cart: []
    };

    // SIDEBAR
    handleSideBar = () => {
        this.setState({
            sideBarOpen: ! this.state.sideBarOpen
        })
    };

    // SIDECART
    handleCart = () => {
        this.setState({
            cartOpen: ! this.state.cartOpen
        })
    };

    // CLOSE CART
    closeCart = () => {
        this.setState({
            cartOpen: false
        })
    };

    // OPEN
    openCart = () => {
        this.setState({
            cartOpen: true
        })
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSideBar: this.handleSideBar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };