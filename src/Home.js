import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import styled from 'styled-components';

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
      <Header>
        <MenuButton onClick={() => props.showMenu()}>
          <MenuIcon style={{color: 'white'}}/>
        </MenuButton>
      </Header>
      <TitleContainer>
        <TitleText>Clog_the<br/>Internet</TitleText>
      </TitleContainer>
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
`;

const BodySection = styled.div`
  padding: 0px ${STATIC.SIDE_MARGIN};
  margin-bottom: 8px;
`;

const Header = styled.div`
  margin: 16px ${STATIC.SIDE_MARGIN} 8px;
`;

const Main = styled.div`
  flex: 1;
  margin: 10px ${STATIC.SIDE_MARGIN};
`;

/*
 * Not working for some reason
 *
const HashtagsView = styled.input.attrs(p => ({
  contentEditable: true,
  readOnly: false,
}))`
  width: 90%;
  height: 100px;
  margin-bottom: 16px;
  background-color: black;
  color: white;
`;
*/

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

const MenuButton = styled.button`
  background-color: black;
  border: 0;
  padding: 0;
  margin: 0;
`;

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

const TitleContainer = styled(BodySection)`
  height: 144px;
`;

const HashtagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleText = styled.p`
  text-transform: uppercase;
  margin: 0px;
  height: 144px;
  font-family: 'Blackout2AM';
  color: rgba(255, 255, 255, 0.5);
  font-size: 48px;
  letter-spacing: 4px;
  line-height: 60px;
`;

const TaglineContainer = styled(BodySection)`
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
  font-family: 'Arial';
  color: #CCCCCC;
  font-size: 12px;
`
