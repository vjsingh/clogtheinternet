import React from 'react';
import Home from './Home';
import Menu from './Menu';
import GlobalFonts from './Fonts';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <div>
          {this.state.showMenu ? (
            <Menu hideMenu={() => this.hideMenu()} />
          ) : (
            <Switch>
              <Route path="/mission">
                <About showMenu={() => this.showMenu()} />
              </Route>
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
        </div>
        <GlobalFonts />
      </Router>
    );
  }
}

function About() {
  return <h2>About</h2>;
}

function Donate() {
  return <h2>Donate</h2>;
}

function Artists() {
  return <h2>Artists</h2>;
}
