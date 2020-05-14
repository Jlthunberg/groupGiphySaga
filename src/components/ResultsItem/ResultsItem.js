import React, { Component } from 'react'

export class ResultsItem extends Component {
    render() {
        return (
            <div>
                <li>
                   {JSON.stringify(this.props.gif)}

                </li>
                
            </div>
        )
    }
}

export default ResultsItem
