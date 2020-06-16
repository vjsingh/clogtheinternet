import React from 'react';
import styled from 'styled-components';

import Container from './Container'
import RightsText from './RightsText'
import Header from './Header'
import Title from './Title'
import * as STATIC from './staticValues';

function Artists(props) {
  return (
    <Container>
      <Header showMenu={props.showMenu} />
      <Title>Black<br/>Artists</Title>

      <ArtistTile>
        <ArtistInfo>
          <InfoContainer>
            <ArtistName>Temi Coker</ArtistName>
            <ArtistWebsite href="https://temicoker.co">temicoker.co</ArtistWebsite>
          </InfoContainer>
        </ArtistInfo>
        <ArtistImage src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/101387039_251696146108482_719334181343596050_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=pZ0UzA3wc4MAX8yTpvC&oh=3d2f8e838d290c829e96eb8288b90ab7&oe=5F1179E5" />
      </ArtistTile>

      <ArtistTile>
        <DarkArtistInfo>
          <InfoContainer>
            <DarkArtistName>Monica Ahanonu</DarkArtistName>
            <DarkArtistWebsite href="https://mahanonu.com">mahanonu.com</DarkArtistWebsite>
          </InfoContainer>
        </DarkArtistInfo>
        <ArtistImage src="https://pbs.twimg.com/media/EZMk-OWUwAEe2ef.jpg" />
      </ArtistTile>


      <RightsText/>

    </Container>
  );
}

export default Artists;

const ArtistTile = styled.div`
  position: relative;
  height: 152px;
  margin-bottom: 24px;
`;

const ArtistInfo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 64px;
  width: 72%;
  background-color: ${STATIC.YELLOW};
  z-index: 5;
`;

const InfoContainer = styled.div`
  margin: 16px 16px;
`;

const ArtistName = styled.div`
  color: black;
  font-family: 'BlackoutMidnight';
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
`;

const ArtistWebsite = styled.a`
  color: black;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  text-decoration-line: underline;

  &:hover {
    color: #4a4a4a;
    text-decoration: none;
  }
`;

const ArtistImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 128px;
  height: 128px;
  z-index: 3;
`;

const DarkArtistInfo = styled(ArtistInfo)`
  background: black;
  border: 1px solid white;
  box-sizing: border-box;
`;

const DarkArtistName = styled(ArtistName)`
  color: white;
`;

const DarkArtistWebsite = styled(ArtistWebsite)`
  color: ${STATIC.YELLOW};
  &:hover {
    color: white;
    text-decoration: none;
  }
`;


