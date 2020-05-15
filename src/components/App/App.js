import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../Search/Search'; 
import ResultsList from '../ResultsList/ResultsList'; 
import FavoritesList from '../FavoritesList/FavoritesList'; 

class App extends Component {

  componentDidMount() {
      console.log( 'in component mount', this.props );
  }

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Search dispatch = {this.props.dispatch} /> 
        <ResultsList/>
        <FavoritesList dispatch = {this.props.dispatch} />

      </div>
    );
  }
  
}

const putStateOnProps = (reduxState) => ( { reduxState } );

export default connect(putStateOnProps)(App);
