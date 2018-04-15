import React from 'react';
import styled from 'styled-components';
import { PADDING } from '../styleConstants';
import titleImg from '../images/logo-opt.jpg';

const TitleImage = styled.div`
    padding: ${PADDING}px 0;
    background: url(${titleImg}) no-repeat center / contain;
    width: ${props => props.mediaMobile ? 13 + 'em' : 19 + 'em'};
    height: ${props => props.mediaMobile ? 2.4 + 'em' : 3.7 + 'em'};
`;

const HeaderTitle = ({ mediaMobile, title }) => (
        <TitleImage mediaMobile={mediaMobile} />
);


export default HeaderTitle;