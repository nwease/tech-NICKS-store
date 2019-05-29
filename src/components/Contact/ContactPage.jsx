import React from 'react';
import Title from "../Title";

const ContactPage = () => {
    return (
        <section className='py-5'>
            <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                    <Title title='Contact Us' center />
                    <form className='mt-5' action='https://formspree.io/nickwease@gmail.com' method='POST'>
                        <div className='form-group'>
                            <input
                                type='text'
                                name='name'
                                className='form-control'
                                placeholder='Name'
                            />
                        </div>

                        <div className='form-group'>
                            <input
                                type='email'
                                name='email'
                                className='form-control'
                                placeholder='email'
                            />
                        </div>

                        <div className='form-group'>
                            <input
                                type='text'
                                name='subject'
                                className='form-control'
                                placeholder='subject'
                            />
                        </div>

                        <div className='form'>
                            <textarea
                                className='form-control'
                                name='message'
                                rows='10'
                                placeholder='message'
                            />
                        </div>

                        <div className='form-group mt-3'>
                            <input
                                type='submit'
                                value='send'
                                className='form-control bg-primary text-white'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
