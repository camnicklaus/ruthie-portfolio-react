import React from "react";
import { BodyContentWrap } from '../Components/StyledComponents';
import ImgGallery from '../Components/ImgGallery';

const Home = (props) => (
	<BodyContentWrap>
        	<ImgGallery {...props} />
	</BodyContentWrap>
);

export default Home;
