import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class GeoWeather extends React.Component {
  constructor(props) {
    super(props);
    this.createNew = this.createNew.bind(this);
  }
  createNew(e) {
    if (e.which === 13) {
      this.props.store.addCity(e.target.value);
      e.target.value = '';
    }
  }
  render() {
    const { city } = this.props.store;
    const cityList = city.map(item => <li key={item}>{item}</li>);
    return (
      <div>
        <input className="input__field" onKeyPress={this.createNew} />
        <ul>{cityList}</ul>
      </div>
    );
  }
}

GeoWeather.propTypes = { store: PropTypes.object };
GeoWeather.defaultProps = { store: '' };
