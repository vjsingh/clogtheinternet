import React from 'react';
import Menu from '@material-ui/icons/Menu';
import styled from 'styled-components';
import GlobalFonts from './Fonts';

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
			<GlobalFonts />
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
			<HashtagText>Testing</HashtagText>
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
`;

const Header = styled(BodySection)`
	display: flexbox;
  height: 56px;
	align-items: center;
`;

const Main = styled.div`
  flex: 1;
`;

const Footer = styled.div`
`;

const Button = styled.div`
`;

const TitleContainer = styled(BodySection)`
	height: 144;
`;

const TitleText = styled.p`
	text-transform: uppercase;
  font-family: 'Blackout2AM';
  color: rgba(255, 255, 255, 0.5);
	font-size: 48px;
	letter-spacing: 4px;
	line-height: 60px;
`;
// line-height: 60;

const TaglineContainer = styled(BodySection)`
	display: flexbox;
	height: 103px;
	flex-direction: column;
	background-color: white;
	justify-content: center;
`;

const TaglineText = styled.p`
	text-transform: uppercase;
  font-family: 'BlackoutMidnight';
  color: black;
	font-size: 15px;
	line-height: 8px;
	text-align: center;
	vertical-align: center;
`;

const HashtagText = styled.p`
  font-family: 'Blackout2AM';
  color: black;
`;
