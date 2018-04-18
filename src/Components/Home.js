import React, { Component } from "react";
import { BodyContentWrap, P } from '../Components/StyledComponents';
import ImgGallery from '../Components/ImgGallery';

const Home = (props) => (
	<BodyContentWrap>
        	<ImgGallery {...props} />
	</BodyContentWrap>
);

export default Home;
