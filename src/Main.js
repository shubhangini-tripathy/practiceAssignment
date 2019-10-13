import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ButtonContent from './ButtonContent';
import Home from './Dashboard';
class Main extends React.Component {
  render() {
    // const history = createBrowserHistory();
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact
              path='/'
              render={props => <Home {...props} />}
            />
            <Route exact
              path='/buttoncontent'
              render={props => <ButtonContent {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default Main;









