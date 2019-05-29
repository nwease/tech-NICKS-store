import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <Hero title='Technology for everyday' max='true'>
                <Link className='main-link' to='/products' style={{margin: '2rem'}}>
                    Our Products
                </Link>
            </Hero>
        </React.Fragment>
    );
};

export default Home;