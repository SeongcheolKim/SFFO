import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Intro from './containers/Intro';
import Projects from './containers/Projects';
import Board from './containers/Board';
import Contact from './containers/Contact';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Intro}/>
      <Route path="projects" component={Projects}/>
      <Route path="board" component={Board}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
