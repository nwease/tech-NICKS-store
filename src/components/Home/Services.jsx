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
                text: 'We Ship Anywhere in the World with a Click of a Mouse!'
            },

            {
                id: 2,
                icon: <FaRedo />,
                title: '60 Day Return Policy',
                text: 'Keep it for up to 60 Days. If for any reason you are not Satisfied you can return it back to us free of charge!'
            },

            {
                id: 3,
                icon: <FaEuroSign />,
                title: 'Secure Payment Methods',
                text: 'We offer the following payment methods: Visa, Mastercard, American Express and Discover.'
            },
        ]
    };

    render() {
        return (
            <ServicesWrapper className='py-5'>
                <div className='container'>
                    <div className='row'>
                        {this.state.services.map(item => {
                            return (
                                <div
                                    className=
                                        'col-10 mx-auto col-sm-6 col-md-4
                                        text-center my-3'
                                    key={item.id}>
                                    <div className='service-icon'>
                                        {item.icon}
                                    </div>

                                    <div className='mt-3 text-capitalize'>
                                        {item.title}
                                    </div>

                                    <div className='mt-3'>
                                        {item.text}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </ServicesWrapper>
        );
    }
}

const ServicesWrapper = styled.section `
  background: rgba(95, 183, 234, 0.5);
  
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  
  p {
    color: var(--darkGray);
  }
`;

export default Services;