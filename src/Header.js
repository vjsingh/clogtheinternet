import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

function Header(props) {
  return (
    <HeaderContainer>
      <MenuButton onClick={() => props.showMenu()}>
        <MenuIcon style={{color: 'white'}}/>
      </MenuButton>
    </HeaderContainer>
  );
}


const MenuButton = styled.button`
  background-color: black;
  border: 0;
  padding: 0;
  margin: 0;
`;

const HeaderContainer = styled.div`
  margin: 16px 0 8px;
`;


export default Header;
