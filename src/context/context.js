import React, {Component} from 'react';
import {linkData} from './linkData';
import {socialData} from './socialData';
import {items} from './productData';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        sideBarOpen: false,
        cartOpen: false,
        links: linkData,
        socialLinks: socialData,
        cart: [],
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: false
    };

    componentDidMount = () => {
        // FROM CONTENTFUL ITEMS

        this.setProducts(items);
    };

    // SET PRODUCTS
    setProducts = (products) => {
        let storeProducts = products.map(item => {
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            return {id, ...item.fields, image};
        });
    // FEATURED PRODUCTS
        let featuredProducts = storeProducts.filter(item => item.featured === true)

        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false
        })
    };

    // GET CART FROM LOCAL STORAGE
    getStorageCart = () => {
        return [];
    };

    // GET PRODUCT FROM LOCAL STORAGE
    getStorageProduct = () => {
        return [];
    };

    // GET TOTALS
    getTotals = () => {

    };

    // ADD TOTALS
    addTotals = () => {

    };

    // SYNC STORAGE
    syncStorage = () => {

    };

    // ADD TO CART
    addToCart = (id) => {
        console.log(`add to cart ${id}`);
    };

    // SET SINGLE PRODUCT
    setSingleProduct = (id) => {
        console.log(`set single product ${id}`);
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
                openCart: this.openCart,
                addToCart: this.addToCart,
                setSingleProduct: this.setSingleProduct
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };