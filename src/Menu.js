import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Menu() {
  return (
		<Container>
      <Link to="/">
        <MenuText>Hashtag Generator</MenuText>
      </Link>
      <Link to="/">
        <MenuText>Our_Mission</MenuText>
      </Link>
		</Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  flex-direction: column;
  background-color: black;
`;

const MenuText = styled.p`
  font-family: 'Blackout2AM';
  font-size: 36px;
  line-height: 60px;
  letter-spacing: 4px;
  color: white;
  text-transform: uppercase;
`;
