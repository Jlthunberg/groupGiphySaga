import React, { Component } from 'react'
import ResultsItem from '../ResultsItem/ResultsItem'

export class ResultsList extends Component {
    render() {
        return (
            <div>
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

export default ResultsList
