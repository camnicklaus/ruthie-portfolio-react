import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1`
    /* text-align: center; */
`;
const MobileTitleStyle = styled.h3`
    /* text-align: center; */
`;

const HeaderTitle = ({mediaMobile, title}) => mediaMobile ? (
        <MobileTitleStyle>{title}</MobileTitleStyle>
    ) : (
        <TitleStyle>{title}</TitleStyle>
);

export default HeaderTitle;