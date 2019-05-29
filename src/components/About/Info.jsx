import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

const Info = () => {
    return (
        <section className='py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto col-md-6 my-3'>
                        <img
                            className='img-fluid img-thumbnail'
                            src={aboutBcg}
                            alt='headphones'
                            style={{background:'var(--darkGray)'}}
                        />
                    </div>

                    <div className='col-10 mx-auto col-md-6 my-3'>
                        <Title title='about us' center />

                        <p className='text-lead text-muted my-3'>
                            {/*FIX PARAGRAPH*/}
                            Welcome to Tech NICK Store, your number one source for all things
                            electronics. We're dedicated to giving you the very best of service, with a focus on
                            dependability, customer service and uniqueness.
                            Founded in 2019 by Nicholas Wease, Tech NICK Store now serves customers all over the Netherlands,
                            and we are thrilled to be a part of the this fast growing industry.

                            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.

                            Sincerely,
                            Nicholas Wease,
                            CEO and Founder
                        </p>

                        <button className='main-link' type='button' style={{marginTop:'2rem'}}>
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
