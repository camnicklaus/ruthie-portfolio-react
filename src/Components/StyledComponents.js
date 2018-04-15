import styled from 'styled-components';
import { PADDING } from '../styleConstants';

export const BodyContentWrap = styled.div`
	padding: ${props => props.padding ? props.padding + 'px' : PADDING + 'px'};
`;

export const P = styled.p`
    text-align: center;
`;