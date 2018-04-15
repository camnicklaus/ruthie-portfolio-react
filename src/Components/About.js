import React, { Component } from "react";
import { BodyContentWrap, P } from '../Components/StyledComponents';
import { PADDING } from '../styleConstants';

const About = ({mediaMobile}) => (
	<BodyContentWrap padding={mediaMobile ? null : PADDING * 8}>
		<P>
			I love to make things and always will. As a child, I filled countless sketchbooks, often to entertain my brothers on car trips. I studied Fine Art at Western Washington University with an emphasis on drawing and sculpture. I have spent my career working as an artist, a clothing designer, a seamstress and costumer.
		</P>
		<P>
			In 2013, my husband and I started our family, and now we have two hilarious and curious sons. Life is full, sleep is hard to come by, and moments that make me laugh are plenty, as well as moments that make me think I had better laugh or I will lose my mind! I’ve recently begun drawing again as a bit of therapy for myself, and to document some of the true moments of parenting and life with a young family. Once again I am inspired to entertain myself and my boys, and others as well, with illustrations of life, both real and imagined.
		</P>
	</BodyContentWrap>
);

export default About;
