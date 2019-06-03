import React, {Component} from 'react';
import styled from 'styled-components';
import { FaDolly, FaRedo, FaEuroSign } from 'react-icons/fa';

class Services extends Component {

    state = {
        services: [
            {
                id: 1,
                icon: <FaDolly />,
                title: 'Free Shipping',
                text: 'Coming'
            },

            {
                id: 2,
                icon: <FaRedo />,
                title: '60 Day Return Policy',
                text: 'Coming Also'
            },

            {
                id: 3,
                icon: <FaEuroSign />,
                title: 'Secure Payment Methods',
                text: 'Coming Too'
            },
        ]
    };

    render() {
        return (
            <div>
                SERVICES
            </div>
        );
    }
}

const ServicesWrapper = styled.div `

`;

export default Services;