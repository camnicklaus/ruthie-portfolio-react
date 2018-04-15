import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';
import { PADDING, PINK, DARK_GREEN } from '../styleConstants';

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
    color: ${props => props.whitelistroute ? PINK : 'black'};
    &.active {
        color: ${PINK};
    }
`;
MyNavLink.defaultProps = {
    activeClassName: 'active',
}

const NavBar = ({location}) => {
    let whitelist = false;
    if (/fullsize/.test(location.pathname)) {
        whitelist = true
    }
    return (
        <NavStyle>
            <NavLi><MyNavLink exact to='/' whitelistroute={whitelist ? 1 : 0}>Illustrations</MyNavLink></NavLi>
            <NavLi><MyNavLink to='/about'>About</MyNavLink></NavLi>
            <NavLi><MyNavLink to='/contact'>Contact</MyNavLink></NavLi>
        </NavStyle>
    );
} 

export default withRouter(NavBar);