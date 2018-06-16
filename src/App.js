import { observer } from 'mobx-react';
import React from 'react';
import './App.css';
// import store from './AppStore';
// import GeoWeather from './pages/GeoWeather/GeoWeather';
@observer
class App extends React.Component {
  render() {
    // <Provider store={store}>
    //   <GeoWeather />
    // </Provider>
    return <h1>{this.props.store.city[0]}</h1>
  }
}
// const App = () => (
//   <div className="App">
//     <header className="App-header">
//       <h1 className="App-title">Welcome to React</h1>
//     </header>
//     <p className="App-intro">
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </p>
//   </div>
// );

// export default App;
