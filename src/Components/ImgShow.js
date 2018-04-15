import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { PADDING, MOBILE, DESKTOP_WIDTH } from '../styleConstants';
import { fullsizeImgs } from '../images/portfolio';
import Loader from 'react-loader';
import Img from 'react-image';
// import {DoubleBounce} from 'styled-spinkit';


const NavWrap = styled.div`
    width: 25%;
    height: 100%;
    position: absolute;
    top:0;
    left: ${props => props.navSide === 'left' && 0};
    right: ${props => props.navSide === 'right' && 0};
    cursor: pointer;
    transition: opacity 300ms;
`;
const Arrow = styled.div`
    position: absolute;
    top: 15px;
    opacity: 0.15;
    border: solid black;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 10px;
    cursor: pointer;
    transition: opacity 300ms;
    left: ${props => props.arrowDirection === 'left' && '15px'};
    right: ${props => props.arrowDirection === 'right' && '15px'};
    transform: ${props => {
        switch (props.arrowDirection) {
            case 'left':
            return 'rotate(135deg)';
            case 'right':
            return 'rotate(-45deg)';
            case 'down':
            return 'rotate(45deg)';
        }
    }};
    ${NavWrap}:hover & {
        opacity: 0.4;
    }
    @media (max-width: ${MOBILE}px) {
        /* top: 5px; */
        padding: 8px;
        border-width: 0 2px 2px 0;
    }
`;
const Background = styled.div`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 30%;
`;
const LeftBackground = Background.extend`
    background: linear-gradient(to top left, rgba(255,255,255,0), rgba(255,255,255,0), white);
    transition: opacity 200ms;
    ${NavWrap}:hover & {
        opacity: 1;
    }
`;
const RightBackground = Background.extend`
    background: linear-gradient(to top right, rgba(255,255,255,0), rgba(255,255,255,0), white);
    transition: opacity 200ms;
    ${NavWrap}:hover & {
        opacity: 1;
    }
`;
const Wrap = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 70vw;
    /* border: 1px solid; */
    @media (min-width: ${DESKTOP_WIDTH + 'px'}) {
        height: ${DESKTOP_WIDTH - 250 + 'px'};
        
    }
`
export const keyFrameExampleOne = keyframes`
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`
const MyLoaderStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
const Graphic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 20vh;
    border-radius: 50%;
    /* background-color: #736B9C; */
    color: #5DA1B0;
    animation: ${keyFrameExampleOne} 2s ease-in-out 0s infinite;
`;
const MyLoader = () => (
 <MyLoaderStyle>
     <Graphic>loading ;)</Graphic>
 </MyLoaderStyle>
)
const ImgShow = (props) => {
    const { closeFullSize, id, onClickRight, onClickLeft } = props;
    // console.log('showing FS img', 'params', props)
    return (
        <Wrap>
            <NavWrap navSide={'left'} onClick={onClickLeft}>
                <LeftBackground  />
                <Arrow arrowDirection={'left'} />
            </NavWrap>
            <Img style={{width: '100%'}} src={fullsizeImgs[id].fullSize} onClick={closeFullSize} loader={<MyLoader />} />
            <NavWrap navSide={'right'} onClick={onClickRight}>
                <RightBackground />
                <Arrow arrowDirection={'right'} />
            </NavWrap>
        </Wrap>
    )
};

export default ImgShow;