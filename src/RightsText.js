import React from 'react';
import styled from 'styled-components';

function RightsText() {
  return (
    <TextContainer>
      2020 clogtheinternet.com. All Rights Reserved.
    </TextContainer>
  );
}


const TextContainer = styled.div`
  margin: 20px 0 0;
  text-align: center;
  text-transform: uppercase;
  font-family: 'BlackoutMidnight';
  color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
  line-height: 30px;
`;


export default RightsText;
