import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { PADDING, GREEN } from  '../styleConstants';
import { MyNavLink } from './StyledComponents';

const MobileNavStyle = styled.ul`
    max-height: 150px;
    max-height: ${props => props.navOpen ? 'auto' : 0 + 'px'};
    transition: max-height 500ms;
    margin: 0;
    overflow: hidden;
    padding: 0;
    list-style: none;
    width: 100%;
    position: relative;
`;
const BorderBottom = styled.div`
    height: 2px;
    background-color: ${GREEN};
    position: absolute;
    bottom: 0;
    width: 100%;
`;
const NavLi = styled.li`
    text-align: center;
    padding: ${PADDING}px 0px;
    width: 100%;
`;
const MobileNavBar = (props) => {
    const { mobileNavOpen, toggleMenu, location } = props;
    let whitelist = false;
    if (/fullsize/.test(location.pathname)) {
        whitelist = true
    }
    return (
        <MobileNavStyle navOpen={mobileNavOpen}>
            <NavLi onClick={toggleMenu}><MyNavLink exact to='/' whitelistroute={whitelist ? 1 : 0}>Illustrations</MyNavLink></NavLi>
            <NavLi onClick={toggleMenu}><MyNavLink to='/about'>About</MyNavLink></NavLi>
            <NavLi onClick={toggleMenu}><MyNavLink to='/contact'>Contact</MyNavLink></NavLi>
            <BorderBottom />
        </MobileNavStyle>
    );
} 
export default withRouter(MobileNavBar);