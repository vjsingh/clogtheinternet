import React from 'react';
import Home from './Home';
import Artists from './Artists';
import Donate from './Donate';
import Menu from './Menu';
import GlobalFonts from './Fonts';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }

  hideMenu() {
    this.setState({ showMenu: false });
  }

  showMenu() {
    this.setState({ showMenu: true });
  }

  render() {
    return (
      <Router>
        <Background>
          {this.state.showMenu ? (
            <Menu hideMenu={() => this.hideMenu()} />
          ) : (
            <Switch>
              <Route path="/donate">
                <Donate showMenu={() => this.showMenu()} />
              </Route>
              <Route path="/artists">
                <Artists showMenu={() => this.showMenu()} />
              </Route>
              <Route path="/">
                <Home showMenu={() => this.showMenu()} />
              </Route>
            </Switch>
          )}
        </Background>
        <GlobalFonts />
      </Router>
    );
  }
}

const Background = styled.div`
  background-color: black;
`;
