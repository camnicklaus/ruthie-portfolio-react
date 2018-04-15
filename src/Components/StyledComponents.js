import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PADDING, PINK } from '../styleConstants';

export const BodyContentWrap = styled.div`
	padding: ${props => props.padding ? props.padding + 'px' : PADDING + 'px'};
`;

export const P = styled.p`
    text-align: center;
`;
export const Section = styled.section`
    text-align: center;
`;
export const MyNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.whitelistroute ? PINK : 'black'};
    &.active {
        color: ${PINK};
    }
`;
MyNavLink.defaultProps = {
    activeClassName: 'active',
}