import React from 'react';
import styled from 'styled-components';

import RightsText from './RightsText'
import Header from './Header'
import Title from './Title'
import Container from './Container'
import * as STATIC from './staticValues';

function About(props) {
  return (
    <Container>
      <Header showMenu={props.showMenu} />
      <Title>Our<br/>Mission</Title>

      <BodyText>
Clog the Internet is a tool designed to assist those demanding justice for victims of state violence.
      </BodyText>

      <BodyText>
Clog the Internet is a tool designed to assist those demanding justice for victims of state violence.
A physical protest, by occupying a physical space, ensures that the demands of demonstrators cannot be ignored by others in the same space. It creates an empathy response in passerby, or at least a discomfort, intended to disrupt the status quo and keep the message of the movement stuck in the minds of those who see it.
      </BodyText>

      <BodyText>
Clog the Internet is a tool designed to assist those demanding justice for victims of state violence.
As social progress movements enter into virtual spaces, we need to acknowledge that the fatal flaw of virtual protest is in the algorithms which dictate what a user sees. By tracking key words and hashtags in the content that you like, social media platforms promote posts that are “similar to what you like.” They are designed to reflect your opinion back at you. Virtual spaces have therefore become an ineffective target for protest, as the algorithms make it difficult for social movements to reach people who do not already agree with them.
      </BodyText>

      <BodyText>
Clog the Internet is a tool designed to assist those demanding justice for victims of state violence.
We at Clog the Internet want to provide a tool for subverting the design of these algorithms, to break out of the echo chamber, and bring the message of the movement to the entirety of the internet. The Clog Generator will provide the user with a string of randomized, popular, and opposition hashtags to copy and paste into their posts supporting the movement. If used en masse, together we can ensure that no virtual space will be able to ignore this movement.
      </BodyText>

      <Divider/>

      <BodyText>
*Clog the Internet was developed by a group of non-black allies. In admiration of, and appreciation for Black leaders organizing around the country, we humbly ask that you reach out with suggestions for how we can improve this resource.
      </BodyText>

      <Heading>Contact</Heading>

      <BodyText>
Have an issue, comment or concern? Drop us a line at <BasicLink href="mailto:clogtheinterwebs@gmail.com">clogtheinterwebs@gmail.com</BasicLink>.
      </BodyText>

      <RightsText/>

    </Container>
  );
}

export default About;

const BodyText = styled.p`
  font-family: 'Roboto';
  color: #CCCCCC;
  font-size: 14px;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.3);
`;

const Heading = styled.div`
  color: white;
  font-family: 'BlackoutMidnight';
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 24px;
`;

const BasicLink = styled.a`
  color: ${STATIC.YELLOW};
  text-decoration: none;

  &:hover { color: white; }
`;
