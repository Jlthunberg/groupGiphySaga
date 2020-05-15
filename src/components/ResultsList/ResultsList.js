import React, { Component } from 'react'; 
import ResultsItem from '../ResultsItem/ResultsItem'; 
import {connect} from 'react-redux'; 

export class ResultsList extends Component {
    render() {
        return (
            <div>
                <div>
                    <button>Favorites</button>
                </div>
                {/* {JSON.stringify(this.props.reduxState.reducerOne.data)} */}
                <ul> 
                    {this.props.reduxState.reducerOne.map((gif) => {
                        return (
                            <ResultsItem key={gif.id} gif= {gif} dispatch = {this.props.dispatch}  />
                        )
                    })}
                </ul> d
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({reduxState}); 

export default connect(mapReduxStateToProps)(ResultsList);

