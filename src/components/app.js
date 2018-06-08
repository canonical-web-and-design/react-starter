import React, { Component } from 'react';

import HelloWorld from '../components/hello_world';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <HelloWorld />
        </div>
      </div>
    );
  }
}
