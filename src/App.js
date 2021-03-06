import React from 'react';
import Home from './Home';
import Donate from './Donate';
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
          <Switch>
            <Route path="/donate">
              <Donate />
            </Route>
            <Route>
              <Home />
            </Route>
          </Switch>
        </Background>
        <GlobalFonts />
      </Router>
    );
  }
}

const Background = styled.div`
  background-color: black;
`;
