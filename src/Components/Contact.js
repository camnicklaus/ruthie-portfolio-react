import React from "react";
import { BodyContentWrap, Section } from '../Components/StyledComponents';
import { DARK_GREEN } from '../styleConstants';

const About = () => (
	<BodyContentWrap>
		<Section>
			please feel free to email me!
			<address style={{fontStyle: 'inherit'}}>
				<a style={{color: DARK_GREEN}} href='mailto:ruthiesuniform@gmail.com?subject:from Your site'>ruthiesuniform@gmail.com</a>
			</address>
		</Section>

	</BodyContentWrap>
);

export default About;
