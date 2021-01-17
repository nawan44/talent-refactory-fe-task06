import React, { Component } from 'react'
import './style/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/home.jsx';




export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />

        </Switch>
      </BrowserRouter>
    );
  }
}
