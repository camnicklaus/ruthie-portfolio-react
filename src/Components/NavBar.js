import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PADDING } from '../styleConstants';

const NavStyle = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
const NavLi = styled.li`
    display: inline-block;
    padding: ${PADDING}px;
`;
const MyNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    &.${props => props.activeClassName} {
        color: pink;
    }
`;

MyNavLink.defaultProps = {
    activeClassName: 'active'
}

const NavBar = () => (
    <NavStyle>
        <NavLi><MyNavLink exact to='/'>Illustrations</MyNavLink></NavLi>
        <NavLi><MyNavLink to='/about'>About</MyNavLink></NavLi>
        <NavLi><MyNavLink to='/contact'>Contact</MyNavLink></NavLi>
    </NavStyle>
);

export default NavBar;