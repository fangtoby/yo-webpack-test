import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import App from 'components/Main';
import Login from '../page/Login'

export default class RouteMenagement extends React.Component{
  render(){
    return <Router>
      <Switch>
        <Route path={'/'} exact>
          <App/>
        </Route>
        <Route path={'/index'}>
          <App/>
        </Route>
        <Route path={'/login'}>
          <Login/>
        </Route>
      </Switch>
    </Router>
  }
}
