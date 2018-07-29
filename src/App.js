import React from "react";
import { withRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { MOBILE } from  './styleConstants';

//components
import { MainLayout, Header, Body, Footer } from './Layout';

const App = ({location}) => {
	const { pathname } = location;
	switch (true) {
		case /\/fullsize/.test(pathname):
		document.title = "Illustrations";
		break;
		case /\/about/.test(pathname):
		document.title = "About"
		break;
		case /\/contact/.test(pathname):
		document.title = "Contact"
		break;
		default:
		document.title = 'Ruthie Nicklaus';
		break;
	};
	return (
		<MediaQuery query={`(max-width: ${MOBILE}px)`}>
			{mobile => (
				<MainLayout mediaMobile={mobile}>
					<Header mediaMobile={mobile} />
					<Body mediaMobile={mobile} />
					<Footer mediaMobile={mobile} />
				</MainLayout>
			)}
		</MediaQuery>
	);
};
export default withRouter(App);

