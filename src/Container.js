import React from 'react';
import styled from 'styled-components';

import * as STATIC from './staticValues';

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex: 1;
  min-height: 100vh;
  max-width: 480px;
  flex-direction: column;
  background-color: black;
  padding: 8px ${STATIC.SIDE_MARGIN};
`;

export default Container;
