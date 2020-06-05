import React from 'react';
import styled from 'styled-components';

function App() {
  const [hashtags, setHashtags] = React.useState([]);

  React.useEffect(() => {
    // Call our fetch function below once the component mounts
    callBackendAPI()
      .then(res => setHashtags(res.hashtags))
      .catch(console.error);
  }, []);

  const hashtagsStr = hashtags.join(' ');
  return (
    <Container>
      <Header>Clog The Internet</Header>
      <Main>
        <HashtagText>{hashtagsStr}</HashtagText>
        <Button>
        </Button>
      </Main>
      <Footer></Footer>
    </Container>
  );
}

const callBackendAPI = async () => {
  const response = await fetch('/get_hashtags');
  return response.json();
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

const HashtagText = styled.p`
`;
