import React from "react";
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { MOBILE } from  './styleConstants';

//components
import { MainLayout, Header, Body, Footer } from './Layout';

const App = () => (
	<MediaQuery query={`(max-width: ${MOBILE}px)`}>
		{mobile => (
			<MainLayout mediaMobile={mobile}>
				<Header mediaMobile={mobile} />
				<Body mediaMobile={mobile} />
				<Footer mediaMobile={mobile} />
			</MainLayout>
		)}
	</MediaQuery>
)
export default App;
