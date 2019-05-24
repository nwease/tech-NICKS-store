import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Default from './pages/Default';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            {/* navbar, sidebar, cart, footer */}
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/products' exact component={Products} />
                <Route path='/product/:id' component={SingleProduct} />
                <Route path='/cart' component={Cart} />
                <Route component={Default} />
            </Switch>
        </React.Fragment>
    )
  }
}

export default App;
