import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import RightsText from './RightsText'
import Title from './Title'
import Container from './Container'
import * as STATIC from './staticValues';

function Donate(props) {
  return (
    <Container>
      <Title>Places_to<br/>Donate</Title>

      <HomeLinkContainer>
        <RouterLink to="/">Click here</RouterLink> to return to the homepage and see the hashtag generator.
      </HomeLinkContainer>

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

const HomeLinkContainer = styled.div`
  margin: 16px 0 0;
  font-size: 14px;
  color: #CCCCCC;
`;

const RouterLink = styled(Link)`
  color: ${STATIC.YELLOW};
  text-decoration: none;

  &:hover { color: white; }
`;

