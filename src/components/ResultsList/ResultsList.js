import React, { Component } from 'react'; 
import ResultsItem from '../ResultsItem/ResultsItem'; 
import {connect} from 'react-redux'; 

export class ResultsList extends Component {
    render() {
        return (
            <div>
                {/* {JSON.stringify(this.props.reduxState.reducerOne.data)} */}
                <ul> 
                    {this.props.reduxState.reducerOne.map((gif) => {
                        return (
                            <ResultsItem gif= {gif}  />
                        )
                    })}
                </ul> 
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({reduxState}); 

export default connect(mapReduxStateToProps)(ResultsList);

