import React from 'react';
import Info from '../components/About/Info';
import Hero from '../components/Hero';
import aboutBcg from '../images/aboutBcg.jpeg';

const About = () => {
    return (
        <React.Fragment>
            <Hero img={aboutBcg} />

            <Info />
        </React.Fragment>
    );
};

export default About;
