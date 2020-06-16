import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
      <CenterContainer>
        <SideMarginContainer>
          <Title>Clog_the<br/>Internet</Title>
        </SideMarginContainer>
      </CenterContainer>

      <TaglineContainer>
        <TaglineText>
          Occupy the tubes
        </TaglineText>
      </TaglineContainer>

      <CenterContainer>
        <Main>
          <BodyText>
            Clog the Internet is a tool for digital demonstrators to automatically expand and randomize the reach of virtual protest content.
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

          <Divider/>

          <BodyText>
            Clog was designed in an effort to assist Black Lives Matter protests in virtual space.
          </BodyText>

          <BodyText>
            Just as physical protest functions by filling the streets, by occupying and disrupting public spaces, we set out to clog the internet tubes with protest content.
          </BodyText>

          <BodyText>
            By providing users with a string of randomized, popular, and opposition hashtags to copy and paste into posts supporting the movement, The Clog Generator, if used en masse, will ensure that no virtual space is able to avoid the message of this movement.
          </BodyText>

          <BodyText>
            As protests enter into virtual spaces, we need to acknowledge that the fatal flaw of virtual protest is in the algorithms which dictate what a user sees. By tracking key words and hashtags in the content that you spend time looking at, or *like*, social media platforms promote posts that are <i>similar to what you like</i>. They are designed to reflect your opinion back at you. Virtual spaces have therefore become an ineffective target for protest, as the algorithms make it difficult for social movements to reach people who do not already agree with them.
          </BodyText>

          <BodyText>
            We at Clog the Internet want to provide a tool for subverting the design of these algorithms, to break out of the echo chamber, and bring the message of the movement to the entirety of the internet.
          </BodyText>

          <BodyText>
            Please share this resource so that we can collectivley flood these passive spaces with our voices.
          </BodyText>

          <BodyText>
            The Internet is just a series of tubes. Together we can clog it.
          </BodyText>

          <Divider/>

          <Heading>Places to Donate</Heading>

          <BodyText>
            There are many organizations we admire who are doing great work on the front lines of the fight for justice. <RouterLink to="/donate">Click here</RouterLink> for a list of organizations to which we recommend you donate any time or money you can spare.
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
        </Main>
      </CenterContainer>
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

const SideMarginContainer = styled.div`
  margin: 0 ${STATIC.SIDE_MARGIN};
`;

const CenterContainer = styled.div`
  margin: 0 auto;
  max-width: 480px;
  width: 100%;
`;

const Main = styled.div`
  margin: 0 ${STATIC.SIDE_MARGIN};
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
  margin-bottom: 8px;
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
  height: 60px;
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

const RouterLink = styled(Link)`
  color: ${STATIC.YELLOW};
  text-decoration: none;

  &:hover { color: white; }
`;

