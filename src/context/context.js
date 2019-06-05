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
        loading: true
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
        },
            () => {
            this.addTotals();
        });
    };

    // GET CART FROM LOCAL STORAGE
    getStorageCart = () => {
        let cart;

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        } else {
            cart = [];
        }

        return cart;
    };

    // GET PRODUCT FROM LOCAL STORAGE
    getStorageProduct = () => {
        return [];
    };

    // GET TOTALS
    getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;

        this.state.cart.forEach(item => {
            subTotal += item.total;
            cartItems += item.count;
        });

        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.5;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));

        return {
            cartItems,
            subTotal,
            tax,
            total
        }
    };

    // ADD TOTALS
    addTotals = () => {
        const totals = this.getTotals();

        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total
        })
    };

    // SYNC STORAGE
    syncStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    };

    // ADD TO CART
    addToCart = (id) => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);

        if(!tempItem) {
            tempItem = tempProducts.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = {...tempItem, count: 1, total};
            tempCart = [...tempCart, cartItem];
        } else {
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }

        this.setState(() => {
            return {cart: tempCart}
        }, () => {
            this.addTotals();
            this.syncStorage();
            this.openCart();
        })
    };

    // SET SINGLE PRODUCT
    setSingleProduct = (id) => {
        let product = this.state.storeProducts.find(item => item.id === id)
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