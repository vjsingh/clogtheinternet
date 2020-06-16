import React from 'react';
import styled from 'styled-components';

function Title(props) {
  return (
    <TitleContainer>
      <TitleText>{props.children}</TitleText>
    </TitleContainer>
  );
}


const TitleContainer = styled.div`
  margin-bottom: 8px;
  height: 144px;
`;

const TitleText = styled.p`
  text-transform: uppercase;
  margin: 0px;
  height: 144px;
  font-family: 'Blackout2AM';
  color: rgba(255, 255, 255, 0.5);
  font-size: 42px;
  letter-spacing: 4px;
  line-height: 60px;
`;


export default Title;
