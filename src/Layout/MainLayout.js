import React, { Component } from "react";
import styled from 'styled-components';
import { MOBILE, DESKTOP_WIDTH, HEADER_HEIGHT, MOBILE_HEADER_HEIGHT, FOOTER_HEIGHT } from '../styleConstants';

const Layout = styled.div`
    max-width: ${DESKTOP_WIDTH}px;
    height: 100vh;
    margin: 0 auto;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr ${FOOTER_HEIGHT}px;
    @media (max-width: ${MOBILE}) {
        /* width: 100vw; */
    }
`;

const MainLayout = ({ children, mediaMobile }) => {
    return (
        <Layout
            headerHeight={mediaMobile ? MOBILE_HEADER_HEIGHT : HEADER_HEIGHT}
        >
            {children}
        </Layout>
    );
}


export default MainLayout;