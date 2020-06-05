import { createGlobalStyle } from 'styled-components';

import Blackout2AM from './fonts/blackout_two_am-webfont.woff';
import BlackoutMidnight from './fonts/blackout_two_am-webfont.woff';

export default createGlobalStyle`
	@font-face {
		font-family: 'Blackout2AM';
		src: local('Blackout2AM'), local('Blackout2AM'),
		url(${Blackout2AM}) format('woff');
		font-weight: 300;
		font-style: normal;
	}

	@font-face {
		font-family: 'BlackoutMidnight';
		src: local('BlackoutMidnight'), local('BlackoutMidnight'),
		url(${BlackoutMidnight}) format('woff');
		font-weight: 300;
		font-style: normal;
	}
`;
