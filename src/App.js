import { observer, inject } from 'mobx-react';
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import GeoWeather from './pages/GeoWeather';

@inject('store')
@observer
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <GeoWeather store={this.props.store} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

App.propTypes = { store: PropTypes.object.isRequired };
