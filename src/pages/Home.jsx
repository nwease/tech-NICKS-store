import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Services from '../components/Home/Services';
import Featured from '../components/Home/Featured';

const Home = () => {
    return (
        <React.Fragment>
            <Hero title='Technology for Everyday' max='true'>
                <Link className='main-link' to='/products' style={{margin: '2rem'}}>
                    Our Products
                </Link>
            </Hero>

            <Services>

            </Services>

            <Featured>

            </Featured>
        </React.Fragment>
    );
};

export default Home;