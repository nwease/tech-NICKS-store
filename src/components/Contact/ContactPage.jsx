import React from 'react';

const ContactPage = () => {
    return (
        <section className='py-5'>
            <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                    <form className='mt-5' action=''>
                        <div className='form-group'>
                            <input
                                type='text'
                                name='firstName'
                                className='form-control'
                                placeholder='John Doe'
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
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
