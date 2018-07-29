import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Swipeable from 'react-swipeable'
import styled from 'styled-components';
import { PADDING, MOBILE } from  '../styleConstants';

import { fullsizeImgs } from '../images/portfolio';
import ImgShow from '../Components/ImgShow';

const GalleryWrap = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 28px;
    @media (max-width: ${MOBILE}px) {
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }
`;
const GalleryItemFallback = styled.div`
    box-sizing: border-box;
    display: table-cell;
    float: left;
    padding: ${PADDING + 'px'};
    min-width: 25%;
    max-width: 33%;
    @media (max-width: ${MOBILE + 'px'}) {
        min-width: 33%;
        max-width: 50%;
        padding: ${PADDING / 2 + 'px'};
    }
`;

const GalleryItem = styled.div`
`;

const GalleryImg = styled.img`
    width: 100%;
`;

const images = (onClick, gridSupported) => (fullsizeImgs.map((img, index) => {
    let refs = {};
    return gridSupported ? (
    <GalleryItem key={index}>
        <GalleryImg
            src={img.thumb}
            fullsizeImgRef={img.fullSize}
            id={index} 
            ref={imgRef => refs[index] = imgRef} 
            onClick={() => onClick(refs[index].props)} 
        />
    </GalleryItem>
    ) : (
        <GalleryItemFallback key={index}>
            <GalleryImg
                src={img.thumb}
                fullsizeImgRef={img.fullSize}
                id={index} 
                ref={imgRef => refs[index] = imgRef} 
                onClick={() => onClick(refs[index].props)} 
            />
        </GalleryItemFallback>
    )
}));

class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImg: null,
            currentImgId: null,
            showFullSize: false,
            gridSupported: CSS.supports('display', 'grid')
        }
    }
    onClick = (currentImg) => {
        this.setState({ currentImg, currentImgId: currentImg.id, showFullSize: true });
        this.props.history.push(`/fullsize/${currentImg.id}`)
        window.scrollTo(0,0);
    }
    _swipedLeft = () => {
        const currentImgId = this.state.currentImgId;
        let nextImgId = currentImgId + 1;
        if (currentImgId >= fullsizeImgs.length - 1) {
            nextImgId = 0;
        };
        this.props.history.push(`/fullsize/${nextImgId}`);
        this.setState({ currentImgId: nextImgId });
    }
    _swipedRight = () => {
        const currentImgId = this.state.currentImgId;
        let nextImgId = currentImgId - 1;
        if (currentImgId <= 0) {
            nextImgId = fullsizeImgs.length - 1;
        };
        this.props.history.push(`/fullsize/${nextImgId}`);
        this.setState({ currentImgId: nextImgId });
    }
    _closeFullSize = () => {
        this.setState({ showFullSize: false, currentImg: null });
        this.props.history.push(`/`)
        window.scrollTo(0,0);
    }
    render() {
        console.log(this.state.gridSupported);
        return (
            <div>
                <Route path={`/fullsize/:id`} render={({ match }) => (
                    <Swipeable
                        onSwipedLeft={this._swipedLeft}
                        onSwipedRight={this._swipedRight}
                        style={{
                            marginBottom: PADDING * 2,
                        }}
                    >
                        <ImgShow
                            src={this.state.currentImg}
                            showFullSize={this.state.showFullSize}
                            closeFullSize={() => this._closeFullSize()}
                            id={match.params.id}
                            onClickRight={this._swipedLeft}
                            onClickLeft={this._swipedRight}
                        />
                    </Swipeable>)}
                />
            <GalleryWrap>
                {images(this.onClick, this.state.gridSupported)}
            </GalleryWrap>
            </div>
        )
    }
}
export default ImageGallery;