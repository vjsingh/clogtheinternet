import React from 'react';
import styled from 'styled-components';

import * as STATIC from './staticValues';

export default function Container(props) {
  return (
    <OuterContainer>
      <InnerContainer>
        {props.children}
      </InnerContainer>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  flex-direction: column;
  background-color: black;
  max-width: 480px;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  margin: 0 ${STATIC.SIDE_MARGIN};
`;

