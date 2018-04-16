import React from 'react';
import styled from 'styled-components';
import { PADDING } from '../styleConstants';


const FooterWrap = styled.section`
	/* border: 1px solid red; */
    display: flex;
`;

const FooterText = styled.p`
    font-size: x-small;
    text-align: center;
    display: flex;
    flex: 1;
    justify-content: ${props => props.justifyContent};
    padding: 0 ${PADDING}px;
`;

const Footer = ({mediaMobile}) => (
    <FooterWrap mediaMobile={mediaMobile}>
        <FooterText justifyContent="flex-start">All images &copy; 2018 Ruthie Nicklaus</FooterText>
        <FooterText justifyContent="flex-end">Site by &nbsp; <span><a href='http://camnicklaus.surge.sh/' target="_blank"> Cameron Nicklaus</a></span></FooterText>
    </FooterWrap>
)
export default Footer;