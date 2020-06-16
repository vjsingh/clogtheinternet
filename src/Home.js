import React from 'react';
import styled from 'styled-components';

import Header from './Header'
import Title from './Title'
import RightsText from './RightsText'
import * as STATIC from './staticValues';

function Home(props) {
  const [hashtags, setHashtags] = React.useState([]);
  const ref = React.useRef();

  const hashtagsStr = hashtags.join(' ');
  const generateHashtagsPressed = () => {
    callBackendAPI()
      .then(res => {
        setHashtags(res.hashtags)

        ref.current.select();
        document.execCommand('copy');
      })
      .catch(console.error);
  }

  function doCopy() {
    ref.current.select();
    document.execCommand('copy');
  }

  return (
    <Container>
      <SideMarginContainer>
        <Header showMenu={props.showMenu} />
        <Title>Clog_the<br/>Internet</Title>
      </SideMarginContainer>
      <TaglineContainer>
        <TaglineText>
          The Internet is a Tube<br/>
          Clog it, For Justice.
        </TaglineText>
      </TaglineContainer>
      <Main>
        <BodyText>
          The Clog Generator is a tool for the Black Lives Matter movement to automatically expand and randomize the reach of virtual protest content.
        </BodyText>
        <BodyText>
          Simply include these unrelated hashtags in the posts you share, and they will be more likely to be seen by someone who has yet to join the movement.
        </BodyText>
        <HashtagsContainer>
          <textarea multiline="true" value={hashtagsStr} ref={ref} style={hashTagsInputStyles} readOnly />
          <ButtonRow>
            <Button onClick={doCopy}>
              <ButtonText>Copy Hashtags</ButtonText>
            </Button>
            <ButtonSpacer/>
            <YellowButton onClick={generateHashtagsPressed}>
              <YellowButtonText>Generate</YellowButtonText>
            </YellowButton>
          </ButtonRow>
        </HashtagsContainer>
        <RightsText/>
      </Main>
    </Container>
  );
}

const callBackendAPI = async () => {
  const response = await fetch('/get_hashtags');
  return response.json();
};

export default Home;

const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  flex-direction: column;
  background-color: black;
  max-width: 480px;
  margin: 0 auto;
`;

const SideMarginContainer = styled.div`
  margin: 0 ${STATIC.SIDE_MARGIN};
`;

const Main = styled.div`
  flex: 1;
  margin: 10px ${STATIC.SIDE_MARGIN};
`;

const hashTagsInputStyles = {
  width: '100%',
  height: '100px',
  marginBottom: '16px',
  backgroundColor: 'black',
  color: 'white',
  padding: '16px',
  boxSizing: 'border-box',
  border: '1px solid white',
};

const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ButtonSpacer = styled.div`
  width: ${STATIC.SIDE_MARGIN};
`;

const Button = styled.button`
  flex: 1 1 0px;
  height: 49px;
  background-color: black;
  border: 1px solid white;
`;

const ButtonText = styled.p`
  font-family: 'BlackoutMidnight';
  color: white;
  font-size: 12px;
`;

const YellowButton = styled(Button)`
  border: 1px solid ${STATIC.YELLOW};
`;

const YellowButtonText = styled(ButtonText)`
  color: ${STATIC.YELLOW};
`;

const HashtagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaglineContainer = styled.div`
  padding: 0px ${STATIC.SIDE_MARGIN};
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  height: 100px;
  background-color: white;
  justify-content: center;
`;

const TaglineText = styled.p`
  text-transform: uppercase;
  font-family: 'BlackoutMidnight';
  color: black;
  font-size: 20px;
  line-height: 24px;
  margin: 10px 0;
  text-align: center;
  vertical-align: center;
`;

/*
const HashtagText = styled.p`
  font-family: 'Blackout2AM';
  color: black;
`;
*/

const BodyText = styled.p`
  font-family: 'Roboto';
  color: #CCCCCC;
  font-size: 14px;
`
