import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

function Home() {
  const [hashtags, setHashtags] = React.useState([]);
  const ref = React.useRef();

  const hashtagsStr = hashtags.join(' ');
  const generateHashtagsPressed = () => {
    callBackendAPI()
      .then(res => {
        setHashtags(res.hashtags)

        // Copy to clipboard
        /*
        var isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);

        var range = document.createRange();
        range.selectNodeContents(ref);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        ref.setSelectionRange(0, 999999);
        */

        ref.current.select();
        document.execCommand('copy'); 
      })
      .catch(console.error);
  }

  return (
		<Container>
			<Header>
        <Link to="/menu">
          <MenuIcon style={{color: 'white'}}/>
        </Link>
			</Header>
			<TitleContainer>
				<TitleText>Clog_the Internet</TitleText>
			</TitleContainer>
			<TaglineContainer>
				<TaglineText>Clog the Internet,</TaglineText>
				<TaglineText>Make your voice heard</TaglineText>
			</TaglineContainer>
			<Main>
        <BodyText>
          The Clog Generator is a tool for the Black Lives Matter movement to automatically expand and randomize the reach of virtual protest content..
        </BodyText>
        <BodyText>
          Simply include these unrelated hashtags in the posts you share, and they will be more likely to be seen by someone who has yet to join the movement. 
        </BodyText>
        <HashtagsContainer>
          <textarea multiline value={hashtagsStr} ref={ref} contentEditable={true} readOnly={false} style={hashTagsInputStyles}>
          </textarea>
          <Button onClick={generateHashtagsPressed}>
            <ButtonText>Generate Hashtags</ButtonText>
          </Button>
        </HashtagsContainer>
			</Main>
		</Container>
  );
}

/*
  <BodyText>
    Eight minutes, 46 seconds.
  </BodyText>
  <BodyText>
    That's how long a police officer kept his knee on George Floyd's neck. George Floyd struggled, pleading for his life: "I can't breathe," until he drew his final breaths, calling for his mother.
  </BodyText>
*/

const callBackendAPI = async () => {
  const response = await fetch('/get_hashtags');
  return response.json();
};

export default Home;

const PADDING_LEFT = '16px';
const PINK = '#F8A1C8';

const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  flex-direction: column;
  background-color: black;
`;

const BodySection = styled.div`
  padding-left: ${PADDING_LEFT};
  padding-right: ${PADDING_LEFT};
  margin-bottom: 8px;
`;

const Header = styled(BodySection)`
	display: flex;
  height: 56px;
	align-items: center;
`;

const Main = styled.div`
  flex: 1;
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
  width: '90%',
  height: '100px',
  marginBottom: '16px',
  backgroundColor: 'black',
  color: 'white',
  padding: '16px',
  boxSizing: 'border-box',
};

const Button = styled.button`
  width: 90%;
  height: 49px;
  background-color: black;
`;

const ButtonText = styled.p`
  font-family: 'BlackoutMidnight';
  color: ${PINK};
  font-size: 12px;
`;

const TitleContainer = styled(BodySection)`
	height: 144px;
`;

const HashtagsContainer = styled(BodySection)`
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
	height: 100px;
	flex-direction: column;
	background-color: white;
	justify-content: center;
`;

const TaglineText = styled.p`
  position: relative;
  top: -6px;
	text-transform: uppercase;
  font-family: 'BlackoutMidnight';
  color: black;
	font-size: 16px;
  line-height: 24px;
  margin: 5px 0;
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
  margin: 16px;
`
