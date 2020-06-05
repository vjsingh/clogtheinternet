import React from 'react';
import styled from 'styled-components';

function App() {
  React.useEffect(() => {
    // Call our fetch function below once the component mounts
    callBackendAPI()
      .then(res => {})
      .catch(err => console.log(err));
  }, []);

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

const callBackendAPI = async () => {
  const response = await fetch('/get_hashtags');
  const body = await response.json();
  console.log(body);
};

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

const Button = styled.div`
`;
