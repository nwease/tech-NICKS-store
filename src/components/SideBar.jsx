import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

const SideBar = () => {
    return (
        <ProductConsumer>
            {value => {
                const { links, sideBarOpen, handleSideBar } = value;

                return (
                    <SideWrapper>
                        <ul>
                            {links.map(link => {
                                return (
                                    <li key={link.id}>
                                        <Link className='sidebar-link' to={link.path}>
                                            {link.text}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </SideWrapper>
                )
            }}
        </ProductConsumer>
    );
};

const SideWrapper = styled.nav `

`;

export default SideBar;
