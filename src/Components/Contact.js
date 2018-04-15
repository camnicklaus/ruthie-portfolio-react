import React from "react";
import { BodyContentWrap, P } from '../Components/StyledComponents';
import { DARK_GREEN } from '../styleConstants';

const About = () => (
	<BodyContentWrap>
		<P>
			please feel free to email me!
			<address style={{fontStyle: 'inherit'}}>
				<a style={{color: DARK_GREEN}} href='mailto:ruthiesuniform@gmail.com?subject:from Your site'>ruthiesuniform</a>
			</address>
		</P>

	</BodyContentWrap>
);

export default About;
