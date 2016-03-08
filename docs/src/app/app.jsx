import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  useRouterHistory,
} from 'react-router';
import AppRoutes from './AppRoutes.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createHashHistory} from 'history';


  //Helpers for debugging
  window.React = React;
  window.Perf = require('react/addons').addons.Perf;

/**
 * Render the main app component. You can read more about the react-router here:
 * https://github.com/rackt/react-router/blob/master/docs/guides/overview.md
 */
ReactDOM.render(
  <Router
    history={useRouterHistory(createHashHistory)({queryKey: false})}
    onUpdate={() => window.scrollTo(0, 0)}
  >
    {AppRoutes}
  </Router>
, document.getElementById('app'));
