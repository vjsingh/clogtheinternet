import React from 'react';
import Menu from '@material-ui/icons/Menu';
import styled from 'styled-components';
import GlobalFonts from './Fonts';

function App() {
  const [hashtags, setHashtags] = React.useState([]);
  const ref = React.useRef();

  React.useEffect(() => {
    // Call our fetch function below once the component mounts
    callBackendAPI()
      .then(res => setHashtags(res.hashtags))
      .catch(console.error);
  }, []);

  const hashtagsStr = hashtags.join(' ');
  const generateHashtagsPressed = () => {
    ref.current.select();
    document.execCommand('copy'); 
  }

  return (
		<Container>
			<Header>
				<Menu style={{color: 'white'}}/>
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
          Eight minutes, 46 seconds.
        </BodyText>
        <BodyText>
          That's how long a police officer kept his knee on George Floyd's neck. George Floyd struggled, pleading for his life: "I can't breathe," until he drew his final breaths, calling for his mother.
        </BodyText>
        <HashtagsContainer>
          <HashtagsView value={hashtagsStr} ref={ref} readOnly>
          </HashtagsView>
          <Button onClick={generateHashtagsPressed}>
            <ButtonText>Generate Hashtags</ButtonText>
          </Button>
        </HashtagsContainer>
			</Main>
			<Footer></Footer>
			<GlobalFonts />
		</Container>
  );
}

const callBackendAPI = async () => {
  const response = await fetch('/get_hashtags');
  return response.json();
};

export default App;

const PADDING_LEFT = '16px';

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

const Footer = styled.div`
`;

const HashtagsView = styled.input`
  width: 90%;
  height: 100px;
  margin-bottom: 16px;
  background-color: black;
  color: white;
`;

const Button = styled.button`
  width: 90%;
  height: 49px;
  background-color: black;
`;

const ButtonText = styled.p`
  font-family: 'BlackoutMidnight';
  color: white;
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
