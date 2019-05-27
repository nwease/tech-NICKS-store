import React from 'react';
import { ProductConsumer } from '../context';

const Home = () => {
    return (
        <React.Fragment>
            <ProductConsumer>
                {value => {
                    return <h1>HELLO</h1>
                }}
            </ProductConsumer>
        </React.Fragment>
    );
};

export default Home;