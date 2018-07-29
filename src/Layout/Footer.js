import React from 'react';
import styled from 'styled-components';
import { PADDING, DESKTOP_WIDTH } from '../styleConstants';


const FooterWrap = styled.section`
    display: flex;
`;
const FooterWrapFallback = styled.section`
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    max-width: ${DESKTOP_WIDTH}px;
`;
const FooterText = styled.p`
    font-size: x-small;
    text-align: center;
    display: flex;
    flex: 1;
    justify-content: ${props => props.justifyContent};
    padding: 0 ${PADDING}px;
`;
const Footer = ({mediaMobile}) => {
    return CSS.supports('display', 'grid') ? (
        <FooterWrap mediaMobile={mediaMobile}>
            <FooterText 
                justifyContent="flex-start"
            >
                All images &copy; 2018 Ruthie Nicklaus
            </FooterText>
            <FooterText 
                justifyContent="flex-end"
                style={{float: 'right'}}
            >
                Site by &nbsp; <span><a href='http://camnicklaus.surge.sh/' rel="noopener noreferrer" target="_blank"> Cameron Nicklaus</a></span>
            </FooterText>
        </FooterWrap>
    ) : (
        <FooterWrapFallback mediaMobile={mediaMobile}>
            <FooterText 
                justifyContent="flex-start"
            >
                All images &copy; 2018 Ruthie Nicklaus
            </FooterText>
            <FooterText 
                justifyContent="flex-end"
                style={{float: 'right'}}
            >
                Site by &nbsp; <span><a href='http://camnicklaus.surge.sh/' rel="noopener noreferrer" target="_blank"> Cameron Nicklaus</a></span>
            </FooterText>
        </FooterWrapFallback>
    )
};
export default Footer;