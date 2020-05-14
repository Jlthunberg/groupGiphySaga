import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
      console.log( 'in component mount', this.props );
  }

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
      </div>
    );
  }
  
}

const putStateOnProps = (reduxState) => ( { reduxState } );

export default connect(putStateOnProps)(App);
