import React from 'react';
import Hero from '../components/Hero';
import defaultBcg from '../images/defaultBcg.jpeg';
import { Link } from 'react-router-dom';

const Default = () => {
    return (
        <React.Fragment>
            <Hero img={defaultBcg} title='404' max='true'>
                <h2 className='text-uppercase'>
                    Page Not Found
                </h2>

                <Link className='main-link' to='/default' style={{marginTop:'2rem'}}>
                    Home
                </Link>
            </Hero>
        </React.Fragment>
    );
};

export default Default;