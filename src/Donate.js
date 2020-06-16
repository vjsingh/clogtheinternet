import React from 'react';
import styled from 'styled-components';

import RightsText from './RightsText'
import Header from './Header'
import Title from './Title'
import Container from './Container'
import * as STATIC from './staticValues';

function Donate(props) {
  return (
    <Container>
      <Header showMenu={props.showMenu} />
      <Title>Places_to<br/>Donate</Title>

      <DonateList>
        <DonateListItem>
          <Name>Black Lives Matter</Name>
          <Site href="https://www.blacklivesmatter.com">www.blacklivesmatter.com</Site>
        </DonateListItem>
      </DonateList>

      <RightsText/>

    </Container>
  );
}

export default Donate;

const DonateList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
`;

const DonateListItem = styled.li`
  font-family: 'Roboto';
  color: #CCCCCC;
  font-size: 14px;
  margin-bottom: 24px;
`;

const Name = styled.div`
  color: white;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

const Site = styled.a`
  color: ${STATIC.YELLOW};
  text-decoration: underline;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  &:hover { color: white; }
`;
