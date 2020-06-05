import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Header>Clog The Internet</Header>
      <Main>
        <Button>
        </Button>
      </Main>
      <Footer></Footer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  flex-direction: column;
`;

const Header = styled.div`
`;

const Main = styled.div`
`;

const Footer = styled.div`
`;

const Button = styled(Touchable)`
`;
