import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import HeaderTitle from '../Components/HeaderTitle';
import MobileNavBar from '../Components/MobileNavBar';
import NavBar from '../Components/NavBar';
import { PADDING } from '../styleConstants';
var throttle = require('lodash.throttle');

const HeaderWrap = styled.section`
    display: flex;
    flex-direction: column;
`;
const TitleWrap = styled.div`
    flex: 2;
    display: flex;
    flex-direction: ${props => props.mediaMobile ? 'column' : 'row'};
    justify-content: center;
    align-items: ${props => props.mediaMobile ? 'center' : 'flex-end'}
    ;
`;
const NavWrap = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;
const MenuBtn = styled.div`
    margin-top: ${PADDING}px;
    cursor: pointer;
`;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNavOpen: false
        }
    }
    _toggleMenu = () => {
        this.setState(state => ({ mobileNavOpen: !state.mobileNavOpen }));
    }
    render() {
        const { mediaMobile } = this.props;
        return (
            <HeaderWrap
                mediaMobile={mediaMobile}
            >
                <TitleWrap mediaMobile={mediaMobile}>
                    {mediaMobile && <MobileNavBar mobileNavOpen={this.state.mobileNavOpen} toggleMenu={this._toggleMenu} />}
                    {mediaMobile && <MenuBtn onClick={() => this._toggleMenu()}>menu</MenuBtn>}

                    <HeaderTitle mediaMobile={mediaMobile} title={'Ruthie Nicklaus'} />
                </TitleWrap>
                <NavWrap>
                    {!mediaMobile && <NavBar />}

                </NavWrap>
            </HeaderWrap>
        )
    }

};
// const mapStateToProps = ({showNavBar}) => ({ showNavBar });

export default Header;