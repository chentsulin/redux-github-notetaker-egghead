import React, { Component, PropTypes } from 'react';
import Router from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import routes from '../routes';


const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


function renderRoutes(history) {
  return (
    <Router history={history}>
      {routes}
    </Router>
  );
}


export default class App extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;
    return (
      <Provider store={store}>
        {renderRoutes.bind(null, history)}
      </Provider>
    );
  }
}
