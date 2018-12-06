import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// Class based
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { lat: null, errMsg: '' };
  // } OR DO BELOW
  state = { lat: null, errMsg: '' };

  componentDidMount() {
    // Geolocation API
    window.navigator.geolocation.getCurrentPosition(
      // Success
      (position) => {
        // Set state
        this.setState({ lat: position.coords.latitude });
      },
      // Fail (or user blocks location)
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.errMsg && !this.state.lat) {
      return (
        <div>
          Error: {this.state.errMsg}
        </div>
      );
    } else if (!this.state.errMsg && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    } else {
      return <Spinner message={"Waiting to receive your location...  Please accept the location request."}/>
    }
  }

  render() {
      return (
        <div>
          {this.renderContent()}
        </div>
      );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
