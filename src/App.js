import { observer, inject } from 'mobx-react';
import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

@inject('store')
@observer
export default class App extends React.Component {
  static propTypes = { store: PropTypes.object.isRequired };

  render() {
    return <h1>{this.props.store.city[0]}</h1>;
  }
}
