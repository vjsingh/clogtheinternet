import _ from 'lodash';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import Container from './Container'
import * as STATIC from './staticValues';

class Menu extends React.Component {

  onLinkClick(e, location) {
    e.preventDefault();
    this.props.hideMenu();
    this.props.history.push(location);
  }

  renderLink(location, linkHtml) {
    let menuText = "";
    if (_.get(this.props, 'location.pathname') === location) {
      menuText = <MenuText style={{ color: STATIC.YELLOW }}>{linkHtml}</MenuText>;
    } else {
      menuText = <MenuText>{linkHtml}</MenuText>;
    }

    return (
      <MenuLink href={location} onClick={(e) => this.onLinkClick(e, location)}>
        {menuText}
      </MenuLink>
    );
  }

  render() {
    return (
      <Container>
        <BackButton onClick={() => this.props.hideMenu()}>
          <CloseIcon style={{ color: STATIC.YELLOW }}/>
        </BackButton>
        {this.renderLink("/", (<span>Hashtag<br/>Generator</span>))}
        {this.renderLink("/donate", (<span>Places_To<br/>Donate</span>))}
      </Container>
    );
  }
}

export default withRouter(Menu);

const MenuText = styled.span`
`;

const MenuLink = styled.a`
  display: block;

  font-family: 'Blackout2AM';
  font-size: 30px;
  line-height: 50px;
  letter-spacing: 4px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 40px;
  text-transform: uppercase;
  text-decoration: none;
`;

const BackButton = styled.a`
  display: block;

  margin: 16px 0 20px;
`;
