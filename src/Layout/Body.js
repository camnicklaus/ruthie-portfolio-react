import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { toggleNavBar } from '../Store/actions';
import styled from 'styled-components';
import { PADDING } from '../styleConstants';
import Home from '../Components/Home';
import ImgGallery from '../Components/ImgGallery';
import About from '../Components/About';
import Contact from '../Components/Contact';
var throttle = require('lodash.throttle');

const BodyWrap = styled.section`
    /* overflow: scroll; */
    /* -webkit-overflow-scrolling: touch; */
`;
const Content = styled.div`
    padding: 0 ${PADDING}px;
`;
const Body = ({mediaMobile}) => (
    <BodyWrap mediaMobile={mediaMobile}>
    <Switch>
        <Route path="/about" render={() => (<About mediaMobile={mediaMobile} />)} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
    </Switch>
    </BodyWrap>
)
export default Body;