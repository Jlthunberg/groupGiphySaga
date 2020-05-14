import React, { Component } from 'react';

export class Search extends Component {
    
        state ={ 
                search: ''
            }

        handleChange = (event) => {
            console.log('in handleChange', event.target.value);
            this.setState({
                search: event.target.value
            })
        } //end handleChange 

        handleClick = () => {
            console.log('Search clicked');
            this.props.dispatch({
                type: 'SET_SEARCH', 
                payload: this.state.search
            })
        } //end handleClick

        render() {
        return (
            <div>
                <label> Search for a GIF! </label> 
                <input type="text" onChange={this.handleChange} />

                <button onClick= {this.handleClick}> Submit </button> 

                
            </div>
        ) //end return
    }// end render
}// end class

export default Search
