import React from 'react';
import Hero from '../components/Hero';
import contactImg from '../images/contactBcg.jpeg';
import ContactPage from '../components/Contact/ContactPage';

const Contact = () => {
    return (
        <React.Fragment>
            <Hero img={contactImg} />
            <ContactPage />
        </React.Fragment>
    );
};

export default Contact;